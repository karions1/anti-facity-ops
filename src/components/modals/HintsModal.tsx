import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { HelpCircle, Eye, Lock } from 'lucide-react';

interface HintsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const hints = [
  {
    id: 1,
    title: "Поиск ключевых документов",
    difficulty: "easy",
    hint: "Проверьте раздел Files - там может быть скрыта важная информация в архивных документах.",
    revealed: false
  },
  {
    id: 2,
    title: "Анализ телефонных звонков",
    difficulty: "medium",
    hint: "Обратите внимание на время звонков в разделе Calls. Последовательность может содержать код.",
    revealed: false
  },
  {
    id: 3,
    title: "Банковские транзакции",
    difficulty: "medium",
    hint: "В базе данных Bank Transactions ищите необычные суммы - они могут быть зашифрованными координатами.",
    revealed: false
  },
  {
    id: 4,
    title: "Расшифровка символов",
    difficulty: "hard",
    hint: "Используйте Symbol Decoder в разделе Tools. Некоторые изображения содержат QR-коды с дополнительной информацией.",
    revealed: false
  },
  {
    id: 5,
    title: "3D сканирование здания",
    difficulty: "hard",
    hint: "В 3D Building Scan ищите скрытые входы и вентиляционные шахты - они отмечены красным цветом.",
    revealed: false
  }
];

export const HintsModal = ({ open, onOpenChange }: HintsModalProps) => {
  const [revealedHints, setRevealedHints] = useState<number[]>([]);

  const revealHint = (hintId: number) => {
    setRevealedHints(prev => [...prev, hintId]);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-primary';
      case 'medium': return 'text-accent';
      case 'hard': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="cyber-panel max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-primary text-2xl">
            <HelpCircle className="h-8 w-8 animate-cyber-glow" />
            Mission Hints
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {hints.map((hint) => (
            <div key={hint.id} className="hud-element">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-foreground">{hint.title}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${getDifficultyColor(hint.difficulty)} bg-muted/30`}>
                    {hint.difficulty.toUpperCase()}
                  </span>
                  {revealedHints.includes(hint.id) ? (
                    <Eye className="h-4 w-4 text-primary" />
                  ) : (
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>

              {revealedHints.includes(hint.id) ? (
                <div className="text-sm text-muted-foreground bg-primary/10 p-3 rounded border border-primary/30">
                  {hint.hint}
                </div>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent/20"
                  onClick={() => revealHint(hint.id)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Открыть подсказку
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Подсказки раскрыты: {revealedHints.length} / {hints.length}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};