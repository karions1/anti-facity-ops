import { useState } from 'react';
import { 
  Monitor, 
  Phone, 
  FileText, 
  Database, 
  Wrench,
  ChevronRight,
  HelpCircle,
  Bot
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Section = 'dashboard' | 'calls' | 'files' | 'databases' | 'tools';

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  onHintsClick: () => void;
  onAISoldierClick: () => void;
}

export const Navigation = ({ 
  activeSection, 
  onSectionChange, 
  onHintsClick, 
  onAISoldierClick 
}: NavigationProps) => {
  const sections = [
    { id: 'dashboard' as Section, label: 'Dashboard', icon: Monitor },
    { id: 'calls' as Section, label: 'Calls', icon: Phone },
    { id: 'files' as Section, label: 'Files', icon: FileText },
    { id: 'databases' as Section, label: 'Databases', icon: Database },
    { id: 'tools' as Section, label: 'Tools', icon: Wrench },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 space-y-4 z-40">
      {/* Main Navigation */}
      <div className="cyber-panel space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <Button
              key={section.id}
              variant={isActive ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                isActive 
                  ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground animate-cyber-pulse' 
                  : 'hover:bg-muted/50 hover:text-primary'
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{section.label}</span>
              {isActive && <ChevronRight className="h-4 w-4 ml-auto" />}
            </Button>
          );
        })}
      </div>

      {/* Utility Buttons */}
      <div className="space-y-2">
        <Button
          variant="outline"
          className="w-full justify-start gap-3 border-accent text-accent hover:bg-accent/20"
          onClick={onHintsClick}
        >
          <HelpCircle className="h-5 w-5" />
          <span>Hints</span>
        </Button>
        
        <Button
          variant="outline"
          className="w-full justify-start gap-3 border-primary text-primary hover:bg-primary/20"
          onClick={onAISoldierClick}
        >
          <Bot className="h-5 w-5" />
          <span>AI Soldier</span>
        </Button>
      </div>
    </div>
  );
};