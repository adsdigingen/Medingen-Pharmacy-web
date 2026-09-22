import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "../components/common/ToastProvider";

export const metadata: Metadata = {
  title: "Medingen Pharmacy ERP",
  description: "Medingen Pharmacy Enterprise Resource Planning System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Instant splash screen rendered as raw HTML before ANY JS loads */}
        <style dangerouslySetInnerHTML={{ __html: `
          #app-loader {
            position: fixed;
            inset: 0;
            z-index: 9999;
            background: #0f172a;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 12px;
            font-family: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
            font-size: 13px;
            color: #94a3b8;
            transition: opacity 0.3s ease;
          }
          #app-loader.hidden {
            opacity: 0;
            pointer-events: none;
          }
          .circle-spinner {
            width: 44px;
            height: 44px;
            border: 3px solid rgba(139, 92, 246, 0.2);
            border-radius: 50%;
            border-top-color: #8B5CF6;
            animation: spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}} />
        {/* Script runs synchronously: exposes hideAppLoader() for page.tsx to call */}
        <script dangerouslySetInnerHTML={{ __html: `
          console.log("[Layout Loader] Registering window.hideAppLoader");
          window.hideAppLoader = function() {
            console.log("[Layout Loader] hideAppLoader invoked");
            var el = document.getElementById('app-loader');
            if (el) {
              console.log("[Layout Loader] Removing #app-loader element");
              el.classList.add('hidden');
              setTimeout(function() { el.remove(); }, 350);
            } else {
              console.warn("[Layout Loader] #app-loader element not found!");
            }
          };

          window.logTrace = function(msg) {
            console.log(msg);
            var traceEl = document.getElementById('startup-trace-log');
            if (traceEl) {
              traceEl.innerHTML += msg + '<br/>';
              traceEl.scrollTop = traceEl.scrollHeight;
            }
          };

          console.log("[Layout] Startup trace initialized.");
        `}} />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans" style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" }}>
        {/* Instant splash: visible immediately, before React hydrates */}
        <div id="app-loader">
          <div className="circle-spinner"></div>
          <span style={{ marginTop: '6px' }}>Initializing Medingen ERP desk environment...</span>
          <div id="startup-trace-log" style={{
            marginTop: '15px',
            fontFamily: 'monospace',
            fontSize: '10px',
            color: '#4ade80',
            maxHeight: '200px',
            overflowY: 'auto',
            textAlign: 'left',
            width: '80%',
            borderTop: '1px solid #1e293b',
            paddingTop: '10px',
            whiteSpace: 'pre-wrap',
          }}></div>
        </div>

        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
