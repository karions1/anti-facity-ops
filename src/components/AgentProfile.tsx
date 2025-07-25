import agentPhoto from '@/assets/agent-alison-floyd.jpg';
import { Shield, Star, Zap } from 'lucide-react';

interface AgentProfileProps {
  teamName: string;
}

export const AgentProfile = ({ teamName }: AgentProfileProps) => {
  return (
    <div className="cyber-panel text-center max-w-md mx-auto animate-fade-in-up">
      {/* Agent Photo */}
      <div className="relative mb-6">
        <div className="relative w-48 h-60 mx-auto rounded-lg overflow-hidden border-2 border-primary glow-effect">
          <img 
            src={agentPhoto} 
            alt="Agent Alison Floyd"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-cyber-pulse">
          <Shield className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>

      {/* Agent Info */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold neon-text animate-cyber-glow">
          Agent Alison Floyd
        </h2>
        
        <div className="bg-muted/30 rounded-lg p-4 border border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <Zap className="h-6 w-6 text-accent mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Status</div>
              <div className="font-bold text-accent">Active</div>
            </div>
            <div>
              <Star className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Rank</div>
              <div className="font-bold text-primary">Elite</div>
            </div>
            <div>
              <Shield className="h-6 w-6 text-foreground mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Clearance</div>
              <div className="font-bold text-foreground">Level 9</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg p-4 border border-primary/30">
          <h3 className="text-lg font-bold mb-2 text-primary">Current Team</h3>
          <p className="text-xl font-mono neon-text">{teamName}</p>
        </div>

        <div className="text-sm text-muted-foreground bg-muted/20 rounded p-3">
          <p className="italic">
            "Специализируется на киберразведке и инфильтрации. 
            Многолетний опыт работы в секретных операциях."
          </p>
        </div>
      </div>
    </div>
  );
};