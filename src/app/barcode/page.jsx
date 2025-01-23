'use client'; // Required if using the Next.js App Router (13+)

import React, { useEffect, useRef, useState } from 'react';
import { BarcodeScanner } from 'dynamsoft-javascript-barcode';

const BarcodeReader = () => {
  const scannerRef = useRef(null); // Reference for the scanner container
  const [barcodeResult, setBarcodeResult] = useState('');

  useEffect(() => {
    let scanner;

    const initializeScanner = async () => {
      try {
        // Ensure the code runs only on the client side
        if (typeof window === 'undefined') return;

        // Set your trial license key here
        BarcodeScanner.license =
          'DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAzNjIzMzYwLVRYbFhaV0pRY205cSIsIm1haW5TZXJ2ZXJVUkwiOiJodHRwczovL21kbHMuZHluYW1zb2Z0b25saW5lLmNvbSIsIm9yZ2FuaXphdGlvbklEIjoiMTAzNjIzMzYwIiwic3RhbmRieVNlcnZlclVSTCI6Imh0dHBzOi8vc2Rscy5keW5hbXNvZnRvbmxpbmUuY29tIiwiY2hlY2tDb2RlIjoxNjg0MzUyOTcyfQ==';

        // Create and configure the scanner
        scanner = await BarcodeScanner.createInstance();
        scanner.uiElement = scannerRef.current;

        // Handle barcode results
        scanner.onFrameRead = (results) => {
          results.forEach((result) => {
            console.log('Scanned Barcode:', result.barcodeText);
          });
        };

        scanner.onUnduplicatedRead = (txt) => {
          setBarcodeResult(txt); // Set the scanned result
          alert(`Barcode Scanned: ${txt}`);
        };

        // Start the scanner
        await scanner.show();
      } catch (error) {
        console.error('Error initializing the barcode scanner:', error);
      }
    };

    initializeScanner();

    return () => {
      // Clean up scanner resources when unmounting
      if (scanner) {
        scanner.hide();
        scanner.destroy();
      }
    };
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Mobile Camera Barcode Scanner</h1>
      <div
        ref={scannerRef}
        style={{
          width: '100%',
          height: '400px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      ></div>
      {barcodeResult && (
        <div style={{ marginTop: '20px', fontSize: '18px', color: 'green' }}>
          <strong>Scanned Result:</strong> {barcodeResult}
        </div>
      )}
    </div>
  );
};

export default BarcodeReader;
