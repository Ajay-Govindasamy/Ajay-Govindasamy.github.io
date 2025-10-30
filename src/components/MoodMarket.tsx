import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface MarketData {
  emotion: string;
  icon: string;
  change: number;
  price: number;
}

export const MoodMarket = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([
    { emotion: "Joy", icon: "😊", change: 12, price: 245 },
    { emotion: "Sadness", icon: "😢", change: 32, price: 189 },
    { emotion: "Anger", icon: "😡", change: -15, price: 156 },
    { emotion: "Fear", icon: "😱", change: 8, price: 203 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(item => ({
        ...item,
        change: Math.round((Math.random() - 0.5) * 40),
        price: Math.max(100, Math.round(item.price + (Math.random() - 0.5) * 20))
      })));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-card border-primary/30 p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-primary tracking-wider uppercase">Live Mood Market</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
          <span className="text-xs text-muted-foreground">LIVE</span>
        </div>
      </div>
      
      <div className="space-y-2">
        {marketData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex items-center gap-2">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.emotion}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono">{item.price}⚡</span>
              <span className={`text-xs font-bold ${item.change > 0 ? 'text-neon-green' : 'text-destructive'}`}>
                {item.change > 0 ? '▲' : '▼'} {Math.abs(item.change)}%
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-3 pt-3 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          Market cap: <span className="text-primary font-mono">2.4M EmoCoin</span>
        </div>
      </div>
    </Card>
  );
};
