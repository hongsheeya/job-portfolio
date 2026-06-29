# 교수님께 드리는 포트폴리오 전체 코드 설명

이 문서는 프로그래밍을 전공하지 않은 분도 포트폴리오 사이트의 코드를 따라갈 수 있도록 만든 설명서입니다. 목표는 “코드 한 줄 한 줄의 문법 암기”가 아니라, 각 파일이 왜 있고, 사용자가 화면에서 어떤 행동을 하면 어느 코드가 움직이는지 이해하는 것입니다.

## 1. 한 문장으로 말하면

이 저장소는 변기국의 이력, 역량, 프로젝트, PDF 포트폴리오를 보여주는 웹사이트입니다. `React`와 `Vite`라는 웹 제작 도구를 사용했고, 완성된 결과물은 GitHub Pages에 올려 누구나 주소로 볼 수 있게 했습니다.

## 2. 비유로 먼저 이해하기

웹사이트를 작은 전시장이라고 생각하면 쉽습니다.

| 전시장 요소 | 코드에서의 이름 | 쉬운 설명 |
| --- | --- | --- |
| 전시장 입구 | `src/main.tsx` | 사이트를 처음 켜는 시작 버튼입니다. |
| 안내 데스크 | `src/App.tsx` | 지금 주소가 홈인지, FallAI 상세인지, 다른 프로젝트 상세인지 판단합니다. |
| 전시 원고 | `src/data/portfolio.ts` | 이름, 학력, 프로젝트 설명, 성과 수치 등 실제 내용이 들어 있습니다. |
| 전시 패널 | `src/components/` | 상단 소개, 프로젝트 카드, 기술 스택, 연락처처럼 화면 조각을 담당합니다. |
| 전시실 | `src/pages/` | 홈 화면, FallAI 상세 화면, phantom3D 상세 화면 등을 조립합니다. |
| 인테리어 규칙 | `src/styles.css` | 글자 크기, 여백, 색상, 모바일 화면 배치를 정합니다. |
| 인쇄용 책자 | `src/components/PortfolioPdf.tsx` | 웹 내용을 PDF로 뽑기 좋게 다시 정리한 숨은 문서입니다. |
| 전시장 주소 배포 | GitHub Pages | 서버를 직접 운영하지 않고 GitHub에서 정적 웹사이트를 공개합니다. |

## 3. 먼저 알아두면 좋은 용어

| 용어 | 쉬운 뜻 |
| --- | --- |
| 웹사이트 | 브라우저에서 보는 화면 전체입니다. |
| 프론트엔드 | 사용자가 직접 보는 화면과 버튼입니다. |
| 컴포넌트 | 화면을 이루는 작은 조각입니다. 예를 들어 소개 영역, 프로젝트 카드, 연락처 영역이 각각 컴포넌트입니다. |
| 데이터 파일 | 화면에 들어갈 문장과 숫자를 모아둔 파일입니다. 이 프로젝트에서는 `portfolio.ts`가 핵심입니다. |
| 라우트 | 주소에 따라 어떤 화면을 보여줄지 정하는 길 안내표입니다. |
| 빌드 | 사람이 읽는 개발용 코드를 브라우저가 빠르게 읽는 배포용 파일로 바꾸는 작업입니다. |
| 정적 사이트 | 로그인 서버나 데이터베이스 없이, 미리 만들어둔 HTML/CSS/JavaScript 파일만으로 열리는 사이트입니다. |
| GitHub Pages | GitHub 저장소의 코드를 웹사이트 주소로 공개해 주는 기능입니다. |

## 4. 전체 폴더 구조

| 위치 | 비전공자용 설명 | 실제 역할 |
| --- | --- | --- |
| `README.md` | 표지와 사용 안내 | 저장소 소개, 실행 방법, 주요 링크를 적은 첫 문서입니다. |
| `package.json` | 필요한 도구 목록 | React, Vite, TypeScript 등 실행에 필요한 도구와 명령어가 적혀 있습니다. |
| `vite.config.ts` | 전시장 설치 규칙 | GitHub Pages에서 주소가 깨지지 않도록 기본 경로를 정합니다. |
| `tsconfig.json` | 문법 검사 규칙 | TypeScript가 코드를 검사할 때 쓰는 기준입니다. |
| `index.html` | 웹사이트의 빈 도화지 | 브라우저가 처음 여는 HTML입니다. React 화면은 이 안에 붙습니다. |
| `public/` | 그대로 공개되는 파일함 | 이력서 PDF, favicon처럼 주소로 바로 열어야 하는 파일을 둡니다. |
| `src/` | 실제 사이트 코드 | 화면, 데이터, 디자인, PDF 기능이 들어 있습니다. |
| `src/assets/` | 그림 자료 | 프로젝트 파이프라인 SVG 같은 시각 자료를 보관합니다. |
| `src/components/` | 화면 조각 | 재사용되는 UI 블록입니다. |
| `src/data/` | 사이트 원고 | 포트폴리오 내용 대부분이 이곳에 있습니다. |
| `src/pages/` | 완성된 화면 | 홈과 프로젝트 상세 페이지를 조립합니다. |
| `src/utils/` | 보조 기능 | PDF 저장처럼 여러 곳에서 쓸 수 있는 작은 기능을 둡니다. |
| `docs/` | 교수님/복구용 설명서 | 코드 설명과 다른 서버 복구 방법을 문서화했습니다. |
| `dist/` | 배포 결과물 | `npm run build` 후 생기는 완성 파일입니다. 직접 수정하는 원본은 아닙니다. |
| `node_modules/` | 외부 도구 창고 | 설치된 라이브러리입니다. 직접 작성한 코드가 아니므로 교수님 검토 대상에서는 보통 제외합니다. |

## 5. 파일 확장자 뜻

| 확장자 | 쉬운 설명 |
| --- | --- |
| `.tsx` | TypeScript와 React 화면 코드가 함께 있는 파일입니다. |
| `.ts` | TypeScript 코드입니다. 화면보다는 데이터, 라우트, 기능 보조에 많이 씁니다. |
| `.css` | 디자인 규칙입니다. 색상, 크기, 여백, 반응형 화면을 정합니다. |
| `.svg` | 확대해도 깨지지 않는 그림 파일입니다. |
| `.pdf` | 제출용 문서 파일입니다. |
| `.md` | Markdown 문서입니다. README나 설명서처럼 사람이 읽는 문서입니다. |
| `.json` | 설정이나 데이터가 정해진 형식으로 들어 있는 파일입니다. |

## 6. 사용자가 사이트를 열 때 코드가 움직이는 순서

1. 브라우저가 `index.html`을 엽니다.
2. `src/main.tsx`가 React 앱을 시작합니다.
3. `src/App.tsx`가 현재 주소를 확인합니다.
4. 주소가 `#/`이면 `Home.tsx`를 보여줍니다.
5. 주소가 `#/projects/fallai`이면 `FallAIPage.tsx`를 보여줍니다.
6. 주소가 `#/projects/phantom3d`이면 `Phantom3DPage.tsx`를 보여줍니다.
7. 주소가 `#/projects/infinitystock`이면 `InfinityStockPage.tsx`를 보여줍니다.
8. 각 페이지는 `portfolio.ts`에 있는 원고를 가져와 화면 조각에 나눠 줍니다.
9. `styles.css`가 전체 화면을 보기 좋게 꾸밉니다.

## 7. 주소를 관리하는 코드

| 파일 | 역할 | 쉬운 설명 |
| --- | --- | --- |
| `src/routes.ts` | 주소 이름표 관리 | 홈, FallAI, phantom3D, InfinityStock 주소를 한곳에서 정합니다. |
| `src/App.tsx` | 주소에 맞는 페이지 선택 | 현재 주소를 보고 어떤 페이지를 보여줄지 고릅니다. |

이 사이트는 GitHub Pages에서 새로고침이 깨지지 않도록 `#/projects/fallai` 같은 hash 주소를 사용합니다. `#` 뒤쪽 주소는 브라우저 안에서만 바뀌기 때문에 GitHub Pages와 잘 맞습니다.

## 8. 포트폴리오 원고 파일

### `src/data/portfolio.ts`

이 파일은 사이트의 “대본”입니다. 화면 문장을 여러 파일에 흩뿌리지 않고 한곳에 모아 관리합니다.

| 데이터 묶음 | 담긴 내용 |
| --- | --- |
| `person` | 이름, 지원 분야, 학력, 성적, 연락처, GitHub 주소입니다. |
| `about` | 자기소개와 강점입니다. |
| `proofMetrics` | 전공, 어학, 대표 프로젝트, 성능 지표처럼 한눈에 보일 핵심 수치입니다. |
| `roleFit` | 지원 직무와 연결되는 근거입니다. |
| `featuredProjects` | 홈 화면에 보이는 대표 프로젝트 카드 목록입니다. |
| `mainProject` | FallAI 상세 페이지에 들어가는 자세한 설명입니다. |
| `phantom3DProject` | phantom3D 상세 페이지 원고입니다. |
| `infinityStockProject` | InfinityStock 상세 페이지 원고입니다. |
| `skills` | 기술 스택과 도구 목록입니다. |
| `experience` | 인턴, 전공, 프로젝트 경험입니다. |
| `contact` | 이메일, 전화, GitHub, 문서 링크입니다. |

교수님이 “내용이 어디서 바뀌는가?”를 보려면 이 파일을 먼저 보면 됩니다. 예를 들어 프로젝트 설명 문장을 바꾸고 싶으면 대부분 `portfolio.ts`에서 수정합니다.

## 9. 홈 화면을 만드는 코드

### `src/pages/Home.tsx`

홈 화면을 순서대로 조립하는 파일입니다. 실제로는 아래 흐름으로 쌓입니다.

1. `Hero` - 첫 화면 소개
2. `ProfileSnapshot` - 핵심 수치와 직무 적합성
3. `About` - 자기소개
4. `FeaturedProjects` - 프로젝트 카드
5. `Skills` - 기술 스택
6. `Experience` - 경험
7. `Contact` - 연락처
8. `PortfolioPdf` - PDF 출력용 숨은 문서

비유하면 홈 화면의 목차와 배치표입니다.

## 10. 상세 페이지를 만드는 코드

| 파일 | 쉬운 설명 |
| --- | --- |
| `src/pages/FallAIPage.tsx` | FallAI 프로젝트 상세 전시실입니다. |
| `src/pages/Phantom3DPage.tsx` | phantom3D 프로젝트 상세 전시실입니다. |
| `src/pages/InfinityStockPage.tsx` | InfinityStock 프로젝트 상세 전시실입니다. |

각 상세 페이지는 공통적으로 `MainProject`, `ProjectDetail`, 프로젝트 미리보기 컴포넌트를 불러와 구성합니다. 이렇게 만든 이유는 프로젝트가 늘어나도 같은 형식으로 보기 좋게 추가하기 위해서입니다.

## 11. 화면 조각 파일 전체 설명

| 파일 | 화면에서 보이는 부분 | 설명 |
| --- | --- | --- |
| `Hero.tsx` | 맨 위 첫 화면 | 이름, 지원 분야, 대표 버튼, 이력서 PDF 버튼, 연락 버튼을 보여줍니다. |
| `ProfileSnapshot.tsx` | 핵심 요약 | 전공, TOEIC, 대표 프로젝트, 성능 지표와 직무 적합성을 카드로 보여줍니다. |
| `About.tsx` | 자기소개 | 자기소개 문장과 강점을 보여줍니다. |
| `FeaturedProjects.tsx` | 홈의 프로젝트 목록 | FallAI, InfinityStock, phantom3D를 카드 형태로 보여주고 상세 페이지로 이동시킵니다. |
| `MainProject.tsx` | 프로젝트 상세 상단 | 프로젝트 제목, 역할, 주요 수치, 링크, 화면 미리보기를 보여줍니다. |
| `ProjectDetail.tsx` | 프로젝트 상세 본문 | 문제 정의, 접근 방식, 파이프라인, 개선 경험, 직무 연결성을 나눠 보여줍니다. |
| `FallAIScreenPreview.tsx` | FallAI 화면 미리보기 | 실제 FallAI 서비스가 어떤 느낌인지 그래픽으로 요약합니다. |
| `InfinityStockScreenPreview.tsx` | InfinityStock 화면 미리보기 | 자동매매 운영 플랫폼 화면 느낌을 요약합니다. |
| `Phantom3DScreenPreview.tsx` | phantom3D 화면 미리보기 | 3D 측정 웹앱의 작업 화면을 요약합니다. |
| `Skills.tsx` | 기술 스택 | Python, AI, Web, 문서화 등 역량을 묶어 보여줍니다. |
| `Experience.tsx` | 경험 목록 | 인턴, 전공, 프로젝트 경험을 시간순으로 보여줍니다. |
| `Contact.tsx` | 연락처 | 이메일, 전화, GitHub, 문서 링크를 보여줍니다. |
| `PdfExportButton.tsx` | PDF 저장 버튼 | 버튼을 누르면 브라우저 인쇄 기능을 열어 PDF 저장을 돕습니다. |
| `PortfolioPdf.tsx` | PDF 전용 문서 | 화면용 페이지와 별개로, PDF로 저장했을 때 읽기 좋은 순서로 내용을 다시 배치합니다. |

## 12. PDF 저장 기능 흐름

PDF 기능은 별도의 서버가 PDF 파일을 만들어 주는 방식이 아닙니다. 브라우저의 인쇄 기능을 활용합니다.

1. 사용자가 `PDF 저장` 버튼을 누릅니다.
2. `PdfExportButton.tsx`가 `exportPortfolioPdf()` 함수를 실행합니다.
3. `src/utils/pdfExport.ts`가 문서 제목을 PDF용으로 잠시 바꿉니다.
4. 브라우저의 `window.print()`가 실행됩니다.
5. 사용자는 인쇄 창에서 “PDF로 저장”을 선택합니다.
6. `PortfolioPdf.tsx`에 준비된 PDF 전용 문서가 출력 대상으로 사용됩니다.

이 방식의 장점은 서버 비용이 없고, GitHub Pages 같은 정적 사이트에서도 동작한다는 점입니다.

## 13. 디자인 코드 설명

### `src/styles.css`

이 파일은 사이트의 시각적 분위기를 결정합니다.

| 디자인 항목 | 설명 |
| --- | --- |
| 전체 배경 | 너무 화려하지 않고 포트폴리오처럼 차분하게 보이도록 설정했습니다. |
| 글자 크기 | 첫 화면 제목은 크게, 카드 안 설명은 읽기 좋게 작게 조정했습니다. |
| 카드 디자인 | 프로젝트와 수치를 빠르게 비교할 수 있게 여백과 테두리를 정했습니다. |
| 반응형 | 노트북, 태블릿, 휴대폰 화면에서도 내용이 겹치지 않도록 배치를 바꿉니다. |
| PDF 스타일 | 화면용 디자인과 PDF 출력용 디자인을 따로 맞춥니다. |

교수님이 디자인 변경 과정을 보려면 `styles.css`를 보면 됩니다. 예를 들어 카드 간격, 글자 색, 버튼 모양이 모두 이 파일에 있습니다.

## 14. 그림과 공개 파일

| 위치 | 설명 |
| --- | --- |
| `src/assets/fallai-pipeline.svg` | FallAI 프로젝트 구조를 보여주는 그림입니다. |
| `src/assets/phantom3d-pipeline.svg` | phantom3D 구조를 보여주는 그림입니다. |
| `src/assets/infinitystock-pipeline.svg` | InfinityStock 구조를 보여주는 그림입니다. |
| `public/byun-giguk-resume.pdf` | 사이트에서 바로 열 수 있는 이력서 PDF입니다. |
| `public/byun-giguk-resume.html` | 이력서를 HTML 형식으로도 볼 수 있게 둔 파일입니다. |
| `public/favicon.svg` | 브라우저 탭에 보이는 작은 아이콘입니다. |

`public` 폴더에 있는 파일은 빌드 과정에서 거의 그대로 배포됩니다. 그래서 PDF나 favicon처럼 주소로 직접 열어야 하는 파일을 넣습니다.

## 15. 설정 파일 설명

| 파일 | 설명 |
| --- | --- |
| `package.json` | `npm run dev`, `npm run build`, `npm run preview`, `npm run deploy` 같은 명령어가 적혀 있습니다. |
| `package-lock.json` | 설치된 도구의 정확한 버전을 기록합니다. 다른 컴퓨터에서도 같은 환경을 재현하기 위해 필요합니다. |
| `vite.config.ts` | Vite 빌드 설정입니다. GitHub Pages 경로 설정에 중요합니다. |
| `tsconfig.json` | TypeScript 문법 검사 기준입니다. |
| `tsconfig.node.json` | Vite 설정 파일처럼 Node 환경에서 쓰는 TypeScript 기준입니다. |
| `.gitignore` | GitHub에 올리지 않을 파일을 정합니다. 예를 들어 `node_modules`나 빌드 부산물은 보통 제외합니다. |

## 16. GitHub Pages 배포 흐름

1. 개발자는 로컬에서 코드를 수정합니다.
2. `npm run build`로 사이트가 정상적으로 만들어지는지 확인합니다.
3. 변경 내용을 Git commit으로 기록합니다.
4. GitHub 저장소의 `main` 브랜치로 push합니다.
5. GitHub Actions가 자동으로 빌드와 배포를 실행합니다.
6. 성공하면 `https://hongsheeya.github.io/job-portfolio/#/` 주소에 반영됩니다.

즉, GitHub는 단순 보관함이 아니라 “코드 보관 + 변경 이력 + 자동 배포”를 함께 담당합니다.

## 17. 이 사이트에서 직접 작성한 코드와 아닌 코드

교수님께 모든 코드를 보여드릴 때는 구분이 필요합니다.

| 구분 | 예시 | 설명 |
| --- | --- | --- |
| 직접 작성/수정한 코드 | `src/`, `docs/`, `README.md`, 설정 파일 | 검토 대상입니다. |
| 자동 생성 결과물 | `dist/` | 빌드 결과입니다. 원본 설명은 `src/`를 보면 됩니다. |
| 외부 라이브러리 | `node_modules/` | React, Vite 등 남이 만든 도구입니다. 보통 전체 제출 대상이 아닙니다. |
| 공개 파일 | `public/` | 이력서 PDF, favicon처럼 사이트에서 직접 열리는 파일입니다. |

“모든 코드”를 보낸다는 것은 일반적으로 직접 작성한 원본 코드와 설명 문서를 보여드린다는 뜻입니다. 외부 라이브러리 전체까지 보내면 양이 너무 많고, 학생이 작성한 부분을 오히려 찾기 어렵습니다.

## 18. 교수님이 빠르게 확인할 순서

1. `README.md` - 이 저장소가 무엇인지 확인합니다.
2. `docs/code-overview-for-professor.md` - 지금 문서로 전체 구조를 이해합니다.
3. `src/data/portfolio.ts` - 포트폴리오 내용 원고를 확인합니다.
4. `src/pages/Home.tsx` - 홈 화면이 어떤 순서로 조립되는지 봅니다.
5. `src/components/` - 각 화면 조각이 어떻게 나뉘었는지 봅니다.
6. `src/styles.css` - 디자인과 반응형 처리를 확인합니다.
7. `docs/server-restore-guide.md` - 다른 서버에서 복구하는 방법을 확인합니다.

## 19. 교수님께 공유할 때 추천 방식

가장 합리적인 방식은 GitHub 저장소 링크와 배포된 사이트 링크를 함께 드리는 것입니다.

| 공유 자료 | 링크 |
| --- | --- |
| 배포된 포트폴리오 | `https://hongsheeya.github.io/job-portfolio/#/` |
| GitHub 저장소 | `https://github.com/hongsheeya/job-portfolio` |
| 코드 설명 문서 | `docs/code-overview-for-professor.md` |
| 서버 복구 가이드 | `docs/server-restore-guide.md` |

이렇게 공유하면 교수님은 실제 결과물과 그 결과물을 만든 코드를 함께 볼 수 있습니다.

## 20. 이 코드에서 강조할 점

- 포트폴리오 내용을 `portfolio.ts`에 모아 두어 수정이 쉽습니다.
- 화면을 작은 컴포넌트로 나누어 역할을 찾기 쉽습니다.
- GitHub Pages 기반이라 별도 서버 비용 없이 배포됩니다.
- PDF 저장 기능을 넣어 웹사이트와 제출용 문서를 함께 관리합니다.
- 교수님/검토자용 설명서와 복구 가이드를 함께 제공해 재현 가능성을 높였습니다.
- 프로젝트 상세 페이지를 분리해 단순 이력서가 아니라 실제 구현 경험을 보여줍니다.

## 21. 개인정보와 보안 주의

포트폴리오 저장소는 공개될 수 있으므로 다음은 넣지 않는 것이 좋습니다.

| 올려도 되는 것 | 올리면 안 되는 것 |
| --- | --- |
| 포트폴리오 소개 문장 | 비밀번호 |
| 공개 가능한 프로젝트 설명 | GitHub 토큰 |
| 공개용 이력서 PDF | 주민등록번호 등 민감 개인정보 |
| 공개 가능한 이미지 | 비공개 계약 자료 |
| 코드 설명 문서 | 회사 내부 자료나 고객 데이터 |

이 저장소는 공개 포트폴리오 목적이므로, 민감한 데이터는 포함하지 않는 방향이 맞습니다.
