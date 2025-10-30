import { EmotionCard } from "@/components/EmotionCard";
import { FaceScanBorder } from "@/components/FaceScanBorder";
import { AuthenticityScore } from "@/components/AuthenticityScore";
import { MoodMarket } from "@/components/MoodMarket";
import { GestureButtons } from "@/components/GestureButtons";
import { useEffect, useState } from "react";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const emotions = [
    { name: "Joy", icon: "⚡", balance: 245, color: "hsl(var(--joy))", trend: 12, decayTime: "18h 32m" },
    { name: "Sadness", icon: "💧", balance: 102, color: "hsl(var(--sadness))", trend: 32, decayTime: "22h 15m" },
    { name: "Anger", icon: "🔥", balance: 78, color: "hsl(var(--anger))", trend: -15, decayTime: "11h 48m" },
    { name: "Fear", icon: "👁️", balance: 134, color: "hsl(var(--fear))", trend: 8, decayTime: "20h 05m" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6 relative overflow-hidden">
      <FaceScanBorder />
      
      {/* Animated background effects */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse shadow-glow-green"></div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-primary bg-clip-text text-transparent">
              EMOTION ECONOMY
            </h1>
            <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse shadow-glow-green"></div>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Neural Interface Active • Year 2030</p>
          <p className="text-xs text-primary font-mono">
            {currentTime.toLocaleTimeString()} • Node: 47.6062° N, 122.3321° W
          </p>
        </div>

        {/* Authenticity Score */}
        <div className="mb-6">
          <AuthenticityScore />
        </div>

        {/* Emotion Wallet Grid */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-lg font-bold text-foreground tracking-wider uppercase">Emotion Wallet</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {emotions.map((emotion, index) => (
              <EmotionCard key={index} {...emotion} />
            ))}
          </div>
        </div>

        {/* Market and Mining Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <MoodMarket />
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-foreground tracking-wider uppercase">Emotion Mining</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-secondary/50 to-transparent"></div>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Hold gesture buttons to mine emotions • Facial recognition required
            </p>
            <GestureButtons />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 p-4 border border-border/50 rounded-lg bg-card/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Daily Volume</div>
              <div className="text-lg font-bold text-primary font-mono">847.2K ⚡</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Network Status</div>
              <div className="text-lg font-bold text-neon-green">OPTIMAL</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Empathy Debt</div>
              <div className="text-lg font-bold text-destructive font-mono">-23.4 ⚡</div>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="mt-4 p-3 border-2 border-destructive/50 rounded bg-destructive/10 text-center">
          <p className="text-xs text-destructive font-medium">
            ⚠️ Emotion authenticity below 70% will result in account suspension • Maintain genuine emotional responses
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
