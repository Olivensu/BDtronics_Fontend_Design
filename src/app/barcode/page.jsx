'use client'
// Implementation of Barcode Scanner using ZXing and Material-UI
import React, { useEffect } from 'react';
import { BarcodeScanner } from 'dynamsoft-javascript-barcode';

const BarcodeReader = () => {
  useEffect(() => {
    let scanner;

    (async () => {
      // Set your trial license key
      BarcodeScanner.license = 'DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAzNjIzMzYwLVRYbFhaV0pRY205cSIsIm1haW5TZXJ2ZXJVUkwiOiJodHRwczovL21kbHMuZHluYW1zb2Z0b25saW5lLmNvbSIsIm9yZ2FuaXphdGlvbklEIjoiMTAzNjIzMzYwIiwic3RhbmRieVNlcnZlclVSTCI6Imh0dHBzOi8vc2Rscy5keW5hbXNvZnRvbmxpbmUuY29tIiwiY2hlY2tDb2RlIjoxNjg0MzUyOTcyfQ==';

      // Create a scanner instance
      scanner = await BarcodeScanner.createInstance();

      // Enable video input from the mobile camera
      scanner.uiElement = document.getElementById('barcode-scanner');

      // Optional: Configure the scanner for mobile optimization
      scanner.cameraSettings = {
        video: {
          facingMode: 'environment', // Use the rear camera
        },
      };

      // Handle the scanned results
      scanner.onUnduplicatedRead = (txt, result) => {
        console.log('Barcode Data:', txt);
        alert(`Scanned: ${txt}`);
      };

      // Start the scanner
      await scanner.show();
    })();

    // Cleanup when component is unmounted
    return () => {
      if (scanner) {
        scanner.hide();
        scanner.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h1>Scan Barcode</h1>
      {/* Camera Feed Area */}
      <div className=' w-full h-[300px] m-auto' style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default BarcodeReader;

