# 📸 ReceiPie

**ReceiPie**는 OCR(광학 문자 인식)을 활용해 영수증을 자동으로 인식하고,  
사용자별로 더치페이를 간편하게 정산할 수 있는 웹 서비스입니다.

---

## 🚀 기술 스택

- **Frontend**: Vue 3 (Vite, Composition API, TypeScript)
- **Styling**: Bootstrap 5
- **State Management**: Pinia
- **Linter/Formatter**: ESLint, Prettier
- **Git Hooks**: Husky, Lint-Staged, Commitlint
- **OCR**: Naver CLOVA OCR
- **Parsing**: GPT 3.5

---

## ⚙️ 프로젝트 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 프로덕션 빌드

```bash
npm run build
```

---

## 🧹 커밋 & 코드 스타일 규칙

- 커밋 메시지는 **[Conventional Commits](https://www.conventionalcommits.org/)** 형식을 따릅니다.
- 커밋 형식은 **.github/ISSUE_TEMPLATE/CONTRIBUTING.md** 참고하세요.
- 커밋 시 `pre-commit` 훅으로 **eslint**, **prettier**가 자동 실행됩니다.
- 메시지 형식이 맞지 않으면 `commitlint`에 의해 커밋이 거부됩니다.
- 편하게 커밋하려면 Copilot 사용을 권장합니다.

---

## 🧑‍💻 협업 시 참고사항

1. 레포를 clone 한 뒤 아래 순서로 초기화:

```bash
git clone https://github.com/your-org/receipie.git
cd receipie
npm install
```

2. 커밋 메시지는 반드시 규칙에 맞춰 작성
3. Issue 및 PR 생성 시 템플릿 형식에 맞게 작성

---

## 📁 기타

- `.github/ISSUE_TEMPLATE/`, `pull_request_template.md` 통해 이슈 및 PR 작성 가이드를 제공!
- ESLint 및 Prettier 설정은 `.eslintrc`, `.prettierrc`에 정의!

---
