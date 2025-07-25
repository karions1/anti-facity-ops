import { useState } from 'react';
import { HUD } from '@/components/HUD';
import { Navigation, Section } from '@/components/Navigation';
import { AgentProfile } from '@/components/AgentProfile';
import { Dashboard } from '@/components/sections/Dashboard';
import { HintsModal } from '@/components/modals/HintsModal';
import { AISoldierModal } from '@/components/modals/AISoldierModal';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('dashboard');
  const [showHints, setShowHints] = useState(false);
  const [showAISoldier, setShowAISoldier] = useState(false);
  const [points, setPoints] = useState(1250);
  const [missionProgress, setMissionProgress] = useState(67);
  const teamName = "Cyber Phoenix";

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'calls':
        return (
          <div className="cyber-panel max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold neon-text mb-6">Calls Section</h2>
            <p className="text-muted-foreground">Раздел звонков в разработке...</p>
          </div>
        );
      case 'files':
        return (
          <div className="cyber-panel max-w-2xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl font-bold neon-text mb-6">Files Section</h2>
            <p className="text-muted-foreground">Раздел файлов в разработке...</p>
          </div>
        );
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-cyber-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-cyber-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
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

      {/* HUD */}
      <HUD 
        points={points} 
        missionProgress={missionProgress} 
        teamName={teamName} 
      />

      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onHintsClick={() => setShowHints(true)}
        onAISoldierClick={() => setShowAISoldier(true)}
      />

      {/* Main Content */}
      <div className="pt-8 pb-8 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold mb-4 animate-cyber-glow">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ANTIFA
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">Secret Agency Operations Interface</p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Spacer */}
            <div className="hidden lg:block" />

            {/* Center Content */}
            <div className="space-y-8">
              <AgentProfile teamName={teamName} />
              <div className="mt-12">
                {renderContent()}
              </div>
            </div>

            {/* Right Spacer */}
            <div className="hidden lg:block" />
          </div>
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
  );
};

export default Index;