import { useState, useRef, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Send, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

interface AISoldierModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const aiResponses = [
  "Анализирую полученные данные. Рекомендую проверить раздел Databases для получения дополнительной информации.",
  "Обнаружена подозрительная активность в банковских транзакциях. Требуется детальный анализ.",
  "Система безопасности показывает зелёный статус. Можете продолжать операцию.",
  "Рекомендую использовать Symbol Decoder для расшифровки найденных символов.",
  "Внимание: обнаружены аномалии в телефонных звонках. Проверьте временные метки.",
  "GPS координаты указывают на секретное местоположение. Активируйте режим скрытности.",
  "3D сканирование здания завершено. Найдены альтернативные точки входа."
];

export const AISoldierModal = ({ open, onOpenChange }: AISoldierModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Добро пожаловать, агент. Я ваш персональный ИИ-помощник. Готов оказать поддержку в выполнении миссии.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="cyber-panel max-w-2xl h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-primary text-2xl">
            <Bot className="h-8 w-8 animate-cyber-glow" />
            AI Soldier Assistant
          </DialogTitle>
        </DialogHeader>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground border border-border'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {message.sender === 'ai' ? (
                    <Bot className="h-4 w-4 text-accent" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                  <span className="text-xs opacity-70">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex gap-2 pt-4 border-t border-border">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Введите ваш вопрос..."
            className="cyber-input flex-1"
          />
          <Button
            onClick={sendMessage}
            className="neon-button"
            disabled={!inputValue.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};