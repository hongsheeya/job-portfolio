# Job Portfolio

AI/Data/IT 서비스기획 직무 지원용 GitHub Pages 포트폴리오입니다. 전체 포트폴리오 홈에서 핵심 프로젝트를 요약하고, **AI 기반 행동분류 및 낙상 판단 보조 시스템**과 **phantom3D 피부 팬텀 3D 측정 웹앱**은 별도 상세 라우트에서 깊게 설명합니다.

## 교수님/검토자용 빠른 링크

- 배포 페이지: <https://hongsheeya.github.io/job-portfolio/#/>
- FallAI 상세: <https://hongsheeya.github.io/job-portfolio/#/projects/fallai>
- 코드 설명: [docs/code-overview-for-professor.md](docs/code-overview-for-professor.md)
- 서버 복구 가이드: [docs/server-restore-guide.md](docs/server-restore-guide.md)

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
- `#/projects/phantom3d` — phantom3D 피부 팬텀 3D 측정 웹앱 상세

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
docs/
 ├─ code-overview-for-professor.md
 └─ server-restore-guide.md
public/
 ├─ byun-giguk-resume.html
 └─ byun-giguk-resume.pdf
src/
 ├─ data/
 │   └─ portfolio.ts
 ├─ components/
 │   ├─ Hero.tsx
 │   ├─ ProfileSnapshot.tsx
 │   ├─ MainProject.tsx
 │   ├─ FeaturedProjects.tsx
 │   ├─ FallAIScreenPreview.tsx
 │   ├─ Phantom3DScreenPreview.tsx
 │   ├─ ProjectDetail.tsx
 │   ├─ Skills.tsx
 │   ├─ Experience.tsx
 │   └─ Contact.tsx
 ├─ pages/
 │   ├─ Home.tsx
 │   ├─ FallAIPage.tsx
 │   └─ Phantom3DPage.tsx
 ├─ routes.ts
 └─ assets/
```

## 콘텐츠 수정

포트폴리오의 이름, 연락처, 기술 스택, 경험, 프로젝트 요약과 상세 데이터는 `src/data/portfolio.ts`에서 관리합니다.

- 첫 화면 요약/핵심 수치: `proofMetrics`, `roleFit`
- 전체 포트폴리오 홈: `featuredProjects`의 요약 카드 사용
- FallAI 상세 페이지: `mainProject`의 문제 정의, 구현 근거, 파이프라인, 개선 경험 사용
- phantom3D 상세 페이지: `phantom3DProject`의 3D 뷰어, 사진 기반 분석, LiDAR/스캔 측정 구조 사용
- FallAI 구동 화면형 UI: `src/components/FallAIScreenPreview.tsx`
- phantom3D 작업 화면형 UI: `src/components/Phantom3DScreenPreview.tsx`
- PDF 출력용 문서: `src/components/PortfolioPdf.tsx`

## 현재 메인 프로젝트

**AI 기반 행동분류 및 낙상 판단 보조 시스템**

- 스켈레톤 기반 화면 표시로 개인정보 노출 최소화
- MediaPipe 기반 keypoint 추출 구조 개선
- 하체 가림 상황을 고려한 synthetic occlusion 데이터 생성
- 행동분류 모델 학습 및 테스트 구조 설계
- 실시간 화면에서 원본/스켈레톤 전환 기능 구현
- 낙상 판단 모델의 보조 판단 근거로 확장 가능성 검토

## 추가 상세 프로젝트

**phantom3D 피부 팬텀 3D 측정 웹앱**

- Three.js 기반 3D 모델 뷰어와 표면 포인트 측정 UI 구현
- 사진 업로드/카메라 촬영 후 상처 후보 분석과 높이맵 추정 모델 생성
- GLB, GLTF, OBJ, STL, PLY 스캔 모델 업로드 지원
- 기준자/캘리브레이션 마커 기반 스케일 보정과 신뢰도 라벨 표시
- 상처 깊이, 면적, 둘레, 추정 부피, PDF/CSV/JSON 리포트 내보내기 구현
