import pipelineVisual from '../assets/fallai-pipeline.svg';
import infinityStockVisual from '../assets/infinitystock-pipeline.svg';
import phantom3DVisual from '../assets/phantom3d-pipeline.svg';

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type ProofMetric = {
  label: string;
  value: string;
  detail: string;
};

export type RoleFit = {
  title: string;
  summary: string;
  evidence: string[];
};

export type MainProject = {
  title: string;
  subtitle: string;
  period: string;
  role: string;
  summary: string;
  visual: string;
  visualAlt: string;
  preview: 'fallai' | 'phantom3d' | 'infinitystock';
  links: ProjectLink[];
  stack: string[];
  highlights: string[];
  metrics: Metric[];
  problem: string[];
  approach: string[];
  pipeline: string[];
  improvements: string[];
  evidence: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
  description: string;
};

export type ProjectSummary = {
  title: string;
  route: string;
  category: string;
  summary: string;
  role: string;
  impact: string;
  stack: string[];
  points: string[];
  detailLabel: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  title: string;
  period: string;
  description: string;
  points: string[];
};

export const portfolio = {
  person: {
    name: '변기국',
    title: 'AI/Data · DT/AX · 제조/반도체 데이터 활용 지원자',
    headline:
      '반도체 공정·장비 이해와 AI/Data 프로젝트 경험을 연결해 산업 현장의 문제를 데이터와 서비스로 풀어가는 지원자입니다.',
    location: 'South Korea',
    education: '고려대학교 세종캠퍼스 지능형반도체공학과',
    graduation: '2026.08 졸업예정',
    minor: '첨단반도체공정장비융합전공',
    gpa: '3.97 / 4.50',
    toeic: 'TOEIC 935',
    email: 'gigukbyun@korea.ac.kr',
    phone: '010-5657-5945',
    github: 'https://github.com/hongsheeya',
    desiredRoles: ['AI/Data', 'DT/AX', '제조·반도체 데이터 활용', '공정/장비 데이터 분석', 'AI 서비스 개발'],
  },
  about: {
    intro:
      '지능형반도체공학 전공과 인턴십을 통해 공정·장비·데이터의 흐름을 익혔고, AI 행동분류 프로젝트에서는 데이터 정리, 모델 검토, 서비스 화면 개선, 결과 문서화까지 함께 다뤘습니다.',
    strengths: [
      '반도체 공정·패키징·플라즈마 세정 경험을 바탕으로 현장 데이터를 해석하려는 관점이 있습니다.',
      'RandomForest, XGBoost, YOLO, MediaPipe 기반 프로젝트에서 데이터 구조와 모델 입력 feature를 정리했습니다.',
      'AI 개발을 모델 학습에만 두지 않고 서비스 지연, 화면 UX, 결과 기록, 문서화까지 연결해 봅니다.',
    ],
  },
  proofMetrics: [
    {
      label: '전공/성적',
      value: '3.97 / 4.50',
      detail: '지능형반도체공학 · 첨단반도체공정장비융합전공',
    },
    {
      label: '어학',
      value: 'TOEIC 935',
      detail: '기술 자료 이해와 협업 문서화에 필요한 기본 역량',
    },
    {
      label: '대표 프로젝트',
      value: 'FallAI',
      detail: '데이터, 모델, 대시보드, 운영 리포트까지 연결한 AI 서비스형 프로젝트',
    },
    {
      label: '최근 검증',
      value: 'p95 0.839s',
      detail: '4카메라 synthetic simulation 320px, 4초 청크 기준',
    },
  ] satisfies ProofMetric[],
  roleFit: [
    {
      title: '산업 도메인 이해',
      summary: '반도체 공정·장비 흐름을 이해하고 데이터 문제로 번역합니다.',
      evidence: ['지능형반도체공학 전공', '플라즈마 세정/자동화 장비 인턴 경험', 'TGV 패키징 기술 조사'],
    },
    {
      title: 'AI/Data 구현',
      summary: '모델을 단순 실행이 아니라 입력 feature, 평가 기준, 운영 조건까지 함께 봅니다.',
      evidence: ['RandomForest/XGBoost 기반 분류', 'YOLO/MediaPipe pose 처리', '성능 병목 리포트 작성'],
    },
    {
      title: '서비스 UX 연결',
      summary: '분석 결과를 사용자가 이해할 수 있는 화면과 문서로 바꾸는 데 강점이 있습니다.',
      evidence: ['학습/모델 관리 UI 개선', '스켈레톤 기반 개인정보 노출 완화', 'PDF 포트폴리오 배포 기능'],
    },
    {
      title: '운영 검증/문서화',
      summary: '성능을 감으로 말하지 않고 RTT, recall, 버전, ETA 같은 지표로 남깁니다.',
      evidence: ['4카메라 시뮬레이션 보고서', '백그라운드 학습 상태 표시', '프로젝트 사용 설명서 정리'],
    },
  ] satisfies RoleFit[],
  featuredProjects: [
    {
      title: 'AI 기반 행동분류 및 낙상 판단 보조 시스템',
      route: '/projects/fallai',
      category: 'Main AI Project',
      summary:
        '실시간 자세와 움직임을 분석해 행동 상태를 분류하고, 낙상 판단의 보조 근거를 제공하는 프로젝트입니다.',
      role: 'AI/Data Pipeline · Service UX · System Improvement',
      impact: '모델 성능, 가림 상황, 실시간 RTT, 학습 UX를 함께 다룬 AI 서비스형 프로젝트',
      stack: ['MediaPipe', 'Pose Feature', 'XGBoost', 'RandomForest', 'React'],
      points: [
        '스켈레톤 중심 표시로 개인정보 노출 부담을 낮추고 분석 근거는 유지',
        '하체 가림과 다중 카메라 조건을 synthetic simulation으로 검증',
        '학습 진행, 모델 버전, ETA, 성능 병목을 사용자 화면에 노출',
      ],
      detailLabel: 'FallAI 상세 보기',
    },
    {
      title: 'InfinityStock 자동매매 운영 플랫폼',
      route: '/projects/infinitystock',
      category: 'FinTech Automation Platform',
      summary:
        '증권사 API, FireGate 포트폴리오, 무한매수 사이클, 거래이력과 PDF 가이드북을 하나의 운영 흐름으로 연결한 주식 자동화 웹서비스입니다.',
      role: 'Full-stack · Broker API Integration · Automation Reliability',
      impact: '증권사 API와 자동매매 운영 흐름을 사용자별 설정, 거래 이력, 가이드 문서까지 연결한 운영형 서비스',
      stack: ['WIZ', 'Python', 'Angular', 'KIS Open API', 'Toss API', 'FireGate Sync'],
      points: [
        'KIS/토스 증권사 선택형 API 설정과 사용자별 민감 설정 분리',
        '무한매수 SOXL/TQQQ 사이클, LOC 예약, FireGate 자동 동기화 구조 구현',
        '대시보드 자산/평가액 재계산, 거래이력 성능 개선, PDF 가이드북 제공',
      ],
      detailLabel: 'InfinityStock 상세 보기',
    },
    {
      title: 'phantom3D 피부 팬텀 3D 측정 웹앱',
      route: '/projects/phantom3d',
      category: '3D Research Web App',
      summary:
        '피부 팬텀 사진과 3D 스캔 모델을 함께 다루며 거리, 상처 깊이, 면적, 둘레, 추정 부피를 측정하는 Three.js 기반 연구용 웹앱입니다.',
      role: 'Frontend · Three.js Viewer · Measurement UX',
      impact: '사진 기반 추정과 실제 3D 스캔 측정을 구분해 연구자가 신뢰도까지 판단할 수 있게 만든 측정 도구',
      stack: ['Three.js', 'WebGL', 'Canvas API', 'PWA', 'WIZ'],
      points: [
        '사진 기반 상처 후보 분석으로 추정 높이맵 3D 모델 생성',
        'GLB, GLTF, OBJ, STL, PLY 스캔 모델 업로드와 표면 포인트 측정 지원',
        '캘리브레이션, 신뢰도 라벨, PDF/CSV/JSON 리포트 내보내기 구현',
      ],
      detailLabel: 'phantom3D 상세 보기',
    },
  ] satisfies ProjectSummary[],
  mainProject: {
    title: 'AI 기반 행동분류 및 낙상 판단 보조 시스템',
    subtitle: '실시간 자세 분석과 행동 상태 분류를 통한 낙상 판단 보조 프로젝트',
    period: '2026',
    role: 'AI/Data Pipeline · Frontend UX · System Improvement',
    summary:
      '실시간 영상에서 사람의 자세와 움직임을 분석하여 행동 상태를 분류하고, 낙상 판단의 보조 근거를 제공하는 AI 프로젝트입니다. 데이터 입력, pose feature, 모델 평가, 학습 상태 표시, 사용자 화면, 운영 리포트까지 연결해 실제 서비스로 이해 가능한 형태를 만드는 데 집중했습니다.',
    visual: pipelineVisual,
    visualAlt: 'AI 행동분류 및 낙상 판단 보조 시스템 파이프라인',
    preview: 'fallai',
    links: [
      {
        label: '포트폴리오 저장소',
        href: 'https://github.com/hongsheeya/job-portfolio',
        description: 'React/Vite 기반 GitHub Pages 포트폴리오 코드',
      },
      {
        label: '교수님용 코드 설명',
        href: 'https://github.com/hongsheeya/job-portfolio/blob/main/docs/code-overview-for-professor.md',
        description: '웹사이트 구조와 코드 역할을 비전공자도 이해하기 쉽게 정리',
      },
      {
        label: '서버 복구 가이드',
        href: 'https://github.com/hongsheeya/job-portfolio/blob/main/docs/server-restore-guide.md',
        description: '다른 서버에서 같은 포트폴리오 페이지를 복구하는 절차',
      },
    ],
    stack: [
      'Python',
      'MediaPipe',
      'YOLO',
      'Pose Keypoints',
      'XGBoost',
      'RandomForest',
      'TypeScript',
      'Dashboard UI',
    ],
    highlights: [
      '스켈레톤 기반 화면 표시로 개인정보 노출 최소화',
      'MediaPipe 기반 keypoint 추출 구조 개선',
      '하체 가림 상황을 고려한 synthetic occlusion 데이터 생성',
      '행동분류 모델 학습 및 테스트 구조 설계',
      '실시간 화면에서 원본/스켈레톤 전환 기능 구현',
      '낙상 판단 모델의 보조 판단 근거로 확장 가능성 검토',
    ],
    metrics: [
      {
        label: 'RF-Fall',
        value: 'F1 98.1%',
        detail: '낙상 판단 운영 모델 기준 성능 지표를 대시보드에 연결',
      },
      {
        label: 'XG-Posture',
        value: 'F1 94.3%',
        detail: '자세 분류 결과를 낙상 판단 설명 근거로 활용',
      },
      {
        label: '4-Camera Sim',
        value: 'p95 0.839s',
        detail: '4대 코너 카메라 synthetic simulation 320px 기준 RTT',
      },
    ],
    problem: [
      '낙상 행동은 짧은 순간에 발생하므로 영상 분할 경계에서 근거가 누락될 수 있습니다.',
      '실제 서비스 환경에서는 하체가 가려지거나 화면 일부만 보이는 상황이 자주 발생합니다.',
      '원본 영상 노출은 개인정보 부담이 커서 분석 결과를 보여주는 방식에도 설계가 필요합니다.',
    ],
    approach: [
      'MediaPipe 기반 keypoint 추출 흐름을 정리하고 행동분류 모델 입력 구조를 개선했습니다.',
      '스켈레톤 중심 표시와 원본/스켈레톤 전환 UI를 적용해 검증 편의성과 개인정보 보호를 함께 고려했습니다.',
      '하체가 가려진 장면을 가정한 synthetic occlusion 데이터를 생성해 모델 검토 범위를 넓혔습니다.',
      '영상 분할은 4초 창과 2초 stride를 적용해 경계 부근의 낙상 근거가 다음 구간에도 포함되도록 설계했습니다.',
    ],
    pipeline: [
      '영상 입력 및 사람 영역 확인',
      'MediaPipe keypoint 추출',
      'pose feature 생성 및 행동분류 모델 입력',
      '행동 상태 예측과 낙상 판단 보조 근거 생성',
      '대시보드에서 원본/스켈레톤, 학습, 분석 결과 확인',
    ],
    improvements: [
      '업로드 분석 타임라인을 중첩 분할 기준에 맞춰 정리',
      '학습 데이터 등록 흐름과 모델별 학습 자료 선택 UX 개선',
      '모델 학습 상태, 최근 갱신, ETA 표시를 대시보드에서 확인 가능하도록 개선',
      '일반 사용자가 모델 관리 화면을 이해할 수 있도록 상태/등록/감도/고급 관리 모드 분리',
      '현재 모델 구조에 맞춰 파이프라인 설명과 사용 설명서를 최신화',
    ],
    evidence: [
      '문제 정의: 영상 경계, 가림, 개인정보 노출 리스크를 모델 성능과 서비스 사용성 관점에서 정리',
      '데이터 처리: keypoint, pose feature, synthetic occlusion 데이터 흐름 검토',
      '시스템 개선: 실시간 분석, 업로드 분석, 학습 모드, 문서화 구조를 함께 정비',
    ],
  } satisfies MainProject,
  phantom3DProject: {
    title: 'phantom3D 피부 팬텀 3D 측정 웹앱',
    subtitle: '사진 기반 높이맵 추정과 LiDAR/스캔 모델 실측을 구분한 3D 연구용 측정 도구',
    period: '2026',
    role: 'Frontend Architecture · Three.js Viewer · 3D Measurement UX',
    summary:
      '피부 팬텀의 사진과 3D 스캔 모델을 함께 다루는 연구용 웹앱입니다. 일반 사진은 색상, 경계, 음영 기반 상처 후보 분석을 통해 높이맵 3D 모델로 추정하고, LiDAR 또는 포토그래메트리로 생성된 GLB/GLTF/OBJ/STL/PLY 파일은 실제 메시 geometry로 로드해 거리와 깊이를 측정하도록 구성했습니다. 로그인 없이 바로 측정 화면에 진입하도록 라우팅을 정리하고, 캘리브레이션, 신뢰도 표시, PDF/CSV/JSON 내보내기까지 작업 도구형 UX로 구현했습니다.',
    visual: phantom3DVisual,
    visualAlt: 'phantom3D 사진 분석과 3D 측정 처리 흐름',
    preview: 'phantom3d',
    links: [
      {
        label: '포트폴리오 저장소',
        href: 'https://github.com/hongsheeya/job-portfolio',
        description: 'React/Vite 기반 GitHub Pages 포트폴리오 코드',
      },
    ],
    stack: [
      'JavaScript',
      'Three.js',
      'WebGL',
      'Canvas API',
      'PWA',
      'WIZ',
      'GLTF/OBJ/STL/PLY Loader',
      'Responsive UI',
    ],
    highlights: [
      '로그인 화면을 제거하고 `/dashboard` 중심의 즉시 진입형 측정 도구로 라우팅 정리',
      '사진 업로드와 카메라 촬영 후 상처 후보를 분석해 사진 기반 높이맵 3D 모델 생성',
      'LiDAR/포토그래메트리 스캔 모델 업로드를 위해 GLB, GLTF, OBJ, STL, PLY 포맷 지원',
      '두 점 거리, 상처 깊이, 면적, 둘레, 추정 부피를 mm 단위로 표시',
      '기준자/캘리브레이션 마커로 사진 기반 추정값의 스케일 보정 흐름 구현',
      '측정 신뢰도를 사진 추정, 스케일 보정, LiDAR/스캔 실측 상태로 구분해 표시',
      'PDF, CSV, JSON 리포트 내보내기와 동일 팬텀의 시간별 변화 비교 기능 구현',
      'manifest syntax error, favicon, 브라우저 탭 제목, 초기화 상태 잔존 문제 해결',
    ],
    metrics: [
      {
        label: '3D Input',
        value: '5 Formats',
        detail: 'GLB, GLTF, OBJ, STL, PLY 스캔 모델 업로드와 Three.js 로딩 지원',
      },
      {
        label: 'Measurement',
        value: 'Distance · Depth',
        detail: '두 점 거리, 상처 깊이, 면적, 둘레, 추정 부피를 한 화면에서 확인',
      },
      {
        label: 'Reliability',
        value: 'Confidence Label',
        detail: '사진 추정, 스케일 보정, LiDAR/스캔 실측 상태를 분리해 표시',
      },
    ],
    problem: [
      '기존 화면은 모든 라우트가 로그인 또는 접근 페이지로 이동해 실제 대시보드와 3D 측정 화면에 바로 진입하기 어려웠습니다.',
      '일반 사진과 LiDAR/스캔 모델의 신뢰도를 구분하지 않으면 사진 기반 추정값이 실제 3D 실측처럼 오해될 수 있었습니다.',
      '사진이나 3D 모드 전환 시 화면 높이가 늘어나 하단 측정값이 화면 밖으로 밀리는 사용성 문제가 있었습니다.',
      '초기화 후 업로드 이미지와 사진 기반 모델 상태가 남아 사용자가 기본 모델로 돌아갔는지 확인하기 어려웠습니다.',
    ],
    approach: [
      '로그인 페이지를 제거하고 `/access`, `/acess`, `/mypage` 접근을 `/dashboard`로 정리해 측정 화면 중심의 흐름으로 바꿨습니다.',
      '사진 업로드 이미지를 Canvas에 정규화하고 밝기, 채도, 적색 성분, 어두운 영역, 경계 강도로 상처 후보 점수 맵을 계산했습니다.',
      'connected component 방식으로 상처 후보를 추출하고, 배경이나 이미지 가장자리 오검출을 줄이기 위한 필터를 적용했습니다.',
      '후보 마스크와 boundary map을 이용해 표면 함몰과 가장자리 융기를 반영한 Three.js 높이맵 메시를 생성했습니다.',
      'LiDAR/스캔 파일은 실제 메시 geometry로 로드하고, 사진 기반 모델은 추정 모델임을 라벨과 신뢰도 문구로 분리했습니다.',
    ],
    pipeline: [
      '사진 촬영 또는 업로드 후 브라우저 지원 이미지 형식 검증',
      'Canvas 기반 픽셀 분석으로 상처 후보 점수, 마스크, 경계 맵 생성',
      '사진 기반 높이맵 geometry 생성 또는 LiDAR/스캔 메시 파일 로드',
      '3D 뷰어에서 Point A/B, 표면점, 바닥점 선택',
      '거리, 깊이, 면적, 둘레, 추정 부피 계산 및 신뢰도 표시',
      'JSON, CSV, PDF 리포트 내보내기와 이전 측정값 비교',
    ],
    improvements: [
      'manifest JSON 응답, favicon, 브라우저 탭 제목을 phantom3D 브랜딩으로 정리',
      '초기화 버튼이 사진 src, Blob URL, file input, 캘리브레이션, 측정점, Three.js 모델을 함께 비우도록 개선',
      '사진 기반 모델이 단순 texture overlay처럼 보이지 않도록 상처 후보 기반 높이맵 geometry를 생성하도록 변경',
      '모바일과 데스크톱에서 하단 결과바가 화면 안에 유지되도록 앱 셸 높이와 패널 구조 조정',
      'Playwright로 사진 업로드, 초기화, 라우팅, manifest, 반응형 화면을 검증',
    ],
    evidence: [
      '도메인 이해: 일반 사진, 스케일 보정 사진, LiDAR/스캔 모델의 측정 신뢰도를 명확히 구분',
      '프론트엔드 구현: Three.js 뷰어, Canvas 분석, 파일 업로드, 카메라 촬영, 리포트 내보내기를 단일 작업 흐름으로 연결',
      '사용성 개선: 로그인 제거, 초기화 상태 정리, 하단 수치 고정, 파일 형식 안내로 반복 측정 도구 UX 강화',
    ],
  } satisfies MainProject,
  infinityStockProject: {
    title: 'InfinityStock 자동매매 운영 플랫폼',
    subtitle: '증권사 API, FireGate, 무한매수 사이클을 연결한 실계좌 운영 보조 웹서비스',
    period: '2026',
    role: 'Full-stack Architecture · Broker API Integration · Automation Reliability',
    summary:
      'InfinityStock은 한국투자증권과 토스증권 API 설정, FireGate 포트폴리오 동기화, SOXL/TQQQ 무한매수 사이클, LOC 예약매매, 거래이력 정리, 사용자 가이드북까지 한 흐름으로 묶은 주식 자동화 운영 플랫폼입니다. 실전 운영 중 발생한 주문가능금액 불일치, 평가액 이중계산, 사이클 미동기화, 예약 주문 누락, PDF 가이드 공백 같은 문제를 계좌 API와 화면 UX 양쪽에서 추적하고 복구하는 데 집중했습니다.',
    visual: infinityStockVisual,
    visualAlt: 'InfinityStock 자동매매 운영 플랫폼 처리 흐름',
    preview: 'infinitystock',
    links: [
      {
        label: '운영 프로젝트 저장소',
        href: 'https://github.com/hongsheeya/stock8',
        description: 'WIZ 기반 주식 자동화 운영 플랫폼 코드',
      },
      {
        label: '포트폴리오 저장소',
        href: 'https://github.com/hongsheeya/job-portfolio',
        description: 'React/Vite 기반 GitHub Pages 포트폴리오 코드',
      },
    ],
    stack: [
      'Python',
      'WIZ',
      'Angular',
      'TypeScript',
      'Pug/SCSS',
      'KIS Open API',
      'Toss Open API',
      'FireGate',
      'ReportLab',
    ],
    highlights: [
      '한국투자증권 중심 구조에서 증권사 선택형 설정으로 확장하고 토스증권 API 입력 흐름 추가',
      'API Key, 계좌번호, FireGate 연결 정보를 사용자별 설정으로 분리해 신규 가입자 정보 오염 방지',
      'SOXL/TQQQ 무한매수와 단타 기능을 분리하고, 단타 기능은 관리자 승인 없이는 보이지 않도록 봉인',
      'FireGate 포트폴리오 기준으로 시드, 분할 수, 목표 수익률, 보유 수량, 평균가를 사이클에 동기화',
      '매일 오전 체결 확인, LOC 매수/매도 예약, 예약 재시도, 수동 매매 반영을 자동화 흐름에 포함',
      '대시보드 자산·매수가능액·포트폴리오 평가액 계산 기준을 브로커 API 필드 중심으로 재정리',
      '거래이력 대량 로딩을 최신 우선 + 더보기 방식으로 바꾸고 오래된 로그 조회 비용을 낮춤',
      '회원가입, 증권사 API 발급, ETF 거래교육, FireGate 연결까지 일반 사용자가 따라 할 수 있는 PDF 가이드북 제작',
    ],
    metrics: [
      {
        label: 'Broker API',
        value: 'KIS · Toss',
        detail: '증권사 선택형 API 설정과 연결 테스트 흐름으로 확장',
      },
      {
        label: 'Automation',
        value: 'LOC · Sync',
        detail: '무한매수 예약매매와 FireGate/체결 동기화를 운영 흐름에 통합',
      },
      {
        label: 'Reliability',
        value: 'Guarded UX',
        detail: '단타 기능 봉인, 캐시 복구, 거래이력 경량화로 운영 리스크 축소',
      },
    ],
    problem: [
      '실계좌 API는 국내/해외/통합증거금/환율/미결제금액 필드가 분리되어 있어 화면에서 임의 계산하면 자산과 평가액이 쉽게 어긋났습니다.',
      'FireGate에서 관리하는 무한매수 포트폴리오와 사이트 내부 사이클이 자동으로 맞지 않으면 보유 수량, 평균가, 회차가 달라져 예약매매 판단이 흔들렸습니다.',
      'SOXL/TQQQ는 무한매수 대상이면서 사용자가 직접 사고팔 수도 있어 자동매매 기록과 수동 거래 반영이 섞일 위험이 있었습니다.',
      '단타 기능과 무한매수 기능이 같은 대시보드에 존재하면 일반 사용자가 원하지 않는 자동매매를 실수로 켤 수 있었습니다.',
      '거래이력과 대시보드가 많은 API 호출과 오래된 로그를 한 번에 읽으면 첫 화면이 느려지고, 실패 시 0원 화면으로 떨어지는 문제가 있었습니다.',
    ],
    approach: [
      '증권사 설정을 provider 기반으로 바꾸고 한국투자증권과 토스증권만 활성화해 API 입력 UI를 단계적으로 확장했습니다.',
      'KIS 주문가능금액, 국내 잔고, 해외 잔고, 현재가, 환율 필드를 출처와 함께 분리해 대시보드 진단 정보로 노출했습니다.',
      'FireGate 포트폴리오를 InfinityStock 전용 분류로 구분하고, 사이트 사이클과 거래 기록을 자동으로 밀고 당기는 동기화 경로를 만들었습니다.',
      '무한매수 매매 OFF, 종목별 운영 ON/OFF, 예약 재시도, 오전 체결 반영, LOC 매수·매도 예약을 워커와 대시보드 양쪽에서 점검하도록 구성했습니다.',
      '단타 기능은 하드락 플래그와 관리자 설정, 사용자 경고 확인 절차를 분리해 일반 사용자 화면에서 보이지 않도록 정리했습니다.',
      '대시보드에는 마지막 정상 상태 캐시를 적용하고, 실패한 빈 payload가 정상 값을 덮어쓰지 못하도록 방어했습니다.',
    ],
    pipeline: [
      '회원가입 후 사용자별 증권사 provider와 API Key/Secret, 계좌 정보를 저장',
      '브로커 연결 테스트로 주문가능금액, 잔고, 현재가, 환율 조회 가능 여부 확인',
      'FireGate OAuth/포트폴리오 동기화로 SOXL/TQQQ 무한매수 기준값을 사이트 사이클에 반영',
      '대시보드에서 무한매수 ON/OFF와 종목별 운영 상태를 확인하고 LOC 예약 대기 상태 표시',
      '예약 시간대에 FireGate 기준값을 재동기화한 뒤 LOC 매수와 목표 수익률 도달 시 LOC 매도 예약',
      '다음 날 오전 8시부터 1시간 동안 10분 간격으로 체결 내역을 확인해 사이클 거래로 반영',
      '거래이력은 최신 기록을 먼저 보여주고, 오래된 로그는 더보기로 지연 조회',
    ],
    improvements: [
      '증권사 선택 드롭다운, 로고형 카드, 지원/비활성 상태 표시를 적용해 KIS와 토스만 실사용 대상으로 구분',
      '신규 가입자가 기존 관리자 API를 보게 되는 문제를 막기 위해 민감 설정을 사용자 스코프로 분리',
      '대시보드 로딩 지연과 빈 화면 문제를 줄이기 위해 overview 캐시, localStorage 복원, stale payload 방어를 적용',
      '거래이력에서 5000건 덤프와 브로커 동기화를 기본 진입에서 제거하고, 최신 우선 페이징과 더보기 흐름으로 전환',
      '사용자 가이드북 Markdown과 ReportLab PDF 생성을 추가하고 설정 화면에서 PDF 다운로드 가능하게 연결',
      '화이트 모드 대비, 버튼 줄바꿈, modal confirm 문구, 설정 중앙 정렬 등 운영 화면의 반복 사용성을 개선',
    ],
    evidence: [
      '운영 안정화: 예약매매 500 오류, LOC 매도 스킵 조건, FireGate 자동 동기화 누락, 대시보드 0원 fallback 원인을 코드 레벨에서 추적하고 수정',
      'API 연동: 한국투자증권과 토스증권의 인증·잔고·주문가능금액·LOC 주문 경로를 provider abstraction으로 확장',
      '제품화 관점: 일반 사용자가 API 발급, ETF 교육, FireGate 연결, 무한매수 ON/OFF를 따라 할 수 있도록 PDF 가이드와 설정 UI를 정비',
    ],
  } satisfies MainProject,
  skills: [
    {
      title: 'AI/Data',
      items: ['RandomForest', 'XGBoost', 'YOLO/MediaPipe', 'pandas', 'scikit-learn', 'Model Evaluation'],
    },
    {
      title: 'Programming',
      items: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'React/Vite', 'Three.js'],
    },
    {
      title: 'Development Environment',
      items: ['WIZ', 'VS Code Remote SSH', 'OpenAI Codex', 'GitHub Copilot', 'Cursor AI', 'Git/GitHub'],
    },
    {
      title: 'Domain',
      items: ['반도체 공정', '반도체 패키징', '플라즈마 세정', 'DBD 전극', '공정 자동화', '데이터 전처리'],
    },
  ] satisfies SkillGroup[],
  experience: [
    {
      title: '주식회사 시즌 AI연구센터 연구전략팀 인턴',
      period: '2026.03 ~ 현재',
      description:
        'WIZ 기반 풀스택 엔지니어링과 AI 연구개발 보조 업무를 수행하며 화면, 데이터 연동, 행동분류 모델 개발 자료를 함께 정리했습니다.',
      points: [
        'WIZ 기반 화면 구성, 기능 구현, 데이터 연동 구조 확인 및 수정',
        '행동분류 모델 개발 프로젝트 데이터 정리, 변수 확인, 결과 기록',
        '교통 AI 원천 데이터 전처리와 분석 가능한 변수 구조 정리',
      ],
    },
    {
      title: 'AI 행동분류 프로젝트 개선',
      period: '2026',
      description:
        '행동분류와 낙상 판단 보조 시스템의 데이터, 모델, 화면, 문서 구조를 연결해 개선했습니다.',
      points: [
        '실시간 영상 분석 화면에서 원본/스켈레톤 전환 구조 검토',
        '학습 데이터 등록과 모델별 자료 선택 흐름 정리',
        '분할 타임라인, 모델 상태, ETA, 파이프라인 문서 최신화',
      ],
    },
    {
      title: '지비티아이앤씨 연구개발팀 인턴',
      period: '2025.07 ~ 2025.08',
      description:
        '반도체 플라즈마 세정과 자동화 로봇 관련 업무를 경험하며 실험 준비, 결과 정리, 장비 이해를 쌓았습니다.',
      points: [
        'DBD 전극 제조 보조, 연구 실험 준비 및 결과 정리',
        'AGV, AMR, 협동로봇 등 자동화 장비 업무 흐름 이해',
        'Cursor AI를 활용한 반복 업무 효율화 프로그램 제작 경험',
      ],
    },
    {
      title: '반도체 패키징 기술 조사 및 리뷰 논문',
      period: '학부 프로젝트',
      description:
        '캡스톤디자인에서 TGV 기반 첨단 패키징 기술을 조사하며 공정과 신호 전달 특성을 함께 검토했습니다.',
      points: [
        'TGV 기술 개념과 TSV 대비 유리 기판 기반 패키징 장점 조사',
        '기생 커패시턴스 감소와 전기적 손실 완화 가능성 정리',
      ],
    },
    {
      title: '신설 학과 초대 학생회장',
      period: '학부 재학 중 3년',
      description:
        '학과 운영 체계와 학생 문화를 만들어가며 의견 수렴, 교수진 협의, 행사 기획을 주도했습니다.',
      points: [
        '학생회 조직, 학과 회칙 제정, 운영 체계 수립',
        '간담회, 교류 행사, 소모임, 학과 최초 학술제 개최',
      ],
    },
  ] satisfies ExperienceItem[],
  contact: {
    message:
      'AI/Data, DT/AX, 제조·반도체 데이터 활용, 공정/장비 데이터 분석 직무에 관심이 있습니다.',
    links: [
      { label: 'Email', href: 'mailto:gigukbyun@korea.ac.kr' },
      { label: 'Phone', href: 'tel:01056575945' },
      { label: 'GitHub', href: 'https://github.com/hongsheeya' },
      { label: 'Portfolio Repo', href: 'https://github.com/hongsheeya/job-portfolio' },
      { label: 'Code Overview', href: 'https://github.com/hongsheeya/job-portfolio/blob/main/docs/code-overview-for-professor.md' },
      { label: 'Restore Guide', href: 'https://github.com/hongsheeya/job-portfolio/blob/main/docs/server-restore-guide.md' },
    ],
  },
};
