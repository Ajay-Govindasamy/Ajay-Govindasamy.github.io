import { useEffect, useState } from "react";

export const FaceScanBorder = () => {
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary shadow-glow-cyan"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary shadow-glow-cyan"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary shadow-glow-cyan"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary shadow-glow-cyan"></div>
      
      {/* Scanning line */}
      <div 
        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent shadow-glow-cyan transition-all duration-100"
        style={{ top: `${scanLine}%` }}
      ></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, .05) 25%, rgba(0, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .05) 75%, rgba(0, 255, 255, .05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, .05) 25%, rgba(0, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, .05) 75%, rgba(0, 255, 255, .05) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px'
      }}></div>
    </div>
  );
};
