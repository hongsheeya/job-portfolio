const assetCards = [
  { label: '총 자산', value: '₩15,870,208', detail: '현금 + 포트폴리오' },
  { label: '매수 가능액', value: '₩12,289,526', detail: 'KIS 주문가능금액 기준' },
  { label: '포트폴리오 평가액', value: '₩3,519,234', detail: '국내 + 미장 평가금액' },
];

const cycleRows = [
  { symbol: 'SOXL', seed: '$15,000', round: '1/20', qty: '3', price: '$240.00', pnl: '+5.83%', status: '예약 대기' },
  { symbol: 'TQQQ', seed: '$10,000', round: '0/20', qty: '0', price: '$86.84', pnl: '0.00%', status: 'LOC 준비' },
];

const syncLogs = ['FireGate portfolio sync', 'LOC buy/sell reservation', '08:00 fill reconciliation'];

export function InfinityStockScreenPreview() {
  return (
    <figure className="runtimeFigure stockFigure">
      <div className="stockShell" aria-label="InfinityStock 대시보드 운영 화면 구성">
        <header className="stockTopbar">
          <div>
            <span className="stockLogo">IS</span>
            <strong>InfinityStock</strong>
          </div>
          <nav aria-label="InfinityStock 주요 메뉴">
            <span className="active">대시보드</span>
            <span>무한매수</span>
            <span>거래이력</span>
            <span>설정</span>
          </nav>
        </header>

        <section className="stockAssetGrid">
          {assetCards.map((card) => (
            <article key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <small>{card.detail}</small>
            </article>
          ))}
        </section>

        <section className="stockCyclePanel">
          <div className="stockPanelHead">
            <div>
              <small>Infinity Buy Cycles</small>
              <strong>무한매수 사이클</strong>
            </div>
            <em>무한매수 자동운영 ON</em>
          </div>
          <div className="stockCycleTable">
            {cycleRows.map((row) => (
              <div className="stockCycleRow" key={row.symbol}>
                <span className="stockSymbol">{row.symbol}</span>
                <span>{row.seed}</span>
                <span>{row.round}</span>
                <span>{row.qty}주</span>
                <span>{row.price}</span>
                <strong>{row.pnl}</strong>
                <em>{row.status}</em>
              </div>
            ))}
          </div>
        </section>

        <aside className="stockSyncRail" aria-label="자동화 상태">
          <strong>Automation Worker</strong>
          {syncLogs.map((log) => (
            <span key={log}>
              <i />
              {log}
            </span>
          ))}
        </aside>
      </div>
      <figcaption>
        <strong>InfinityStock 운영 화면</strong>
        <span>
          브로커 계좌 필드, FireGate 포트폴리오, 무한매수 LOC 예약과 체결 동기화를 한 화면에서 확인하고, 일반 사용자는 설정과 ON/OFF만 최소한으로 조작하도록 정리한 구조입니다.
        </span>
      </figcaption>
    </figure>
  );
}
