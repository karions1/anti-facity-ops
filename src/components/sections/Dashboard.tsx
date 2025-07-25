import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send, Lock, Target, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Dashboard = () => {
  const [formData, setFormData] = useState({
    code: '',
    objectName: '',
    mission: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mission Data Transmitted",
      description: "Данные успешно отправлены в центральную базу ANTIFA.",
      duration: 3000,
    });
    setFormData({ code: '', objectName: '', mission: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="cyber-panel max-w-2xl mx-auto animate-fade-in-up">
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-8 w-8 text-primary animate-cyber-glow" />
        <h2 className="text-3xl font-bold neon-text">Mission Control Dashboard</h2>
      </div>

      <div className="grid gap-6">
        {/* Status Indicators */}
        <div className="grid grid-cols-3 gap-4">
          <div className="hud-element text-center">
            <Lock className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Security</div>
            <div className="font-bold text-primary">SECURED</div>
          </div>
          <div className="hud-element text-center">
            <Target className="h-6 w-6 text-accent mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Target</div>
            <div className="font-bold text-accent">ACQUIRED</div>
          </div>
          <div className="hud-element text-center">
            <AlertTriangle className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-sm text-muted-foreground">Alert Level</div>
            <div className="font-bold text-yellow-500">MEDIUM</div>
          </div>
        </div>

        {/* Mission Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="code" className="text-primary font-medium">
                Секретный код доступа
              </Label>
              <Input
                id="code"
                type="password"
                placeholder="Введите код..."
                className="cyber-input font-mono"
                value={formData.code}
                onChange={(e) => handleInputChange('code', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="objectName" className="text-accent font-medium">
                Имя объекта операции
              </Label>
              <Input
                id="objectName"
                placeholder="Кодовое имя цели..."
                className="cyber-input"
                value={formData.objectName}
                onChange={(e) => handleInputChange('objectName', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="mission" className="text-foreground font-medium">
                Описание миссии
              </Label>
              <Input
                id="mission"
                placeholder="Детали операции..."
                className="cyber-input"
                value={formData.mission}
                onChange={(e) => handleInputChange('mission', e.target.value)}
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full neon-button text-lg py-6"
            disabled={!formData.code || !formData.objectName || !formData.mission}
          >
            <Send className="h-5 w-5 mr-2" />
            Отправить данные
          </Button>
        </form>

        {/* Mission Brief */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 border border-primary/30">
          <h3 className="text-xl font-bold mb-4 text-primary">Текущая миссия</h3>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              <span className="text-accent font-semibold">Объект:</span> Инфильтрация корпоративной сети
            </p>
            <p className="text-muted-foreground">
              <span className="text-accent font-semibold">Статус:</span> В процессе выполнения
            </p>
            <p className="text-muted-foreground">
              <span className="text-accent font-semibold">Приоритет:</span> Высокий
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};