import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./PDFViewer"), { ssr: false });

export default PdfViewer;
