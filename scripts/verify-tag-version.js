const fs = require("node:fs");
const path = require("node:path");

const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

const version = packageJson.version;
const expectedTag = `v${version}`;
const refName = process.env.GITHUB_REF_NAME || process.argv[2];

if (!refName) {
  console.error("Missing tag input. Set GITHUB_REF_NAME or pass a tag argument, e.g. v0.1.1");
  process.exit(1);
}

if (refName !== expectedTag) {
  console.error(`Tag/version mismatch: tag=${refName}, expected=${expectedTag}`);
  process.exit(1);
}

console.log(`Tag matches package version: ${refName}`);
