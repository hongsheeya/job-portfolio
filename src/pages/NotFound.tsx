import { appHref } from '../routes';

export function NotFound() {
  return (
    <main className="subPage">
      <section className="section subHero">
        <p className="sectionKicker">Route</p>
        <h1>페이지를 찾을 수 없습니다</h1>
        <p className="heroLead">서브페이지 목록에서 현재 포트폴리오 라우트를 다시 확인할 수 있습니다.</p>
        <div className="heroActions">
          <a className="primaryButton" href={appHref('/projects')}>
            서브페이지 목록
          </a>
          <a className="secondaryButton" href={appHref('/')}>
            홈으로
          </a>
        </div>
      </section>
    </main>
  );
}
