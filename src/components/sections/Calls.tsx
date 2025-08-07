import { useState } from 'react';
import { Phone, PhoneCall, Clock, Play, Eye, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface CallRecord {
  id: string;
  contact: string;
  type: 'incoming' | 'outgoing' | 'missed';
  duration: string;
  timestamp: string;
  status: 'completed' | 'missed' | 'declined';
  recording?: string;
}

const mockCalls: CallRecord[] = [
  {
    id: '1',
    contact: 'Agent Smith',
    type: 'incoming',
    duration: '05:42',
    timestamp: '14:23 - Today',
    status: 'completed',
    recording: 'Recording available'
  },
  {
    id: '2',
    contact: 'Director Johnson',
    type: 'outgoing',
    duration: '12:15',
    timestamp: '09:45 - Today',
    status: 'completed',
    recording: 'Recording available'
  },
  {
    id: '3',
    contact: 'Unknown Number',
    type: 'missed',
    duration: '00:00',
    timestamp: '23:14 - Yesterday',
    status: 'missed'
  },
  {
    id: '4',
    contact: 'Agent Parker',
    type: 'incoming',
    duration: '08:33',
    timestamp: '16:22 - Yesterday',
    status: 'completed',
    recording: 'Recording available'
  },
  {
    id: '5',
    contact: 'HQ Communications',
    type: 'outgoing',
    duration: '03:17',
    timestamp: '11:08 - Yesterday',
    status: 'completed',
    recording: 'Recording available'
  }
];

export const Calls = () => {
  const [selectedCall, setSelectedCall] = useState<CallRecord | null>(null);

  const getCallIcon = (type: string, status: string) => {
    if (status === 'missed') return <Phone className="h-4 w-4 text-destructive" />;
    if (type === 'incoming') return <PhoneCall className="h-4 w-4 text-accent rotate-180" />;
    return <PhoneCall className="h-4 w-4 text-primary" />;
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: 'default',
      missed: 'destructive',
      declined: 'secondary'
    } as const;
    
    return (
      <Badge variant={variants[status as keyof typeof variants]}>
        {status === 'completed' ? 'Завершен' : status === 'missed' ? 'Пропущен' : 'Отклонен'}
      </Badge>
    );
  };

  return (
    <div className="cyber-panel animate-fade-in-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold neon-text">Журнал вызовов</h2>
      </div>

      <div className="space-y-3">
        {mockCalls.map((call) => (
          <Card key={call.id} className="bg-muted/20 border-border/50 hover:bg-muted/30 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getCallIcon(call.type, call.status)}
                    <div className="p-2 rounded-full bg-muted/50">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground">{call.contact}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {call.timestamp}
                      </span>
                      {call.duration !== '00:00' && (
                        <span>Длительность: {call.duration}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {getStatusBadge(call.status)}
                  
                  {call.recording && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="gap-2 border-primary/30 text-primary hover:bg-primary/20"
                          onClick={() => setSelectedCall(call)}
                        >
                          <Eye className="h-3 w-3" />
                          Просмотр
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-background/95 backdrop-blur-lg border-border/50">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-primary" />
                            Детали вызова - {call.contact}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm text-muted-foreground">Контакт</label>
                              <p className="font-medium">{call.contact}</p>
                            </div>
                            <div>
                              <label className="text-sm text-muted-foreground">Тип</label>
                              <p className="font-medium capitalize">
                                {call.type === 'incoming' ? 'Входящий' : call.type === 'outgoing' ? 'Исходящий' : 'Пропущенный'}
                              </p>
                            </div>
                            <div>
                              <label className="text-sm text-muted-foreground">Время</label>
                              <p className="font-medium">{call.timestamp}</p>
                            </div>
                            <div>
                              <label className="text-sm text-muted-foreground">Длительность</label>
                              <p className="font-medium">{call.duration}</p>
                            </div>
                          </div>
                          
                          {call.recording && (
                            <div className="p-4 rounded-lg bg-muted/20 border border-border/50">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium">Запись разговора</span>
                                <Badge variant="secondary">Доступна</Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button size="sm" className="gap-2">
                                  <Play className="h-3 w-3" />
                                  Воспроизвести
                                </Button>
                                <span className="text-xs text-muted-foreground">
                                  Качество: HD | Размер: 2.3MB
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};