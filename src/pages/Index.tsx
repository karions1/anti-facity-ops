import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, Section } from '@/components/Navigation';
import { AgentProfile } from '@/components/AgentProfile';
import { Dashboard } from '@/components/sections/Dashboard';
import { Calls } from '@/components/sections/Calls';
import { Files } from '@/components/sections/Files';
import { HintsModal } from '@/components/modals/HintsModal';
import { AISoldierModal } from '@/components/modals/AISoldierModal';
import { AppSidebar } from '@/components/AppSidebar';
import { AppHeader } from '@/components/AppHeader';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Trophy, Timer, Target } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<Section>('dashboard');
  const [showHints, setShowHints] = useState(false);
  const [showAISoldier, setShowAISoldier] = useState(false);
  const [points, setPoints] = useState(1250);
  const [missionProgress, setMissionProgress] = useState(67);
  const [missionTime, setMissionTime] = useState("02:34:17");
  const teamName = "Cyber Phoenix";

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'calls':
        return <Calls />;
      case 'files':
        return <Files />;
      case 'databases':
        return (
          <div className="cyber-panel max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold neon-text mb-6">Databases Section</h2>
            <p className="text-muted-foreground">Раздел баз данных в разработке...</p>
          </div>
        );
      case 'tools':
        return (
          <div className="cyber-panel max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold neon-text mb-6">Tools Section</h2>
            <p className="text-muted-foreground">Раздел инструментов в разработке...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background relative overflow-hidden w-full flex">
        <AppHeader />
        {/* Matrix Background */}
        <div className="fixed inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/secret-agent-bg.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-card/85" />
        </div>

        {/* Cyber Background Effects */}
        <div className="fixed inset-0 opacity-10 z-1">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-cyber-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-cyber-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Sidebar */}
        <div className="relative z-10">
          <AppSidebar 
            onHintsClick={() => setShowHints(true)}
            onAISoldierClick={() => setShowAISoldier(true)}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col relative z-10">
          {/* Top HUD Bar */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-border/50 bg-background/95 backdrop-blur-lg relative z-10 mt-16">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="border border-border/50 hover:bg-muted/50" />
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                <Target className="h-3 w-3 mr-1" />
                {points} очков
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-accent" />
              <span className="text-accent font-mono text-lg">{missionTime}</span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex">
            {/* Left Panel - Agent Profile */}
            <div className="w-80 p-6 border-r border-border/50 bg-background/50 backdrop-blur-sm">
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-2 animate-cyber-glow">
                  <span className="text-secondary animate-cyber-glow">
                    ANTIFA
                  </span>
                </h1>
                <p className="text-sm text-muted-foreground">Secret Agency</p>
              </div>
              
              <AgentProfile teamName={teamName} />
            </div>

            {/* Right Panel - Main Content */}
            <div className="flex-1 p-6">
              {/* Navigation */}
              <div className="mb-6">
                <Navigation
                  activeSection={activeSection}
                  onSectionChange={setActiveSection}
                  onHintsClick={() => setShowHints(true)}
                  onAISoldierClick={() => setShowAISoldier(true)}
                />
              </div>

              {/* Content */}
              <div className="max-w-4xl">
                {renderContent()}
              </div>
            </div>
          </div>

          {/* Bottom HUD Bar */}
          <div className="h-16 flex items-center justify-between px-6 border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Прогресс миссии:</span>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                    style={{ width: `${missionProgress}%` }}
                  />
                </div>
                <span className="text-sm text-accent">{missionProgress}%</span>
              </div>
            </div>
            
            <Button
              variant="outline"
              onClick={() => navigate('/leaderboard')}
              className="border-accent text-accent hover:bg-accent/20"
            >
              <Trophy className="h-4 w-4 mr-2" />
              Рейтинг команд
            </Button>
          </div>
        </div>

        {/* Modals */}
        <HintsModal 
          open={showHints} 
          onOpenChange={setShowHints} 
        />
        <AISoldierModal 
          open={showAISoldier} 
          onOpenChange={setShowAISoldier} 
        />
      </div>
    </SidebarProvider>
  );
};

export default Index;