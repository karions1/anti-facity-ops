import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Search, 
  MapPin, 
  Hash, 
  Building,
  ExternalLink,
  Copy,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

const Tools = () => {
  const [show3DModal, setShow3DModal] = useState(false);
  const [showDecoderModal, setShowDecoderModal] = useState(false);
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  const tools = [
    {
      id: 'search',
      name: 'ADVANCED SEARCH ENGINE',
      icon: Search,
      description: 'Расширенный поисковый движок',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30',
      action: 'link',
      url: 'https://www.google.com/advanced_search'
    },
    {
      id: 'gps',
      name: 'GPS COORDINATES',
      icon: MapPin,
      description: 'Система GPS координат',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30',
      action: 'link',
      url: 'https://www.google.com/maps'
    },
    {
      id: 'decoder',
      name: 'SYMBOL DECODER',
      icon: Hash,
      description: 'Декодер символов и шифров',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30',
      action: 'modal'
    },
    {
      id: '3d-scan',
      name: '3D BUILDING SCAN',
      icon: Building,
      description: '3D сканирование зданий',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30',
      action: 'modal'
    }
  ];

  const decoderSymbols = [
    { symbol: '&#8364;', description: 'Euro Symbol', code: '&euro;' },
    { symbol: '&#8482;', description: 'Trademark', code: '&trade;' },
    { symbol: '&#169;', description: 'Copyright', code: '&copy;' },
    { symbol: '&#174;', description: 'Registered', code: '&reg;' },
    { symbol: '&#8721;', description: 'Sum Symbol', code: '&sum;' },
    { symbol: '&#8734;', description: 'Infinity', code: '&infin;' },
    { symbol: '&#945;', description: 'Alpha', code: '&alpha;' },
    { symbol: '&#946;', description: 'Beta', code: '&beta;' },
    { symbol: '&#947;', description: 'Gamma', code: '&gamma;' },
    { symbol: '&#948;', description: 'Delta', code: '&delta;' }
  ];

  const handleToolClick = (tool: typeof tools[0]) => {
    if (tool.action === 'link' && tool.url) {
      window.open(tool.url, '_blank');
      toast.success(`Переход на ${tool.name}`);
    } else if (tool.action === 'modal') {
      if (tool.id === 'decoder') {
        setShowDecoderModal(true);
      } else if (tool.id === '3d-scan') {
        setShow3DModal(true);
      }
    }
  };

  const copyToClipboard = (text: string, symbol: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSymbol(symbol);
    toast.success('Скопировано в буфер обмена');
    setTimeout(() => setCopiedSymbol(null), 2000);
  };

  return (
    <div className="cyber-panel max-w-4xl mx-auto animate-fade-in-up">
      <div className="flex items-center gap-3 mb-6">
        <Wrench className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold neon-text">Tools</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => {
          const IconComponent = tool.icon;
          return (
            <Card 
              key={tool.id}
              className={`cyber-panel cursor-pointer transition-all hover:scale-105 ${tool.borderColor} ${tool.bgColor}`}
              onClick={() => handleToolClick(tool)}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3">
                  <IconComponent className={`h-16 w-16 ${tool.color}`} />
                </div>
                <CardTitle className="text-xl mb-2">{tool.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`w-full ${tool.color} border-current hover:bg-current/10`}
                >
                  {tool.action === 'link' ? (
                    <>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Открыть
                    </>
                  ) : (
                    'Запустить'
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Symbol Decoder Modal */}
      <Dialog open={showDecoderModal} onOpenChange={setShowDecoderModal}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-background border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Hash className="h-6 w-6 text-purple-400" />
              Symbol Decoder
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Справочник по декодированию символов и HTML кодов
              </p>
              <Button
                variant="outline"
                onClick={() => window.open('https://www.w3schools.com/html/html_symbols.asp', '_blank')}
                className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Полный справочник HTML символов
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {decoderSymbols.map((item, index) => (
                <Card key={index} className="cyber-panel hover:border-purple-500/50 transition-all">
                  <CardContent className="p-4">
                    <div className="text-center space-y-3">
                      <div className="text-4xl font-mono" dangerouslySetInnerHTML={{ __html: item.symbol }} />
                      <h4 className="font-medium text-foreground">{item.description}</h4>
                      <div className="space-y-2">
                        <Badge variant="outline" className="font-mono text-xs">
                          {item.symbol}
                        </Badge>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(item.symbol, item.symbol)}
                            className="flex-1"
                          >
                            {copiedSymbol === item.symbol ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <Copy className="h-3 w-3 mr-1" />
                            )}
                            HTML
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => copyToClipboard(item.code, item.code)}
                            className="flex-1"
                          >
                            {copiedSymbol === item.code ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <Copy className="h-3 w-3 mr-1" />
                            )}
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* 3D Building Scan Modal */}
      <Dialog open={show3DModal} onOpenChange={setShow3DModal}>
        <DialogContent className="max-w-6xl max-h-[90vh] bg-background border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <Building className="h-6 w-6 text-red-400" />
              3D Building Scan
            </DialogTitle>
          </DialogHeader>
          <div className="h-[500px] bg-muted/20 rounded-lg flex items-center justify-center border border-border">
            <div className="text-center space-y-4">
              <Building className="h-24 w-24 text-red-400 mx-auto animate-pulse" />
              <h3 className="text-xl font-bold text-foreground">3D Сканер зданий</h3>
              <p className="text-muted-foreground max-w-md">
                Здесь будет отображаться 3D модель здания для сканирования. 
                Функциональность будет добавлена при импорте 3D компонентов.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                  Загрузить модель
                </Button>
                <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10">
                  Начать сканирование
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tools;