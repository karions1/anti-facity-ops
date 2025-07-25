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
    <div className="flex gap-2 flex-wrap">
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeSection === section.id;
        
        return (
          <Button
            key={section.id}
            variant={isActive ? "default" : "outline"}
            className={`gap-2 ${
              isActive 
                ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground animate-cyber-pulse' 
                : 'hover:bg-muted/50 hover:text-primary border-muted'
            }`}
            onClick={() => onSectionChange(section.id)}
          >
            <Icon className="h-4 w-4" />
            <span className="font-medium">{section.label}</span>
            {isActive && <ChevronRight className="h-4 w-4" />}
          </Button>
        );
      })}
    </div>
  );
};