import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Viewer, Worker, SpecialZoomLevel } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

const PdfViewer = ({
  pdfPath,
  setSelectedPdf,
}: {
  pdfPath: string;
  setSelectedPdf: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const zoomPluginInstance = zoomPlugin({
    enableShortcuts: true,
    // maxScale: 5, // Maximum zoom level (500%)
    // minScale: 0.25, // Minimum zoom level (25%)
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="h-screen w-screen">
      <button
        onClick={() => setSelectedPdf(null)}
        className="fixed bottom-5 right-12 z-50 bg-black p-3 rounded-full flex items-center text-white"
      >
        <ArrowLeft className="h-7 w-7" />
      </button>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={pdfPath} plugins={[zoomPluginInstance]} defaultScale={SpecialZoomLevel.PageWidth} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
