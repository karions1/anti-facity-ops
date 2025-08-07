import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import aegisLogo from '@/assets/aegis-logo.png';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [accessCode, setAccessCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim()) {
      toast({
        title: "Доступ разрешен",
        description: "Добро пожаловать в Aegis Protocol",
      });
      navigate('/dashboard');
    } else {
      toast({
        title: "Ошибка доступа",
        description: "Введите действительный код доступа",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden w-full flex items-center justify-center">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/secret-agent-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-card/90" />
      </div>

      {/* Cyber Background Effects */}
      <div className="fixed inset-0 opacity-20 z-1">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-cyber-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-cyber-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-auto p-8">
        <div className="cyber-panel text-center space-y-8">
          {/* Logo and Title */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <img 
                src={aegisLogo} 
                alt="Aegis Protocol Logo" 
                className="w-24 h-24 glow-effect"
              />
            </div>
            <h1 className="text-4xl font-bold animate-cyber-glow">
              <span className="neon-text">AEGIS PROTOCOL</span>
            </h1>
          </div>

          {/* Welcome Message */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-muted-foreground">
              Welcome to Mission
            </h2>

            {/* Access Code Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="accessCode" className="text-left block">
                  Код доступа
                </Label>
                <Input
                  id="accessCode"
                  type="password"
                  placeholder="Введите секретный код"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="cyber-input text-center text-lg tracking-widest"
                  autoFocus
                />
              </div>

              <Button 
                type="submit" 
                className="w-full neon-button text-lg h-12"
                disabled={!accessCode.trim()}
              >
                <Shield className="h-5 w-5 mr-2" />
                ENTER
              </Button>
            </form>
          </div>

          {/* Security Notice */}
          <div className="text-xs text-muted-foreground/70 pt-4 border-t border-border/30">
            <p>Система защищена протоколом Aegis</p>
            <p>Несанкционированный доступ запрещен</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;