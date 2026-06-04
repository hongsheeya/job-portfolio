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
  featuredProjects: [
    {
      title: 'AI 기반 행동분류 및 낙상 판단 보조 시스템',
      route: '/projects/fallai',
      category: 'Main AI Project',
      summary:
        '실시간 자세와 움직임을 분석해 행동 상태를 분류하고, 낙상 판단의 보조 근거를 제공하는 프로젝트입니다.',
      role: 'AI/Data Pipeline · Service UX · System Improvement',
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
      items: ['RandomForest', 'XGBoost', 'YOLO/MediaPipe', 'pandas', 'scikit-learn', 'Model Evaluation'],
    },
    {
      title: 'Programming',
      items: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'React/Vite'],
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
    ],
  },
};
