import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export const AuthenticityScore = () => {
  const [score, setScore] = useState(87);
  const [status, setStatus] = useState<"safe" | "warning" | "danger">("safe");

  useEffect(() => {
    const interval = setInterval(() => {
      const newScore = Math.max(70, Math.min(100, score + (Math.random() - 0.5) * 5));
      setScore(Math.round(newScore));
      
      if (newScore >= 80) setStatus("safe");
      else if (newScore >= 70) setStatus("warning");
      else setStatus("danger");
    }, 2000);
    
    return () => clearInterval(interval);
  }, [score]);

  const getStatusColor = () => {
    switch (status) {
      case "safe": return "hsl(var(--neon-green))";
      case "warning": return "hsl(var(--joy))";
      case "danger": return "hsl(var(--destructive))";
    }
  };

  return (
    <Card className="bg-card border-2 p-6 text-center relative overflow-hidden" style={{ borderColor: getStatusColor() }}>
      <div className="absolute inset-0 opacity-5" style={{ 
        background: `radial-gradient(circle at center, ${getStatusColor()} 0%, transparent 70%)`
      }}></div>
      
      <div className="relative z-10">
        <div className="text-xs text-muted-foreground mb-2 tracking-wider uppercase">Authenticity Score</div>
        <div className="text-6xl font-bold mb-2 tabular-nums" style={{ color: getStatusColor() }}>
          {score}%
        </div>
        <div className="text-xs font-medium tracking-wide uppercase" style={{ color: getStatusColor() }}>
          {status === "safe" && "✓ Verified Genuine"}
          {status === "warning" && "⚠ Emotion Variance Detected"}
          {status === "danger" && "⚠ Account Freeze Warning"}
        </div>
        
        {status !== "safe" && (
          <div className="mt-3 text-xs text-muted-foreground">
            Perform emotional calibration to restore authenticity
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 animate-pulse pointer-events-none" style={{ 
        boxShadow: `inset 0 0 30px ${getStatusColor()}33`
      }}></div>
    </Card>
  );
};
