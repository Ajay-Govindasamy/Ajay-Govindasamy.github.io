import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface EmotionCardProps {
  name: string;
  icon: string;
  balance: number;
  color: string;
  trend: number;
  decayTime: string;
}

export const EmotionCard = ({ name, icon, balance, color, trend, decayTime }: EmotionCardProps) => {
  return (
    <Card className="bg-card border-2 p-4 relative overflow-hidden group hover:scale-105 transition-transform duration-300" style={{ borderColor: color }}>
      <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, ${color} 0%, transparent 100%)` }}></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl">{icon}</span>
          <div className="text-right">
            <div className="text-2xl font-bold" style={{ color }}>{balance}</div>
            <div className={`text-xs ${trend > 0 ? 'text-neon-green' : 'text-destructive'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </div>
          </div>
        </div>
        
        <div className="text-sm font-medium text-foreground mb-2">{name}</div>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Decay Timer</span>
            <span className="text-destructive">{decayTime}</span>
          </div>
          <Progress value={65} className="h-1" />
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 animate-pulse" style={{ boxShadow: `0 0 20px ${color}` }}></div>
      </div>
    </Card>
  );
};
