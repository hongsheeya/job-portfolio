import { exportPortfolioPdf } from '../utils/pdfExport';

type PdfExportButtonProps = {
  className?: string;
};

export function PdfExportButton({ className = 'pdfButton' }: PdfExportButtonProps) {
  return (
    <button type="button" className={className} onClick={exportPortfolioPdf}>
      PDF 저장
    </button>
  );
}
