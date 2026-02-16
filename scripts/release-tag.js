const { execSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const tag = `v${packageJson.version}`;

const existingTags = execSync("git tag --list", { encoding: "utf8" })
  .split(/\r?\n/)
  .filter(Boolean);

if (existingTags.includes(tag)) {
  console.error(`Tag already exists: ${tag}`);
  process.exit(1);
}

execSync(`git tag -a ${tag} -m "release: ${tag}"`, { stdio: "inherit" });
console.log(`Created tag: ${tag}`);
