import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Play, 
  Users, 
  Shield, 
  Gamepad2, 
  MessageSquare,
  UserPlus,
  ExternalLink,
  Mail,
  Phone
} from 'lucide-react';

interface Player {
  id: number;
  name: string;
  contacts: Array<{
    type: 'telegram' | 'whatsapp' | 'viber' | 'discord' | 'facebook';
    value: string;
    url: string;
  }>;
  joinedAt: Date;
  preferredTime: string;
}

const Landing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showPlayerForm, setShowPlayerForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    whatsapp: '',
    viber: '',
    discord: '',
    facebook: '',
    preferredTime: '',
    notes: ''
  });

  const [players] = useState<Player[]>([
    {
      id: 1,
      name: "Agent Phoenix",
      contacts: [
        { type: 'telegram', value: '@agent_phoenix', url: 'https://t.me/agent_phoenix' },
        { type: 'discord', value: 'Phoenix#1234', url: 'https://discord.com/users/phoenix1234' }
      ],
      joinedAt: new Date('2024-01-15'),
      preferredTime: 'Вечером 20:00-24:00'
    },
    {
      id: 2,
      name: "Ghost Recon",
      contacts: [
        { type: 'whatsapp', value: '+7 900 123-45-67', url: 'https://wa.me/79001234567' },
        { type: 'telegram', value: '@ghost_recon', url: 'https://t.me/ghost_recon' }
      ],
      joinedAt: new Date('2024-01-10'),
      preferredTime: 'Выходные 15:00-22:00'
    },
    {
      id: 3,
      name: "Cyber Viper",
      contacts: [
        { type: 'discord', value: 'CyberViper#9876', url: 'https://discord.com/users/cyberviper9876' },
        { type: 'facebook', value: 'cyber.viper.agent', url: 'https://facebook.com/cyber.viper.agent' }
      ],
      joinedAt: new Date('2024-01-20'),
      preferredTime: 'Любое время'
    }
  ]);

  const handleJoinMission = () => {
    navigate('/login');
  };

  const handleBuyGame = () => {
    // Пустая ссылка - пользователь сам поставит
    window.open('#', '_blank');
  };

  const handleSubmitPlayerData = () => {
    if (!formData.name) {
      toast({
        title: "Ошибка",
        description: "Введите ваше имя агента",
        variant: "destructive"
      });
      return;
    }

    // Здесь будет логика сохранения данных
    toast({
      title: "Успешно!",
      description: "Ваши данные добавлены в базу агентов",
    });

    setFormData({
      name: '',
      telegram: '',
      whatsapp: '',
      viber: '',
      discord: '',
      facebook: '',
      preferredTime: '',
      notes: ''
    });
    setShowPlayerForm(false);
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case 'telegram': return '📱';
      case 'whatsapp': return '💬';
      case 'viber': return '💜';
      case 'discord': return '🎮';
      case 'facebook': return '📘';
      default: return '📞';
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Game Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-cyber-glow">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AEGIS
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-2">
              PROTOCOL
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Погрузитесь в мир киберпанка и тайных операций. Станьте элитным агентом и выполните миссию любой ценой.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={handleJoinMission}
              className="neon-button text-lg px-8 py-4 h-auto"
            >
              <Shield className="mr-2 h-5 w-5" />
              Join the Mission
            </Button>
            <Button 
              onClick={handleBuyGame}
              variant="outline"
              className="text-lg px-8 py-4 h-auto border-primary/50 hover:bg-primary/20"
            >
              <Gamepad2 className="mr-2 h-5 w-5" />
              Buy the Game
            </Button>
          </div>

          {/* Game Description */}
          <Card className="cyber-panel mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">О Игре</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-secondary">Особенности</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Интерактивная система миссий</li>
                    <li>• Доступ к секретным базам данных</li>
                    <li>• Продвинутые инструменты разведки</li>
                    <li>• Система рейтингов агентов</li>
                    <li>• Мультиплеер режим</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-secondary">Геймплей</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Расследование секретных файлов</li>
                    <li>• Взлом защищенных систем</li>
                    <li>• Координация с другими агентами</li>
                    <li>• Использование шпионских инструментов</li>
                    <li>• Выполнение тайных операций</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Game Video */}
          <Card className="cyber-panel mb-16">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Трейлер Игры</h3>
              <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Видео будет добавлено</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Player Matching Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary">Ищете напарников?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Оставьте свои контактные данные, чтобы другие агенты могли с вами связаться для совместных миссий.
            </p>
            
            <Dialog open={showPlayerForm} onOpenChange={setShowPlayerForm}>
              <DialogTrigger asChild>
                <Button className="neon-button">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Добавить контакты
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-primary">Регистрация агента</DialogTitle>
                  <DialogDescription>
                    Заполните форму, чтобы другие игроки могли найти вас
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя агента *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Введите ваш никнейм"
                      className="cyber-input"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telegram">Telegram</Label>
                      <Input
                        id="telegram"
                        value={formData.telegram}
                        onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                        placeholder="@username"
                        className="cyber-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="discord">Discord</Label>
                      <Input
                        id="discord"
                        value={formData.discord}
                        onChange={(e) => setFormData({...formData, discord: e.target.value})}
                        placeholder="Username#1234"
                        className="cyber-input"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="whatsapp">WhatsApp</Label>
                      <Input
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        placeholder="+7 900 123-45-67"
                        className="cyber-input"
                      />
                    </div>
                    <div>
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        value={formData.facebook}
                        onChange={(e) => setFormData({...formData, facebook: e.target.value})}
                        placeholder="username"
                        className="cyber-input"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="preferredTime">Предпочитаемое время игры</Label>
                    <Select onValueChange={(value) => setFormData({...formData, preferredTime: value})}>
                      <SelectTrigger className="cyber-input">
                        <SelectValue placeholder="Выберите время" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Утром 8:00-12:00</SelectItem>
                        <SelectItem value="afternoon">Днём 12:00-18:00</SelectItem>
                        <SelectItem value="evening">Вечером 18:00-24:00</SelectItem>
                        <SelectItem value="night">Ночью 00:00-8:00</SelectItem>
                        <SelectItem value="weekends">Только выходные</SelectItem>
                        <SelectItem value="anytime">Любое время</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={() => setShowPlayerForm(false)} className="flex-1">
                      Отмена
                    </Button>
                    <Button onClick={handleSubmitPlayerData} className="flex-1 neon-button">
                      Добавить
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Players Table */}
          <Card className="cyber-panel">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Users className="h-5 w-5 text-primary" />
                <h4 className="text-xl font-semibold text-primary">Активные агенты</h4>
              </div>
              
              <div className="grid gap-4">
                {players.map((player) => (
                  <Card key={player.id} className="bg-muted/20 border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
                            <Shield className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h5 className="font-semibold text-foreground">{player.name}</h5>
                            <p className="text-sm text-muted-foreground">{player.preferredTime}</p>
                            <p className="text-xs text-muted-foreground">
                              Присоединился: {player.joinedAt.toLocaleDateString('ru-RU')}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {player.contacts.map((contact, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="gap-2 border-primary/30 text-primary hover:bg-primary/20"
                              onClick={() => window.open(contact.url, '_blank')}
                            >
                              <span>{getContactIcon(contact.type)}</span>
                              <span className="text-xs">{contact.value}</span>
                              <ExternalLink className="h-3 w-3" />
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {players.length === 0 && (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Пока нет зарегистрированных агентов</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Landing;