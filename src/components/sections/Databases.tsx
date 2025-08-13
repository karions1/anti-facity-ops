import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Database, 
  Search, 
  FileText, 
  Car, 
  AlertTriangle, 
  Phone, 
  CreditCard,
  Lock,
  User,
  Eye
} from 'lucide-react';

const Databases = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDatabase, setSelectedDatabase] = useState<string | null>(null);

  const databases = [
    {
      id: 'personal',
      name: 'Personal Files',
      icon: FileText,
      description: 'Личные файлы и документы',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'car',
      name: 'Car Register',
      icon: Car,
      description: 'База данных автомобилей',
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'bandit',
      name: 'Bandit List',
      icon: AlertTriangle,
      description: 'Список разыскиваемых',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-500/30'
    },
    {
      id: 'mobile',
      name: 'Mobile Calls & SMS',
      icon: Phone,
      description: 'История звонков и SMS',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'bank',
      name: 'Bank Transactions',
      icon: CreditCard,
      description: 'Банковские операции',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-500/30'
    }
  ];

  const personalFiles = [
    {
      id: 1,
      name: 'John Doe',
      type: 'private',
      classification: 'Секретно',
      lastAccess: '2024-01-15',
      files: 23
    },
    {
      id: 2,
      name: 'Alice Smith',
      type: 'individual',
      classification: 'Конфиденциально',
      lastAccess: '2024-01-12',
      files: 15
    },
    {
      id: 3,
      name: 'Robert Johnson',
      type: 'private',
      classification: 'Совершенно секретно',
      lastAccess: '2024-01-10',
      files: 31
    }
  ];

  const handleDatabaseSelect = (dbId: string) => {
    if (searchQuery.trim() === '') {
      return;
    }
    setSelectedDatabase(dbId);
  };

  const renderDatabaseContent = () => {
    if (!selectedDatabase) return null;

    switch (selectedDatabase) {
      case 'personal':
        return (
          <div className="space-y-4">
            <Tabs defaultValue="private" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="private">Приватные файлы</TabsTrigger>
                <TabsTrigger value="individual">Индивидуальные файлы</TabsTrigger>
              </TabsList>
              <TabsContent value="private" className="space-y-4">
                {personalFiles.filter(f => f.type === 'private').map((file) => (
                  <Card key={file.id} className="cyber-panel hover:border-primary/50 cursor-pointer transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <Lock className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{file.name}</h4>
                            <p className="text-sm text-muted-foreground">{file.files} файлов</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-1">{file.classification}</Badge>
                          <p className="text-xs text-muted-foreground">{file.lastAccess}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Открыть
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="individual" className="space-y-4">
                {personalFiles.filter(f => f.type === 'individual').map((file) => (
                  <Card key={file.id} className="cyber-panel hover:border-accent/50 cursor-pointer transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                            <User className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{file.name}</h4>
                            <p className="text-sm text-muted-foreground">{file.files} файлов</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="mb-1">{file.classification}</Badge>
                          <p className="text-xs text-muted-foreground">{file.lastAccess}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Открыть
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        );
      default:
        return (
          <div className="text-center py-8">
            <Database className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">База данных "{selectedDatabase}" в разработке...</p>
          </div>
        );
    }
  };

  return (
    <div className="cyber-panel max-w-4xl mx-auto animate-fade-in-up">
      <div className="flex items-center gap-3 mb-6">
        <Database className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold neon-text">Databases</h2>
      </div>

      <div className="mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Введите имя или название для поиска..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 cyber-input"
            />
          </div>
          <Button 
            onClick={() => setSelectedDatabase(null)}
            variant="outline"
            className="border-accent text-accent hover:bg-accent/20"
          >
            Очистить
          </Button>
        </div>
      </div>

      {!selectedDatabase ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {databases.map((db) => {
            const IconComponent = db.icon;
            return (
              <Card 
                key={db.id}
                className={`cyber-panel cursor-pointer transition-all hover:scale-105 ${db.borderColor} ${db.bgColor}`}
                onClick={() => handleDatabaseSelect(db.id)}
              >
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto mb-2">
                    <IconComponent className={`h-12 w-12 ${db.color}`} />
                  </div>
                  <CardTitle className="text-lg">{db.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">{db.description}</p>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className={`w-full ${db.color} border-current hover:bg-current/10`}
                    disabled={!searchQuery.trim()}
                  >
                    Поиск в базе
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedDatabase(null)}
              className="mb-4"
            >
              ← Назад к списку баз
            </Button>
            <h3 className="text-xl font-bold mb-2">
              Результаты поиска "{searchQuery}" в базе{' '}
              {databases.find(db => db.id === selectedDatabase)?.name}
            </h3>
          </div>
          {renderDatabaseContent()}
        </div>
      )}
    </div>
  );
};

export default Databases;