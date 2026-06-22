export function exportPortfolioPdf() {
  const originalTitle = document.title;
  const today = new Date().toISOString().slice(0, 10);

  document.title = `Byun-Giguk-AIData-Portfolio-${today}`;

  const restoreTitle = () => {
    document.title = originalTitle;
    window.removeEventListener('afterprint', restoreTitle);
  };

  window.addEventListener('afterprint', restoreTitle);
  window.setTimeout(() => window.print(), 80);
}
