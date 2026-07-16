import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, QrCode, Download, Printer, Copy, Check, ExternalLink, Globe } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  const [qrUrl, setQrUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      // Dynamic fallback to the current page location
      const currentUrl = window.location.href;
      setQrUrl(currentUrl);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDownload = async () => {
    try {
      const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(qrUrl)}&color=000000&bgcolor=ffffff&qzone=2`;
      const response = await fetch(qrImageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'meerut-kabab-menu-qr.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Failed to download QR code', error);
      // Fallback fallback: open in new tab
      window.open(`https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent(qrUrl)}&color=000000&bgcolor=ffffff&qzone=2`, '_blank');
    }
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Meerut Kabab & Grill - Digital Menu QR</title>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
            <style>
              body {
                font-family: 'Inter', sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                background-color: #ffffff;
                color: #1c1917;
                text-align: center;
              }
              .card {
                border: 3px solid #ea580c;
                padding: 40px;
                border-radius: 32px;
                max-width: 440px;
                background: #fff;
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .brand {
                font-size: 36px;
                font-weight: 800;
                letter-spacing: -0.05em;
                color: #ea580c;
                margin: 0;
                text-transform: uppercase;
              }
              .tagline {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.25em;
                color: #78716c;
                margin: 4px 0 32px 0;
                font-weight: 600;
              }
              .instructions {
                font-size: 24px;
                font-weight: 700;
                color: #1c1917;
                margin: 0 0 8px 0;
              }
              .sub-instructions {
                font-size: 14px;
                color: #57534e;
                margin: 0 0 32px 0;
                line-height: 1.5;
                padding: 0 10px;
              }
              .qr-container {
                background: #ffffff;
                padding: 16px;
                border-radius: 24px;
                border: 2px solid #e7e5e4;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
                margin-bottom: 24px;
              }
              .scan-badge {
                background: #fef2e9;
                color: #ea580c;
                font-size: 11px;
                font-weight: 700;
                padding: 6px 16px;
                border-radius: 9999px;
                text-transform: uppercase;
                letter-spacing: 0.1em;
                margin-top: 8px;
              }
              .footer {
                font-size: 11px;
                color: #a8a29e;
                margin-top: 16px;
              }
            </style>
          </head>
          <body>
            <div class="card">
              <h1 class="brand">MEERUT KABAB</h1>
              <div class="tagline">Kabab & Grill</div>
              
              <h2 class="instructions">SCAN FOR DIGITAL MENU</h2>
              <p class="sub-instructions">Use your phone's camera to scan this QR code and explore our complete flame-grilled menu instantly.</p>
              
              <div class="qr-container">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(qrUrl)}&color=000000&bgcolor=ffffff&qzone=1" width="280" height="280" alt="Menu QR Code" />
              </div>
              
              <div class="scan-badge">Table Menu Stand</div>
              <div class="footer">www.meerutkabab.com</div>
            </div>
            <script>
              window.onload = function() {
                window.print();
                setTimeout(() => { window.close(); }, 500);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <div 
      id="qr-code-modal-backdrop" 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md"
    >
      <motion.div
        id="qr-code-modal-card"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative w-full max-w-md bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-orange-500/5 text-stone-200"
      >
        {/* Close Button */}
        <button
          id="qr-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white bg-stone-800/50 hover:bg-stone-800 rounded-xl transition-colors duration-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gradient-to-tr from-orange-600 to-amber-500 rounded-xl text-stone-950 shadow-md">
            <QrCode className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-serif tracking-tight">
              Restaurant QR Code
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              Generate QR codes for table tents and flyers
            </p>
          </div>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center bg-stone-950/50 border border-stone-800/80 rounded-2xl p-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-lg border border-white">
            {qrUrl ? (
              <img
                id="qr-code-image"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrUrl)}&color=000000&bgcolor=ffffff&qzone=1`}
                width={200}
                height={200}
                alt="Website QR Code"
                className="block"
              />
            ) : (
              <div className="w-[200px] h-[200px] flex items-center justify-center bg-stone-100 rounded">
                <QrCode className="w-12 h-12 text-stone-400 animate-pulse" />
              </div>
            )}
          </div>
          <span className="text-[10px] text-amber-500 uppercase font-mono tracking-wider mt-4">
            Scan to view digital menu
          </span>
        </div>

        {/* Customization Input & URL Display */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Menu URL link
            </label>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Globe className="absolute left-3 top-2.5 w-4 h-4 text-stone-500" />
                <input
                  id="qr-url-input"
                  type="text"
                  value={qrUrl}
                  onChange={(e) => setQrUrl(e.target.value)}
                  placeholder="Enter custom website URL (e.g. Netlify)"
                  className="w-full pl-9 pr-3 py-2 bg-stone-950 border border-stone-800 hover:border-stone-700 focus:border-orange-500/50 rounded-xl text-sm font-mono text-stone-300 focus:outline-none focus:ring-1 focus:ring-orange-500/20 transition-all"
                />
              </div>
              <button
                id="qr-copy-btn"
                onClick={handleCopy}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
                    : 'bg-stone-800/40 border-stone-800 text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
                title="Copy Link"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-[11px] text-stone-500 mt-2">
              💡 Tip: Since you are deploying on <span className="text-stone-400 font-medium">Netlify</span>, you can paste your Netlify URL here to generate the correct code!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            id="qr-download-btn"
            onClick={handleDownload}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-stone-800 hover:bg-stone-700 text-white font-medium text-sm rounded-xl transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 border border-stone-700"
          >
            <Download className="w-4 h-4 text-amber-500" />
            <span>Download PNG</span>
          </button>
          
          <button
            id="qr-print-btn"
            onClick={handlePrint}
            className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-stone-950 font-bold text-sm rounded-xl transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-orange-600/10 hover:shadow-orange-600/20"
          >
            <Printer className="w-4 h-4" />
            <span>Print Stand</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="text-center mt-6 pt-4 border-t border-stone-800/60">
          <a
            id="qr-visit-btn"
            href={qrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs text-stone-400 hover:text-amber-500 transition-colors"
          >
            <span>Preview live link</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
