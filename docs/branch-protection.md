# Branch Protection Baseline (`main`)

`main` 브랜치에 아래 규칙을 권장합니다.

## Required Rules

1. Pull request 없이 직접 푸시 금지
2. 최소 1명 승인 필요
3. 새 커밋 푸시 시 기존 승인 무효화
4. 머지 전 최신 `main` 기준으로 브랜치 업데이트 필요
5. Required status checks:
   - `quality` (GitHub Actions job)
6. Force push 금지
7. Branch 삭제 금지

## Optional Rules

1. 관리자에게도 동일 규칙 적용
2. CODEOWNERS 리뷰 필수화
3. Conversation resolution(대화 해결) 필수

## Apply Path (GitHub UI)

1. Repository `Settings`
2. `Branches` -> `Branch protection rules`
3. `Add rule` for `main`
4. 위 항목 체크 후 저장
