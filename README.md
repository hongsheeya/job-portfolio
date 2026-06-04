# Job Portfolio

AI/Data/IT 서비스기획 직무 지원용 GitHub Pages 포트폴리오입니다. 전체 포트폴리오 홈에서 핵심 프로젝트를 요약하고, **AI 기반 행동분류 및 낙상 판단 보조 시스템**은 별도 상세 라우트에서 깊게 설명합니다.

## 실행 방법

```bash
npm install
npm run dev
```

로컬 개발 서버가 실행되면 터미널에 표시되는 주소로 접속합니다.

## 빌드

```bash
npm run build
npm run preview
```

## 주요 라우트

GitHub Pages 새로고침 안정성을 위해 내부 화면은 hash route를 사용합니다.

- `#/` — 전체 포트폴리오 홈
- `#/projects/fallai` — FallAI 낙상 판단 보조 프로젝트 상세

## GitHub Pages 배포

이 저장소는 GitHub Actions 기반 Pages 배포 파일을 포함합니다.

1. GitHub에서 새 저장소를 생성합니다.
2. 로컬 저장소를 GitHub 원격 저장소와 연결합니다.
3. `main` 브랜치로 push합니다.
4. GitHub 저장소의 **Settings > Pages**에서 Source를 **GitHub Actions**로 선택합니다.
5. Actions의 `Deploy GitHub Pages` 워크플로가 성공하면 Pages 주소가 생성됩니다.

수동 배포가 필요하면 아래 명령을 사용할 수 있습니다.

```bash
npm run deploy
```

## 프로젝트 구조

```text
src/
 ├─ data/
 │   └─ portfolio.ts
 ├─ components/
 │   ├─ Hero.tsx
 │   ├─ MainProject.tsx
 │   ├─ FeaturedProjects.tsx
 │   ├─ FallAIScreenPreview.tsx
 │   ├─ ProjectDetail.tsx
 │   ├─ Skills.tsx
 │   ├─ Experience.tsx
 │   └─ Contact.tsx
 ├─ pages/
 │   ├─ Home.tsx
 │   └─ FallAIPage.tsx
 ├─ routes.ts
 └─ assets/
```

## 콘텐츠 수정

포트폴리오의 이름, 연락처, 기술 스택, 경험, 프로젝트 요약과 상세 데이터는 `src/data/portfolio.ts`에서 관리합니다.

- 전체 포트폴리오 홈: `featuredProjects`의 요약 카드 사용
- FallAI 상세 페이지: `mainProject`의 문제 정의, 구현 근거, 파이프라인, 개선 경험 사용
- FallAI 구동 화면형 UI: `src/components/FallAIScreenPreview.tsx`

## 현재 메인 프로젝트

**AI 기반 행동분류 및 낙상 판단 보조 시스템**

- 스켈레톤 기반 화면 표시로 개인정보 노출 최소화
- MediaPipe 기반 keypoint 추출 구조 개선
- 하체 가림 상황을 고려한 synthetic occlusion 데이터 생성
- 행동분류 모델 학습 및 테스트 구조 설계
- 실시간 화면에서 원본/스켈레톤 전환 기능 구현
- 낙상 판단 모델의 보조 판단 근거로 확장 가능성 검토
