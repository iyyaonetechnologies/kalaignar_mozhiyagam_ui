import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintExample: React.FC = () => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Print Section',
  });

  return (
    <>
      <button onClick={handlePrint}>Print</button>
      <div ref={printRef} style={{ padding: 20, backgroundColor: '#ccc' }}>
        <h1>Printable Content Here</h1>
        <p>This will appear in print window.</p>
      </div>
    </>
  );
};

export default PrintExample;
