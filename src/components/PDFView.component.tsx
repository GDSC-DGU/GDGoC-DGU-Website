"use client";

import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

/**
 * PDF.js 워커 설정
 * @author 도형
 */
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return Math.max(1, Math.min(numPages || 1, newPageNumber));
    });
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function zoomIn() {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3.0));
  }

  function zoomOut() {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  }

  return (
    <div className='pdf-viewer border border-gray-200 rounded-lg overflow-hidden'>
      {title && (
        <div className='bg-gray-100 p-3 border-b border-gray-200'>
          <h3 className='text-lg font-semibold'>{title}</h3>
        </div>
      )}

      <div className='flex justify-between items-center p-3 bg-gray-50 border-b border-gray-200'>
        <div className='flex items-center space-x-2'>
          <button
            onClick={previousPage}
            disabled={pageNumber <= 1}
            className='px-3 py-1 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
          >
            이전
          </button>
          <button
            onClick={nextPage}
            disabled={pageNumber >= (numPages || 1)}
            className='px-3 py-1 bg-blue-600 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed'
          >
            다음
          </button>
          <p className='text-sm'>
            페이지 {pageNumber} / {numPages || "-"}
          </p>
        </div>

        <div className='flex items-center space-x-2'>
          <button onClick={zoomOut} className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'>
            -
          </button>
          <span className='text-sm'>{Math.round(scale * 100)}%</span>
          <button onClick={zoomIn} className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'>
            +
          </button>
        </div>
      </div>

      <div className='p-4 flex justify-center bg-gray-100 overflow-auto' style={{ minHeight: "500px" }}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div className='text-center py-10'>PDF 로딩 중...</div>}
          error={<div className='text-center py-10 text-red-500'>PDF를 불러오는 데 실패했습니다.</div>}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className='shadow-lg'
          />
        </Document>
      </div>
    </div>
  );
};
