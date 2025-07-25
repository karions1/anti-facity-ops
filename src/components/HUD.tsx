import { useState, useEffect } from 'react';
import { Timer, Target, Trophy, Users } from 'lucide-react';

interface HUDProps {
  points: number;
  missionProgress: number;
  teamName: string;
}

export const HUD = ({ points, missionProgress, teamName }: HUDProps) => {
  const [time, setTime] = useState({ hours: 0, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const highscoreData = [
    { name: "Team Alpha", score: 2150, progress: 85 },
    { name: "Cyber Hawks", score: 1980, progress: 78 },
    { name: teamName, score: points, progress: missionProgress },
    { name: "Shadow Unit", score: 1750, progress: 65 },
  ].sort((a, b) => b.score - a.score);

  return (
    <div className="fixed top-4 right-4 space-y-4 z-50">
      {/* Timer */}
      <div className="hud-element">
        <div className="flex items-center gap-2 mb-2">
          <Timer className="h-4 w-4 text-primary animate-cyber-glow" />
          <span className="text-sm font-medium">Mission Timer</span>
        </div>
        <div className="text-2xl font-mono neon-text">
          {String(time.hours).padStart(2, '0')}:
          {String(time.minutes).padStart(2, '0')}:
          {String(time.seconds).padStart(2, '0')}
        </div>
      </div>

      {/* Points */}
      <div className="hud-element">
        <div className="flex items-center gap-2 mb-2">
          <Target className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Points</span>
        </div>
        <div className="text-xl font-bold text-accent">{points.toLocaleString()}</div>
      </div>

      {/* Mission Progress */}
      <div className="hud-element">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Progress</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-1">
          <div 
            className="h-2 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${missionProgress}%` }}
          />
        </div>
        <div className="text-sm text-muted-foreground">{missionProgress}%</div>
      </div>

      {/* Highscore */}
      <div className="hud-element w-64">
        <div className="flex items-center gap-2 mb-3">
          <Users className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium">Highscore</span>
        </div>
        <div className="space-y-2">
          {highscoreData.slice(0, 4).map((team, index) => (
            <div 
              key={team.name}
              className={`flex items-center justify-between text-xs p-2 rounded ${
                team.name === teamName ? 'bg-primary/20 border border-primary' : 'bg-muted/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === 0 ? 'bg-yellow-500 text-black' :
                  index === 1 ? 'bg-gray-400 text-black' :
                  index === 2 ? 'bg-amber-600 text-black' : 'bg-muted'
                }`}>
                  {index + 1}
                </span>
                <span className="truncate">{team.name}</span>
              </div>
              <div className="text-right">
                <div className="font-bold">{team.score}</div>
                <div className="text-muted-foreground">{team.progress}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};