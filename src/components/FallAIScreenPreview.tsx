const actionBars = [
  { label: '눕기', value: 54, color: 'cyan' },
  { label: '앉기', value: 26, color: 'cyan' },
  { label: '서기', value: 12, color: 'cyan' },
  { label: '걷기', value: 5, color: 'cyan' },
  { label: '뛰기', value: 3, color: 'cyan' },
];

const evidenceBars = [
  { label: '전신검출', value: 100, color: 'cyan' },
  { label: '자세품질', value: 91, color: 'cyan' },
  { label: '중심변화', value: 74, color: 'amber' },
  { label: '속도변화', value: 68, color: 'amber' },
  { label: '모델신뢰', value: 79, color: 'cyan' },
  { label: '보정필요', value: 18, color: 'rose' },
];

const logs = [
  {
    title: '낙상 의심 · 전신 검출',
    time: '12~16초 · 0.9초',
    score: '68%',
    text: '몸 전체 검출 · 중심 급변 · RF-Dual 낙상 근거 유지',
  },
  {
    title: '앉기 → 눕기 전환',
    time: '10~14초 · 1.1초',
    score: '63%',
    text: '상체 기울기 증가 · hip/knee 고도 하락 · 중첩 구간 확인',
  },
  {
    title: '전환 경계 재검토',
    time: '8~12초 · 0.8초',
    score: '57%',
    text: '4초 창 · 2초 stride · 이전 구간 근거와 연결',
  },
  {
    title: '서기 → 앉기 변화',
    time: '6~10초 · 1.0초',
    score: '42%',
    text: '관절 속도 증가 · 무릎 각도 변화 · 주의 구간',
  },
  {
    title: '균형 저하 신호',
    time: '4~8초 · 0.8초',
    score: '35%',
    text: '어깨-골반 축 기울기 증가 · XG-Posture 보조 판정',
  },
  {
    title: '정상 보행 구간',
    time: '2~6초 · 0.7초',
    score: '18%',
    text: '전신 검출 안정 · 중심 이동 완만 · 위험 낮음',
  },
  {
    title: '초기 자세 확인',
    time: '0~4초 · 0.8초',
    score: '12%',
    text: '서기 상태 · 프레임 품질 94% · 기준 자세 저장',
  },
  {
    title: '업로드 분석 준비',
    time: '0초 · 0.3초',
    score: '0%',
    text: '영상 로드 · 사람 영역 확인 · 스켈레톤 전용 표시',
  },
];

function Meter({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="runtimeMeter">
      <span>{label}</span>
      <div className="runtimeTrack">
        <i className={`runtimeFill ${color}`} style={{ width: `${value}%` }} />
      </div>
      <strong>{value}%</strong>
    </div>
  );
}

export function FallAIScreenPreview() {
  return (
    <figure className="runtimeFigure">
      <div className="runtimeShell" aria-label="FallAI Console 실제 구동 화면 구성">
        <header className="runtimeTopbar">
          <div className="runtimeBrand">
            <span className="runtimeLogo">F</span>
            <strong>FallAI</strong>
            <small>RF-Dual · XG-Posture</small>
          </div>
          <nav className="runtimeTabs" aria-label="FallAI 화면 모드">
            <span>메인</span>
            <span>파이프라인</span>
            <span>설명서</span>
            <span className="active">스켈레톤</span>
            <span>원본</span>
            <span>업로드 모드</span>
            <span className="learn">학습 모드</span>
          </nav>
        </header>

        <div className="runtimeBody">
          <section className="runtimeStage" aria-label="스켈레톤 분석 화면">
            <aside className="decisionOverlay">
              <div className="scoreRow">
                <strong>68%</strong>
                <span>낙상 의심 · 눕기</span>
              </div>
              <p>판단: 낙상 보조 근거 확인</p>
              <div className="meterGroup">
                {actionBars.map((bar) => (
                  <Meter key={bar.label} {...bar} />
                ))}
              </div>
              <div className="evidenceBox">
                <div className="evidenceTitle">
                  <strong>전신 자세 근거</strong>
                  <span>91%</span>
                </div>
                {evidenceBars.map((bar) => (
                  <Meter key={bar.label} {...bar} />
                ))}
                <small>어깨-골반 축 37도 · 중심 하락 0.42 · 관절 추적 17/17</small>
              </div>
              <div className="stateLine">
                <b>눕기 54%</b>
                <span>앉기 26%</span>
              </div>
              <small>낙상 의심 · 전신 검출 100% · 중첩 구간 12~16초</small>
            </aside>

            <div className="skeletonCanvas" aria-hidden="true">
              <svg className="fallPoseSvg" viewBox="0 0 760 520" role="img" aria-label="전신 스켈레톤 낙상 의심 자세">
                <rect className="poseGuide" x="132" y="58" width="472" height="344" rx="18" />
                <line className="floorGuide" x1="92" y1="408" x2="666" y2="408" />
                <text className="poseLabel" x="136" y="52">전신 검출 100%</text>
                <text className="poseLabel risk" x="476" y="52">낙상 의심 68%</text>

                <line className="poseLink spine" x1="370" y1="150" x2="448" y2="262" />
                <line className="poseLink" x1="332" y1="174" x2="370" y2="150" />
                <line className="poseLink" x1="448" y1="262" x2="410" y2="338" />
                <line className="poseLink" x1="448" y1="262" x2="520" y2="348" />
                <line className="poseLink" x1="410" y1="338" x2="332" y2="398" />
                <line className="poseLink" x1="520" y1="348" x2="594" y2="404" />
                <line className="poseLink arm" x1="370" y1="150" x2="292" y2="236" />
                <line className="poseLink arm" x1="292" y1="236" x2="230" y2="310" />
                <line className="poseLink arm" x1="370" y1="150" x2="492" y2="190" />
                <line className="poseLink arm" x1="492" y1="190" x2="578" y2="232" />

                <circle className="poseHead" cx="322" cy="112" r="34" />
                <circle className="poseJoint" cx="370" cy="150" r="8" />
                <circle className="poseJoint" cx="332" cy="174" r="7" />
                <circle className="poseJoint" cx="448" cy="262" r="8" />
                <circle className="poseJoint" cx="410" cy="338" r="7" />
                <circle className="poseJoint" cx="520" cy="348" r="7" />
                <circle className="poseJoint" cx="332" cy="398" r="7" />
                <circle className="poseJoint" cx="594" cy="404" r="7" />
                <circle className="poseJoint arm" cx="292" cy="236" r="7" />
                <circle className="poseJoint arm" cx="230" cy="310" r="7" />
                <circle className="poseJoint arm" cx="492" cy="190" r="7" />
                <circle className="poseJoint arm" cx="578" cy="232" r="7" />
              </svg>
            </div>

            <span className="skeletonPill">스켈레톤 전용</span>
            <footer className="runtimeControls">
              <button type="button">중지</button>
              <span>14fps</span>
              <span>RTT 1,269ms · 서버 1,008ms</span>
              <strong>4초 창 · 2초 stride · 무삭제 큐</strong>
              <em>RF-Dual</em>
            </footer>
          </section>

          <aside className="runtimeLogRail" aria-label="분석 로그">
            <div className="logHeader">
              <strong>분석 로그</strong>
              <span>{logs.length}건</span>
            </div>
            <div className="logList">
              {logs.map((log) => (
                <article className="logItem" key={`${log.time}-${log.title}`}>
                  <i />
                  <div>
                    <div className="logTitle">
                      <strong>{log.title}</strong>
                      <span>{log.score}</span>
                    </div>
                    <p>{log.time}</p>
                    <small>{log.text}</small>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
      <figcaption>
        <strong>FallAI Console 구동 화면</strong>
        <span>
          스켈레톤 화면 위에 판단 결과를 오버레이하고, 오른쪽 분석 로그에서 중첩 구간별 근거를 확인하는 실제 운영 화면 구성을 반영했습니다.
        </span>
      </figcaption>
    </figure>
  );
}
