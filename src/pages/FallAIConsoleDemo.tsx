import { useEffect, useMemo, useState } from 'react';

const logs = [
  'upload: fall_sample.mp4 수신',
  'pose: MediaPipe keypoint 추출 완료',
  'window: 0~4s 분석 완료 · 안전',
  'window: 2~6s 분석 완료 · 낙상 의심',
  'window: 4~8s 분석 완료 · 전환 구간',
  'model: RF-Dual + XG-Posture score fusion',
  'result: 중첩 구간 근거 병합 완료',
];

const segments = [
  { label: '0~4초', state: 'safe', left: 0, width: 40, score: 8 },
  { label: '2~6초', state: 'danger', left: 20, width: 40, score: 84 },
  { label: '4~8초', state: 'watch', left: 40, width: 40, score: 52 },
  { label: '6~10초', state: 'watch', left: 60, width: 40, score: 44 },
];

export function FallAIConsoleDemo() {
  const [running, setRunning] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!running) return undefined;
    const timer = window.setInterval(() => {
      setStep((value) => (value + 1) % logs.length);
    }, 1200);
    return () => window.clearInterval(timer);
  }, [running]);

  const activeLogs = useMemo(() => logs.slice(0, step + 1), [step]);
  const progress = Math.round(((step + 1) / logs.length) * 100);

  return (
    <main className="consoleDemo">
      <header className="consoleTopbar">
        <div>
          <span className="consoleMark">FallAI</span>
          <strong>Action Analysis Console</strong>
        </div>
        <button type="button" onClick={() => setRunning((value) => !value)}>
          {running ? '일시정지' : '분석 시작'}
        </button>
      </header>

      <section className="consoleLayout">
        <div className="videoPane" aria-label="스켈레톤 분석 화면">
          <div className="skeletonStage">
            <span className="joint head" />
            <span className="joint shoulderL" />
            <span className="joint shoulderR" />
            <span className="joint hip" />
            <span className="joint kneeL" />
            <span className="joint kneeR" />
            <span className="bone torso" />
            <span className="bone armL" />
            <span className="bone armR" />
            <span className="bone legL" />
            <span className="bone legR" />
          </div>
          <div className="videoStatus">
            <span>Skeleton View</span>
            <strong>{progress}%</strong>
          </div>
        </div>

        <aside className="analysisPane">
          <div className="statusCard danger">
            <span>현재 판단</span>
            <strong>{step >= 3 ? '낙상 의심' : '분석 중'}</strong>
            <p>RF-Dual · XG-Posture · 중첩 타임라인 근거 병합</p>
          </div>
          <div className="statusGrid">
            <div>
              <span>fall score</span>
              <strong>{step >= 3 ? '84%' : '52%'}</strong>
            </div>
            <div>
              <span>ETA</span>
              <strong>{Math.max(1, logs.length - step - 1)}s</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className="timelinePanel">
        <div className="timelineTrack">
          {segments.map((segment, index) => (
            <div
              className={`segment ${segment.state} ${index <= step ? 'visible' : ''}`}
              key={segment.label}
              style={{ left: `${segment.left}%`, width: `${segment.width}%` }}
            >
              {segment.label} · {segment.score}%
            </div>
          ))}
        </div>
      </section>

      <section className="logPanel">
        {activeLogs.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>
    </main>
  );
}
