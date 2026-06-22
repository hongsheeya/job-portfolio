const metrics = [
  { label: '실측 거리', value: '33.3 mm' },
  { label: '상처 깊이', value: '15.1 mm' },
  { label: '상처 후보', value: '3개' },
  { label: '후보 신뢰', value: '95%' },
];

const analysis = ['면적 2240.7 mm²', '둘레 708.7 mm', '부피 16711.5 mm³', '사진 추정 · 스케일 미보정'];

export function Phantom3DScreenPreview() {
  return (
    <figure className="runtimeFigure phantomFigure">
      <div className="phantomShell" aria-label="phantom3D 실제 작업 화면 구성">
        <header className="phantomTopbar">
          <div className="phantomBrand">
            <span className="phantomLogo">3D</span>
            <strong>phantom3D</strong>
          </div>
          <nav className="phantomTabs" aria-label="phantom3D 보기 모드">
            <span className="active">비교</span>
            <span>사진</span>
            <span>3D</span>
          </nav>
          <div className="phantomActions">
            <span>카메라 촬영</span>
            <span>사진 업로드</span>
            <span>모델 업로드</span>
          </div>
        </header>

        <div className="phantomWorkspace">
          <aside className="phantomToolRail" aria-label="측정 도구">
            {['선택', '회전', '이동', '확대', '거리', '깊이', '보정'].map((tool) => (
              <span className={tool === '거리' ? 'active' : ''} key={tool}>
                {tool}
              </span>
            ))}
          </aside>

          <section className="phantomPanel photoPanelPreview">
            <div className="phantomPanelHead">
              <small>Reference Photo</small>
              <strong>실제 사진</strong>
            </div>
            <div className="phantomPhoto">
              <i className="phantomPhotoLine one" />
              <i className="phantomPhotoLine two" />
              <i className="phantomWound oval" />
              <i className="phantomWound slit" />
              <i className="phantomScale" />
            </div>
          </section>

          <section className="phantomPanel modelPanelPreview">
            <div className="phantomPanelHead row">
              <div>
                <small>3D Phantom</small>
                <strong>3D 모델 뷰어</strong>
              </div>
              <em>사진 기반 높이맵 모델</em>
            </div>
            <div className="phantomViewer">
              <div className="phantomGrid" />
              <div className="phantomModel">
                <i className="phantomCut long" />
                <i className="phantomCut round" />
                <i className="phantomCut valley" />
                <span className="depthBadge">깊이 15.1 mm</span>
              </div>
            </div>
          </section>
        </div>

        <footer className="phantomResultBar">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
          <div className="phantomAnalysis">
            {analysis.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </footer>
      </div>
      <figcaption>
        <strong>phantom3D 작업 화면</strong>
        <span>
          사진 기반 상처 후보 분석 결과를 높이맵 3D 모델로 표시하고, 실제 LiDAR/스캔 모델 업로드 시 더 높은 신뢰도의 표면 좌표 측정으로 전환하는 구조입니다.
        </span>
      </figcaption>
    </figure>
  );
}
