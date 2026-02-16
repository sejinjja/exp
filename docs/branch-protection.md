# Branch Protection Baseline (`main`)

This file tracks the branch protection policy currently applied to `main`.

## Required Rules

1. No direct pushes to `main` (PR required)
2. At least 1 approving review required
3. Dismiss stale approvals on new commits
4. Require branches to be up to date before merging
5. Required status checks:
   - `quality` (GitHub Actions job)
   - `security` (GitHub Actions job)
6. Require CODEOWNERS review
7. Require conversation resolution before merging
8. Apply rules to administrators
9. Disallow force pushes
10. Disallow branch deletion

## Apply Path (GitHub UI)

1. Repository `Settings`
2. `Branches` -> `Branch protection rules`
3. Edit rule for `main`
4. Configure the options above and save
