import pipelineVisual from '../assets/fallai-pipeline.svg';

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
  stack: string[];
  points: string[];
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
    title: 'AI/Data · IT 서비스기획 지원자',
    headline: '문제 정의부터 데이터 처리, 모델 검토, 서비스 화면 개선까지 연결하는 지원자입니다.',
    location: 'South Korea',
    email: 'gigukbyun@korea.ac.kr',
    phone: '010-5657-5945',
    github: 'https://github.com/hongsheeya',
  },
  about: {
    intro:
      '데이터와 모델을 서비스 화면으로 연결하는 과정에 관심이 있습니다. AI 행동분류 프로젝트에서는 문제 정의, 데이터 처리, 모델 검토, 사용자 판단 보조 화면까지 함께 다뤘습니다.',
    strengths: [
      '문제를 기능 단위가 아니라 데이터, 모델, 화면, 운영 흐름의 연결로 정의합니다.',
      '영상 데이터와 pose feature를 다루며 모델 입력 경로와 테스트 구조를 정리했습니다.',
      '서비스기획 관점에서 개인정보 보호, 판단 근거 표시, 사용자 검증 흐름을 함께 고려합니다.',
    ],
  },
  featuredProjects: [
    {
      title: 'AI 기반 행동분류 및 낙상 판단 보조 시스템',
      route: '/projects/fallai',
      category: 'Main AI Project',
      summary:
        '실시간 자세와 움직임을 분석해 행동 상태를 분류하고, 낙상 판단의 보조 근거를 제공하는 프로젝트입니다.',
      role: 'AI/Data Pipeline · Frontend UX · System Improvement',
      stack: ['MediaPipe', 'Pose Feature', 'XGBoost', 'RandomForest', 'React'],
      points: [
        '스켈레톤 중심 표시로 개인정보 노출 부담을 낮춤',
        '하체 가림 상황을 고려한 synthetic occlusion 데이터 검토',
        '중첩 분할 타임라인과 분석 로그로 판단 근거를 화면화',
      ],
    },
  ] satisfies ProjectSummary[],
  mainProject: {
    title: 'AI 기반 행동분류 및 낙상 판단 보조 시스템',
    subtitle: '실시간 자세 분석과 행동 상태 분류를 통한 낙상 판단 보조 프로젝트',
    period: '2026',
    role: 'AI/Data Pipeline · Frontend UX · System Improvement',
    summary:
      '실시간 영상에서 사람의 자세와 움직임을 분석하여 행동 상태를 분류하고, 낙상 판단의 보조 근거를 제공하는 AI 프로젝트입니다. 개인정보 보호를 위해 원본 화면 대신 스켈레톤 중심 표시 구조를 적용하고, 하체가 가려지는 상황을 보완하기 위해 synthetic occlusion 데이터를 생성했습니다. 또한 MediaPipe 입력 경로를 개선하고, 행동분류 모델 학습 및 테스트 구조를 정리했습니다.',
    visual: pipelineVisual,
    links: [
      {
        label: '포트폴리오 저장소',
        href: 'https://github.com/hongsheeya/job-portfolio',
        description: 'React/Vite 기반 GitHub Pages 포트폴리오 코드',
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
      title: 'FallAI 프로젝트 문서화와 검증 흐름 정리',
      period: '현재',
      description:
        'AI 행동분류 및 낙상 판단 보조 시스템의 구현 화면, 파이프라인, 개선 근거를 한 페이지에서 검토할 수 있도록 정리했습니다.',
      points: [
        'FallAI 콘솔 구동 화면을 메인 프로젝트 섹션에서 바로 확인 가능하도록 구성',
        '문제 정의, 데이터 처리, 모델 검토, 시스템 개선 경험을 보고서형 흐름으로 정리',
      ],
    },
  ] satisfies ExperienceItem[],
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
