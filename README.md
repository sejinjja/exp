# exp

Minimal Node.js project scaffold.

## Project Structure

- `src/`: application source code
- `tests/`: tests using `node --test`
- `docs/`: documentation
- `.github/workflows/ci.yml`: CI pipeline

## Quick Start

1. Install dependencies:
   `npm.cmd install`
2. Run quality checks:
   `npm.cmd run check`
3. Run tests:
   `npm.cmd test`

## Branch Protection

- Recommended baseline: `docs/branch-protection.md`

## Collaboration

- Contribution guide: `CONTRIBUTING.md`
- Pull request template: `.github/pull_request_template.md`
- Issue templates: `.github/ISSUE_TEMPLATE/`
- Code of conduct: `CODE_OF_CONDUCT.md`
- License: `LICENSE`
- Support policy: `SUPPORT.md`

## Maintenance

- Dependency updates: `.github/dependabot.yml`
- Required checks: `quality`, `security`, `Analyze`, `dependency-review`, `gitleaks`
- CI checks: `.github/workflows/ci.yml` (`quality`, `security`)
- Code scanning: `.github/workflows/codeql.yml`
- Dependency review: `.github/workflows/dependency-review.yml`
- Secret scan: `.github/workflows/secret-scan.yml`
- Security policy: `SECURITY.md`
- Tag release automation: `.github/workflows/release.yml` (tag pattern `v*.*.*`)
- Release guard: tag must match `package.json` version
- Release validation in workflow: `release:validate` (includes `npm audit`)
- Release runbook: `docs/release-process.md`
