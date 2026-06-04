import pipelineVisual from '../assets/fallai-pipeline.svg';
import runtimeScreen from '../assets/fallai-runtime-screen.svg';

export type Metric = {
  label: string;
  value: string;
  detail: string;
};

export type MainProject = {
  title: string;
  subtitle: string;
  period: string;
  role: string;
  summary: string;
  visual: string;
  route: string;
  consoleDemoRoute: string;
  localConsoleUrl: string;
  links: ProjectLink[];
  screenshots: ProjectScreenshot[];
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

export type ProjectScreenshot = {
  title: string;
  image: string;
  alt: string;
  caption: string;
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

export type FutureProject = {
  title: string;
  description: string;
  status: string;
  route?: string;
  category?: string;
  points?: string[];
};

export type SubProject = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  status: string;
  route: string;
  role: string;
  stack: string[];
  points: string[];
  links: ProjectLink[];
};

export const portfolio = {
  person: {
    name: '변기국',
    title: 'AI/Data · IT 서비스기획 지원자',
    headline: '문제 정의부터 데이터 처리, 모델 검토, 서비스 화면 개선까지 연결하는 지원자입니다.',
    location: 'South Korea',
    email: 'gigukbyun@korea.ac.kr',
    phone: '010-5657-5945',
    github: 'https://github.com/hongsheeya',
  },
  about: {
    intro:
      'AI 기반 행동분류 프로젝트를 중심으로 데이터 구조, 모델 학습 흐름, 실시간 분석 화면, 사용자 판단 보조 UX를 함께 개선했습니다.',
    strengths: [
      '문제를 기능 단위가 아니라 데이터, 모델, 화면, 운영 흐름의 연결로 정의합니다.',
      '영상 데이터와 pose feature를 다루며 모델 입력 경로와 테스트 구조를 정리했습니다.',
      '서비스기획 관점에서 개인정보 보호, 판단 근거 표시, 사용자 검증 흐름을 함께 고려합니다.',
    ],
  },
  mainProject: {
    title: 'AI 기반 행동분류 및 낙상 판단 보조 시스템',
    subtitle: '실시간 자세 분석과 행동 상태 분류를 통한 낙상 판단 보조 프로젝트',
    period: '2026',
    role: 'AI/Data Pipeline · Frontend UX · System Improvement',
    summary:
      '실시간 영상에서 사람의 자세와 움직임을 분석하여 행동 상태를 분류하고, 낙상 판단의 보조 근거를 제공하는 AI 프로젝트입니다. 개인정보 보호를 위해 원본 화면 대신 스켈레톤 중심 표시 구조를 적용하고, 하체가 가려지는 상황을 보완하기 위해 synthetic occlusion 데이터를 생성했습니다. 또한 MediaPipe 입력 경로를 개선하고, 행동분류 모델 학습 및 테스트 구조를 정리했습니다.',
    visual: pipelineVisual,
    route: '/projects/fallai',
    consoleDemoRoute: '/demo/fallai-console',
    localConsoleUrl: 'http://localhost:3000/dashboard',
    links: [
      {
        label: 'FallAI 상세 페이지',
        href: '#/projects/fallai',
        description: '작동 데모, 실제 콘솔 iframe, 파이프라인 근거를 확인하는 서브페이지',
      },
      {
        label: 'FallAI Console 데모',
        href: '#/demo/fallai-console',
        description: '포트폴리오 안에서 분석 시작 흐름을 바로 확인하는 iframe용 데모',
      },
      {
        label: '포트폴리오 저장소',
        href: 'https://github.com/hongsheeya/job-portfolio',
        description: 'React/Vite 기반 GitHub Pages 포트폴리오 코드',
      },
    ],
    screenshots: [
      {
        title: 'FallAI Console 구동 화면',
        image: runtimeScreen,
        alt: 'FallAI Console의 실시간 분석 화면과 분석 로그 패널',
        caption:
          'RF-Dual · XG-Posture 모델을 사용하는 실제 로컬 실행 화면입니다. 스켈레톤 전용 표시와 학습 모드 진입 흐름을 확인할 수 있습니다.',
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
        label: 'Privacy First',
        value: 'Skeleton View',
        detail: '원본 영상 노출을 줄이고 판단에 필요한 자세 정보 중심으로 표시',
      },
      {
        label: 'Data Robustness',
        value: 'Occlusion Data',
        detail: '하체 가림 상황을 synthetic 데이터로 보완',
      },
      {
        label: 'Decision Support',
        value: 'Fall Evidence',
        detail: '행동분류 결과를 낙상 판단 보조 근거로 확장',
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
      '현재 모델 구조에 맞춰 파이프라인 설명과 사용 설명서를 최신화',
    ],
    evidence: [
      '문제 정의: 영상 경계, 가림, 개인정보 노출 리스크를 모델 성능과 서비스 사용성 관점에서 정리',
      '데이터 처리: keypoint, pose feature, synthetic occlusion 데이터 흐름 검토',
      '시스템 개선: 실시간 분석, 업로드 분석, 학습 모드, 문서화 구조를 함께 정비',
    ],
  } satisfies MainProject,
  skills: [
    {
      title: 'AI/Data',
      items: ['Pose Estimation', 'Feature Engineering', 'Model Evaluation', 'Dataset Design', 'Synthetic Data'],
    },
    {
      title: 'Engineering',
      items: ['Python', 'TypeScript', 'React', 'Vite', 'Dashboard UI', 'Git/GitHub'],
    },
    {
      title: 'Planning',
      items: ['Problem Definition', 'User Flow', 'Service UX', 'Technical Documentation', 'Experiment Tracking'],
    },
  ] satisfies SkillGroup[],
  experience: [
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
      title: '취업 포트폴리오 정리',
      period: '현재',
      description:
        '단일 핵심 프로젝트를 깊게 보여주고 이후 프로젝트를 데이터 기반으로 확장할 수 있는 구조를 설계했습니다.',
      points: [
        '프로젝트 배경, 문제, 접근, 개선, 확장 가능성을 보고서형 화면으로 구성',
        'AI/Data/IT/서비스기획 직무에 맞춰 기술과 기획 역량을 함께 표현',
      ],
    },
  ] satisfies ExperienceItem[],
  futureProjects: [
    {
      title: 'FallAI Console 상세',
      description: '분석 시작 화면, 중첩 타임라인, 모델 근거, 로컬 콘솔 연결을 확인하는 메인 프로젝트 상세 페이지',
      status: '운영 중',
      route: '/projects/fallai',
      category: 'Main',
      points: ['iframe 기반 작동 데모', '로컬 콘솔 연결', '분석 파이프라인 요약'],
    },
    {
      title: 'Stock Console',
      description: '기존 FallAI 실행 화면 링크로 잘못 이어지던 주식 관련 화면을 별도 서브페이지로 분리한 영역',
      status: '서브페이지',
      route: '/projects/stock-console',
      category: 'Sub',
      points: ['FallAI 라우트와 분리', '추후 주식 데이터/차트/리포트 추가 가능', '프로젝트 목록에서 독립 확인'],
    },
    {
      title: '서브 프로젝트 슬롯 3',
      description: '학습 데이터 분포, 누락, 라벨 품질을 자동 점검하는 리포트 자동화 프로젝트 영역',
      status: '추가 예정',
      route: '/projects/data-quality',
      category: 'Future',
      points: ['데이터 품질 점검', '라벨 분포 리포트', '모델 개선 로그 연결'],
    },
  ] satisfies FutureProject[],
  subProjects: [
    {
      slug: 'fallai',
      title: 'FallAI Console 상세',
      eyebrow: 'Main Project',
      summary:
        'AI 기반 행동분류 및 낙상 판단 보조 시스템의 실제 구동 흐름을 확인하는 상세 페이지입니다. 분석 시작, 중첩 타임라인, 모델 근거, 학습 상태 표시를 포트폴리오 안에서 재현합니다.',
      status: '운영 중',
      route: '/projects/fallai',
      role: 'AI/Data Pipeline · Dashboard UX',
      stack: ['Python', 'MediaPipe', 'YOLO', 'XGBoost', 'RandomForest', 'TypeScript'],
      points: [
        '분석 시작 후 구간별 결과가 갱신되는 콘솔 데모 제공',
        '4초 window, 2초 stride 기반 중첩 타임라인을 화면에서 확인',
        '실제 로컬 FallAI 서버가 실행 중이면 별도 링크로 직접 접근 가능',
      ],
      links: [
        {
          label: '작동 데모 열기',
          href: '#/demo/fallai-console',
          description: '분석 시작 상태와 로그가 진행되는 iframe용 데모',
        },
        {
          label: '로컬 FallAI Dashboard',
          href: 'http://localhost:3000/dashboard',
          description: 'Codex 서버/로컬 환경에서 FallAI가 실행 중일 때 접근',
        },
      ],
    },
    {
      slug: 'stock-console',
      title: 'Stock Console',
      eyebrow: 'Sub Project',
      summary:
        'FallAI Console 실행 화면과 혼동되지 않도록 분리한 주식 분석/콘솔형 서브 프로젝트 페이지입니다. 이후 차트, 종목 비교, 리포트 자동화 내용을 추가할 수 있습니다.',
      status: '설계 슬롯',
      route: '/projects/stock-console',
      role: 'Data Dashboard · Service Planning',
      stack: ['React', 'TypeScript', 'Data Visualization', 'Report UX'],
      points: [
        'FallAI 메인 프로젝트 라우트와 명확히 분리',
        '서브 프로젝트 목록과 상세 URL에서 독립 확인',
        '추후 API, 차트, 포트폴리오 리포트 구조를 추가하기 쉬운 데이터 기반 구성',
      ],
      links: [
        {
          label: '서브 프로젝트 목록',
          href: '#/projects',
          description: '전체 서브페이지 라우트 확인',
        },
      ],
    },
    {
      slug: 'data-quality',
      title: 'Data Quality Report',
      eyebrow: 'Future Project',
      summary:
        '학습 데이터 분포, 누락, 라벨 품질을 자동 점검하는 리포트 자동화 프로젝트 슬롯입니다.',
      status: '추가 예정',
      route: '/projects/data-quality',
      role: 'Dataset QA · Experiment Tracking',
      stack: ['Python', 'Pandas', 'Model Evaluation', 'Dashboard'],
      points: [
        '라벨 분포와 누락 파일을 자동 점검',
        '모델 성능 변화와 데이터 변경 이력을 함께 기록',
        '행동분류 데이터셋 제작 매뉴얼과 연결 가능',
      ],
      links: [
        {
          label: '서브 프로젝트 목록',
          href: '#/projects',
          description: '전체 서브페이지 라우트 확인',
        },
      ],
    },
  ] satisfies SubProject[],
  contact: {
    message:
      'AI/Data 프로젝트, IT 서비스기획, 데이터 기반 문제 해결 역할에 관심이 있습니다.',
    links: [
      { label: 'Email', href: 'mailto:gigukbyun@korea.ac.kr' },
      { label: 'Phone', href: 'tel:01056575945' },
      { label: 'GitHub', href: 'https://github.com/hongsheeya' },
      { label: 'Portfolio Repo', href: 'https://github.com/hongsheeya/job-portfolio' },
    ],
  },
};
