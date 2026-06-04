const actionBars = [
  { label: '앉기', value: 49, color: 'cyan' },
  { label: '뛰기', value: 22, color: 'cyan' },
  { label: '눕기', value: 17, color: 'cyan' },
  { label: '걷기', value: 9, color: 'cyan' },
  { label: '서기', value: 4, color: 'cyan' },
];

const evidenceBars = [
  { label: '중립', value: 49, color: 'slate' },
  { label: 'distress', value: 26, color: 'slate' },
  { label: '당황', value: 24, color: 'amber' },
  { label: '모델신뢰', value: 62, color: 'cyan' },
  { label: '고정보정', value: 36, color: 'rose' },
  { label: '상태 품질', value: 70, color: 'cyan' },
  { label: '실제얼굴', value: 100, color: 'cyan' },
];

const logs = [
  {
    title: '비낙상·앉기 → 앉기',
    time: '8~12초 · 0.7초',
    score: '30%',
    text: '자세 앉기 · 위험 30.0% · RF-Dual · LLM 캐시',
  },
  {
    title: '비낙상·눕기 → 앉기',
    time: '6~10초 · 1.2초',
    score: '30%',
    text: '눕기 → 앉기 · 자세 감지 · 상태 자세 감지',
  },
  {
    title: '비낙상·눕기 → 눕기',
    time: '2~6초 · 1.0초',
    score: '39%',
    text: '앉기 → 눕기 · 자세 감지 · XG-Posture 보조',
  },
  {
    title: '비낙상·앉기 → 앉기',
    time: '0~4초 · 1.1초',
    score: '43%',
    text: '현재 앉기 · ΔY 1.13px · 자세 104%',
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
                <strong>31%</strong>
                <span>비낙상·앉기</span>
              </div>
              <p>행동: 앉기</p>
              <div className="meterGroup">
                {actionBars.map((bar) => (
                  <Meter key={bar.label} {...bar} />
                ))}
              </div>
              <div className="evidenceBox">
                <div className="evidenceTitle">
                  <strong>표정: 약한 불편 신호</strong>
                  <span>49%</span>
                </div>
                {evidenceBars.map((bar) => (
                  <Meter key={bar.label} {...bar} />
                ))}
                <small>감정 top 중립 0.49, 수심/불안 차이 0.23, 프레임일치 0.50</small>
              </div>
              <div className="stateLine">
                <b>앉기 75%</b>
                <span>눕기 25%</span>
              </div>
              <small>비낙상 · ΔY 2.1px · 자세 100% · 7F 검출</small>
            </aside>

            <div className="skeletonCanvas" aria-hidden="true">
              <span className="posePoint face face1" />
              <span className="posePoint face face2" />
              <span className="posePoint face face3" />
              <span className="posePoint face face4" />
              <span className="posePoint face face5" />
              <span className="posePoint face face6" />
              <span className="poseBone faceBone brow" />
              <span className="poseBone faceBone jaw" />

              <span className="posePoint body shoulder" />
              <span className="posePoint body hipLeft" />
              <span className="posePoint body hipRight" />
              <span className="posePoint body kneeLeft" />
              <span className="posePoint body kneeRight" />
              <span className="posePoint body footLeft" />
              <span className="posePoint body footRight" />
              <span className="poseBone bodyBone back" />
              <span className="poseBone bodyBone seat" />
              <span className="poseBone bodyBone legLeft" />
              <span className="poseBone bodyBone legRight" />
              <span className="poseBone bodyBone floor" />
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
              <span>4건</span>
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
