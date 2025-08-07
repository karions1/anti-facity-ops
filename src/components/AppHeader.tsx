import { useState } from 'react';
import { Volume2, VolumeX, LogOut, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

export const AppHeader = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [language, setLanguage] = useState('ru');
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleSoundToggle = () => {
    setSoundEnabled(!soundEnabled);
    toast({
      title: soundEnabled ? "Звук отключен" : "Звук включен",
      description: soundEnabled ? "Аудио уведомления деактивированы" : "Аудио уведомления активированы",
    });
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    toast({
      title: "Язык изменен",
      description: value === 'ru' ? "Установлен русский язык" : "English language set",
    });
  };

  const handleExit = () => {
    if (location.pathname === '/dashboard') {
      navigate('/');
    } else {
      // Close application or return to login
      toast({
        title: "Выход из системы",
        description: "Сессия завершена",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="flex items-center justify-end h-full px-6 gap-3">
        {/* Language Selector */}
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-20 h-8 cyber-input border-primary/30 bg-background/50">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background/95 backdrop-blur-md border-primary/30">
              <SelectItem value="ru">RU</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sound Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleSoundToggle}
          className="h-8 w-8 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          {soundEnabled ? (
            <Volume2 className="h-4 w-4" />
          ) : (
            <VolumeX className="h-4 w-4" />
          )}
        </Button>

        {/* Exit Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleExit}
          className="h-8 px-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-300 gap-2"
        >
          <LogOut className="h-4 w-4" />
          <span className="text-xs font-medium">EXIT</span>
        </Button>
      </div>
    </div>
  );
};