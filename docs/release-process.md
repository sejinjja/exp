# Release Process

This project publishes releases from tags that match `v*.*.*`.

## 1) Prepare version in a PR

1. Create a feature branch from `main`.
2. Update `package.json` version without creating a tag:
   - `npm.cmd version patch --no-git-tag-version`
3. Run validation:
   - `npm.cmd run release:validate`
4. Open PR and merge to `main`.

## 2) Create and push release tag on main

1. Update local `main`:
   - `git switch main`
   - `git pull`
2. Create annotated tag from package version:
   - `npm.cmd run release:tag`
3. Push tag:
   - `git push origin --tags`

## 3) Verify release automation

1. Check GitHub Actions `Release` workflow
2. Confirm release appears in:
   - `https://github.com/sejinjja/exp/releases`
