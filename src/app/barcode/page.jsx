"use client";
// Implementation of Barcode Scanner using ZXing and Material-UI
import React, { useEffect } from "react";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";

export default function BarcodeReader() {
  useEffect(() => {
    let scanner;

    (async () => {
      try {
        // Set your trial license key (MUST BE SET FIRST)
        BarcodeScanner.license =
          "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAzNjIzMzYwLVRYbFhaV0pRY205cSIsIm1haW5TZXJ2ZXJVUkwiOiJodHRwczovL21kbHMuZHluYW1zb2Z0b25saW5lLmNvbSIsIm9yZ2FuaXphdGlvbklEIjoiMTAzNjIzMzYwIiwic3RhbmRieVNlcnZlclVSTCI6Imh0dHBzOi8vc2Rscy5keW5hbXNvZnRvbmxpbmUuY29tIiwiY2hlY2tDb2RlIjoxNjg0MzUyOTcyfQ==";

        // Create a scanner instance
        scanner = await BarcodeScanner.createInstance();

        // Attach the scanner to a specific HTML element
        scanner.uiElement = document.getElementById("barcode-scanner");

        // Handle barcode results
        scanner.onFrameRead = (results) => {
          results.forEach((result) => {
            console.log("Barcode Detected:", result.barcodeText);
          });
        };

        // Handle unique barcode reads
        scanner.onUnduplicatedRead = (txt) => {
          alert(`Barcode Scanned: ${txt}`);
        };

        // Start the scanner
        await scanner.show();
      } catch (err) {
        console.error("Error initializing the barcode scanner:", err);
      }
    })();

    return () => {
      // Cleanup when the component unmounts
      if (scanner) {
        scanner.hide();
        scanner.destroy();
      }
    };
  }, []);

  return (
    <div>
      <h1>Mobile Camera Barcode Scanner</h1>
      <div
        id="barcode-scanner"
        style={{
          width: "100%",
          height: "400px",
          border: "1px solid #ccc",
        }}
      ></div>
    </div>
  );
}

// export default BarcodeReader;
