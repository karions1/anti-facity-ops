import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, Calendar, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
  const navigate = useNavigate();
  const [timeFilter, setTimeFilter] = useState<'today' | 'alltime'>('today');

  const todayData = [
    { rank: 1, team: "Cyber Phoenix", points: 2450, progress: 89 },
    { rank: 2, team: "Shadow Wolves", points: 2200, progress: 78 },
    { rank: 3, team: "Digital Ghosts", points: 1950, progress: 67 },
    { rank: 4, team: "Neon Raiders", points: 1700, progress: 56 },
    { rank: 5, team: "Code Breakers", points: 1500, progress: 45 },
  ];

  const alltimeData = [
    { rank: 1, team: "Shadow Wolves", points: 15670, progress: 100 },
    { rank: 2, team: "Cyber Phoenix", points: 14230, progress: 95 },
    { rank: 3, team: "Digital Ghosts", points: 13890, progress: 92 },
    { rank: 4, team: "Neon Raiders", points: 12450, progress: 87 },
    { rank: 5, team: "Code Breakers", points: 11200, progress: 82 },
    { rank: 6, team: "Quantum Hackers", points: 10890, progress: 78 },
    { rank: 7, team: "Binary Legends", points: 9560, progress: 73 },
  ];

  const currentData = timeFilter === 'today' ? todayData : alltimeData;

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-400" />;
    if (rank === 2) return <Trophy className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Trophy className="h-6 w-6 text-amber-600" />;
    return <span className="text-xl font-bold text-muted-foreground">#{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-cyber-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-cyber-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern */}
      <div 
        className="fixed inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 127, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 127, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-accent text-accent hover:bg-accent/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Назад
            </Button>
            
            <h1 className="text-4xl font-bold neon-text text-center">
              Team Leaderboard
            </h1>
            
            <div className="w-20" /> {/* Spacer */}
          </div>

          {/* Time Filter */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={timeFilter === 'today' ? 'default' : 'outline'}
              onClick={() => setTimeFilter('today')}
              className={timeFilter === 'today' 
                ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground' 
                : 'border-primary text-primary hover:bg-primary/20'
              }
            >
              <Calendar className="h-4 w-4 mr-2" />
              Сегодня
            </Button>
            <Button
              variant={timeFilter === 'alltime' ? 'default' : 'outline'}
              onClick={() => setTimeFilter('alltime')}
              className={timeFilter === 'alltime' 
                ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground' 
                : 'border-accent text-accent hover:bg-accent/20'
              }
            >
              <Clock className="h-4 w-4 mr-2" />
              Всё время
            </Button>
          </div>

          {/* Leaderboard */}
          <div className="cyber-panel">
            <div className="space-y-4">
              {currentData.map((team) => (
                <div 
                  key={team.rank}
                  className={`flex items-center justify-between p-6 rounded-lg border transition-all duration-300 hover:border-primary/50 ${
                    team.rank <= 3 
                      ? 'bg-gradient-to-r from-background to-primary/5 border-primary/30' 
                      : 'bg-muted/20 border-muted'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-12">
                      {getRankIcon(team.rank)}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {team.team}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          {team.points} очков
                        </Badge>
                        <Badge variant="outline" className="border-accent text-accent">
                          {team.progress}% прогресс
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                        style={{ width: `${team.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;