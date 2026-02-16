# Security Policy

## Supported Versions

This project is pre-1.0.0 and supports security fixes on the latest `main` branch.

## Reporting a Vulnerability

Please do not open a public issue for security problems.

Report privately by email:

- `sejinjja@gmail.com`

Include:

1. A clear summary of the issue
2. Reproduction steps or proof of concept
3. Potential impact
4. Suggested fix (if available)

## Response Targets

1. Initial response: within 3 business days
2. Triage decision: within 7 business days
3. Fix timeline: based on severity and complexity

## Automated Security Checks

- Dependency audit in CI (`npm audit --audit-level=high`)
- Code scanning via GitHub CodeQL (`.github/workflows/codeql.yml`)
- Pull request dependency review (`.github/workflows/dependency-review.yml`)
- Secret scanning via Gitleaks (`.github/workflows/secret-scan.yml`)
- SBOM generation workflow (SPDX JSON, `.github/workflows/sbom.yml`)
