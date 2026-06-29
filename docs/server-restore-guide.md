# 포트폴리오 사이트 복구 가이드

이 문서는 다른 컴퓨터나 서버에서 포트폴리오 페이지를 그대로 복구하는 방법입니다.

## 필요한 것

- Git
- Node.js 20 이상 권장
- npm
- GitHub 저장소 접근 권한

## 1. 코드 내려받기

```bash
git clone https://github.com/hongsheeya/job-portfolio.git
cd job-portfolio
```

## 2. 의존성 설치

```bash
npm install
```

`node_modules/` 폴더는 GitHub에 올리지 않습니다. 용량이 크고, `npm install`로 언제든 다시 만들 수 있기 때문입니다.

## 3. 로컬에서 확인

```bash
npm run dev
```

터미널에 표시되는 주소로 접속합니다. 보통 아래 주소 중 하나입니다.

```text
http://localhost:5173/
```

## 4. 배포용 파일 만들기

```bash
npm run build
```

명령이 끝나면 `dist/` 폴더가 생깁니다. 이 폴더가 실제 웹사이트 완성본입니다.

## 5. GitHub Pages 배포

이 저장소는 GitHub Actions 배포 파일을 포함합니다.

1. GitHub 저장소로 이동합니다.
2. `Settings > Pages`로 들어갑니다.
3. Source를 `GitHub Actions`로 설정합니다.
4. `main` 브랜치에 push하면 자동으로 배포됩니다.

수동 배포가 필요하면 아래 명령도 사용할 수 있습니다.

```bash
npm run deploy
```

## 6. 다른 정적 서버에 올리는 경우

GitHub Pages가 아니라 일반 서버에 올릴 때는 `dist/` 폴더 안의 파일을 웹 서버 루트에 올리면 됩니다.

예를 들어 Nginx라면:

```text
/var/www/job-portfolio/
```

에 `dist/` 안의 파일을 복사하고 Nginx root를 그 경로로 잡으면 됩니다.

## 7. 주소 경로 주의

GitHub Pages에서는 기본 경로가 `/job-portfolio/`입니다. 일반 서버의 최상위 주소(`/`)에 올릴 때는 아래처럼 빌드합니다.

```bash
VITE_BASE_PATH=/ npm run build
```

하위 경로에 올릴 때는 해당 경로를 지정합니다.

```bash
VITE_BASE_PATH=/my/path/ npm run build
```

## 8. 수정해야 할 주요 파일

| 수정 목적 | 파일 |
| --- | --- |
| 이름, 연락처, 학력 수정 | `src/data/portfolio.ts` |
| 프로젝트 설명 수정 | `src/data/portfolio.ts` |
| 화면 순서 수정 | `src/pages/Home.tsx` |
| 디자인 수정 | `src/styles.css` |
| 이력서 PDF 교체 | `public/byun-giguk-resume.pdf` |

## 9. 복구 확인 체크리스트

- `npm install`이 성공했는가?
- `npm run build`가 성공했는가?
- 홈 화면 `#/`가 열리는가?
- FallAI 상세 페이지 `#/projects/fallai`가 열리는가?
- PDF 저장 버튼이 동작하는가?
- 이력서 PDF 링크가 열리는가?

## 10. GitHub에 올리지 않아야 하는 것

- 비밀번호
- API 키
- 개인 토큰
- `.env` 파일
- 불필요하게 큰 생성물
- 공개하면 안 되는 개인정보

현재 `.gitignore`는 `node_modules`, `dist`, `.env` 계열 파일을 제외하도록 설정되어 있습니다.
