import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface GestureButtonProps {
  icon: string;
  label: string;
  color: string;
  onMine: () => void;
}

const GestureButton = ({ icon, label, color, onMine }: GestureButtonProps) => {
  const [isHolding, setIsHolding] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStart = () => {
    setIsHolding(true);
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsHolding(false);
        setProgress(0);
        onMine();
      }
    }, 100);

    // Store interval ID for cleanup
    (window as any).miningInterval = interval;
  };

  const handleEnd = () => {
    setIsHolding(false);
    setProgress(0);
    if ((window as any).miningInterval) {
      clearInterval((window as any).miningInterval);
    }
  };

  return (
    <div className="relative">
      <Button
        className="w-full h-24 text-2xl flex flex-col gap-2 relative overflow-hidden border-2 transition-all"
        style={{ 
          borderColor: color,
          background: isHolding ? `linear-gradient(to top, ${color}33 ${progress}%, transparent ${progress}%)` : 'transparent'
        }}
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        <span className="text-4xl">{icon}</span>
        <span className="text-xs font-medium tracking-wider uppercase">{label}</span>
        {isHolding && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        )}
      </Button>
    </div>
  );
};

export const GestureButtons = () => {
  const handleMine = (emotion: string, amount: number) => {
    toast.success(`+${amount} ${emotion} tokens mined!`, {
      description: "Emotion verified as authentic",
    });
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      <GestureButton 
        icon="😭" 
        label="CRY" 
        color="hsl(var(--sadness))"
        onMine={() => handleMine("Sadness", Math.floor(Math.random() * 20) + 10)}
      />
      <GestureButton 
        icon="😆" 
        label="LAUGH" 
        color="hsl(var(--joy))"
        onMine={() => handleMine("Joy", Math.floor(Math.random() * 20) + 10)}
      />
      <GestureButton 
        icon="😱" 
        label="FEAR" 
        color="hsl(var(--fear))"
        onMine={() => handleMine("Fear", Math.floor(Math.random() * 20) + 10)}
      />
    </div>
  );
};
