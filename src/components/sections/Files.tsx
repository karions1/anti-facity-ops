import { useState } from 'react';
import { FileText, User, Building, Calendar, Shield, Eye, Lock, File, Video, Download, Play, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PersonFile {
  id: string;
  name: string;
  surname: string;
  birthDate: string;
  company: string;
  position: string;
  clearanceLevel: string;
  photo: string;
  status: 'active' | 'inactive' | 'classified';
  lastActivity: string;
  location: string;
  notes: string;
}

interface MediaFile {
  id: string;
  name: string;
  type: 'document' | 'video' | 'image';
  size: string;
  uploadDate: string;
  description: string;
  url: string;
  thumbnail?: string;
}

const privatFiles: PersonFile[] = [
  {
    id: 'p1',
    name: 'Алексей',
    surname: 'Петров',
    birthDate: '1985-03-15',
    company: 'ФСБ России',
    position: 'Старший оперативник',
    clearanceLevel: 'Совершенно секретно',
    photo: '/placeholder.svg',
    status: 'active',
    lastActivity: '2 часа назад',
    location: 'Москва, Россия',
    notes: 'Специализация: кибербезопасность, контрразведка'
  },
  {
    id: 'p2',
    name: 'Екатерина',
    surname: 'Смирнова',
    birthDate: '1990-07-22',
    company: 'СВР России',
    position: 'Аналитик',
    clearanceLevel: 'Секретно',
    photo: '/placeholder.svg',
    status: 'active',
    lastActivity: '1 день назад',
    location: 'Санкт-Петербург, Россия',
    notes: 'Специализация: OSINT, анализ данных'
  },
  {
    id: 'p3',
    name: 'Михаил',
    surname: 'Козлов',
    birthDate: '1978-12-03',
    company: 'ГРУ ГШ ВС РФ',
    position: 'Полковник',
    clearanceLevel: 'Совершенно секретно',
    photo: '/placeholder.svg',
    status: 'classified',
    lastActivity: 'Классифицировано',
    location: 'Классифицировано',
    notes: 'Специализация: глубокое проникновение'
  }
];

const individualFiles: PersonFile[] = [
  {
    id: 'i1',
    name: 'Джон',
    surname: 'Смит',
    birthDate: '1982-09-12',
    company: 'Umbrella Corporation',
    position: 'CEO',
    clearanceLevel: 'Публичный',
    photo: '/placeholder.svg',
    status: 'active',
    lastActivity: '5 минут назад',
    location: 'Нью-Йорк, США',
    notes: 'Подозреваемый в связях с теневыми организациями'
  },
  {
    id: 'i2',
    name: 'Анна',
    surname: 'Джонсон',
    birthDate: '1988-04-28',
    company: 'Tech Innovations Inc',
    position: 'Главный технолог',
    clearanceLevel: 'Публичный',
    photo: '/placeholder.svg',
    status: 'active',
    lastActivity: '30 минут назад',
    location: 'Сан-Франциско, США',
    notes: 'Разработка систем ИИ, потенциальная угроза'
  },
  {
    id: 'i3',
    name: 'Дмитрий',
    surname: 'Волков',
    birthDate: '1975-11-17',
    company: 'CyberSec Solutions',
    position: 'Основатель',
    clearanceLevel: 'Ограниченный',
    photo: '/placeholder.svg',
    status: 'inactive',
    lastActivity: '2 недели назад',
    location: 'Берлин, Германия',
    notes: 'Бывший агент, в настоящее время вне службы'
  }
];

const mediaFiles: MediaFile[] = [
  {
    id: 'f1',
    name: 'Секретный_протокол_операции_Феникс.pdf',
    type: 'document',
    size: '2.4 MB',
    uploadDate: '2024-01-15',
    description: 'Классифицированный документ по операции "Феникс"',
    url: '/documents/phoenix_protocol.pdf'
  },
  {
    id: 'f2',
    name: 'Запись_допроса_субъекта_Alpha-7.mp4',
    type: 'video',
    size: '145.8 MB',
    uploadDate: '2024-01-12',
    description: 'Видеозапись допроса подозреваемого Alpha-7',
    url: '/videos/interrogation_alpha7.mp4',
    thumbnail: '/thumbnails/interrogation_thumb.jpg'
  },
  {
    id: 'f3',
    name: 'Снимки_объекта_с_дрона.zip',
    type: 'image',
    size: '89.2 MB',
    uploadDate: '2024-01-10',
    description: 'Аэрофотосъемка целевого объекта',
    url: '/images/drone_footage.zip'
  },
  {
    id: 'f4',
    name: 'Финансовые_отчеты_Umbrella_Corp.xlsx',
    type: 'document',
    size: '5.7 MB',
    uploadDate: '2024-01-08',
    description: 'Анализ финансовых потоков Umbrella Corporation',
    url: '/documents/umbrella_finances.xlsx'
  },
  {
    id: 'f5',
    name: 'Видео_наблюдения_склад_B-7.mp4',
    type: 'video',
    size: '298.4 MB',
    uploadDate: '2024-01-05',
    description: 'Записи видеонаблюдения со склада B-7',
    url: '/videos/warehouse_surveillance.mp4',
    thumbnail: '/thumbnails/warehouse_thumb.jpg'
  },
  {
    id: 'f6',
    name: 'Биометрические_данные_агентов.pdf',
    type: 'document',
    size: '1.8 MB',
    uploadDate: '2024-01-03',
    description: 'Сводка биометрических данных активных агентов',
    url: '/documents/biometric_data.pdf'
  }
];

export const Files = () => {
  const [selectedPerson, setSelectedPerson] = useState<PersonFile | null>(null);
  const [selectedFile, setSelectedFile] = useState<MediaFile | null>(null);

  const getStatusBadge = (status: string) => {
    const variants = {
      active: { variant: 'default' as const, text: 'Активен', color: 'text-green-400' },
      inactive: { variant: 'secondary' as const, text: 'Неактивен', color: 'text-yellow-400' },
      classified: { variant: 'destructive' as const, text: 'Засекречен', color: 'text-red-400' }
    };
    
    const config = variants[status as keyof typeof variants];
    
    return (
      <Badge variant={config.variant} className={config.color}>
        {config.text}
      </Badge>
    );
  };

  const getClearanceBadge = (level: string) => {
    if (level.includes('Совершенно секретно')) {
      return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Совершенно секретно</Badge>;
    }
    if (level.includes('Секретно')) {
      return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Секретно</Badge>;
    }
    if (level.includes('Ограниченный')) {
      return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Ограниченный</Badge>;
    }
    return <Badge variant="outline">Публичный</Badge>;
  };

  const PersonCard = ({ person }: { person: PersonFile }) => (
    <Card className="bg-muted/20 border-border/50 hover:bg-muted/30 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12 border-2 border-primary/30">
              <AvatarImage src={person.photo} alt={`${person.name} ${person.surname}`} />
              <AvatarFallback className="bg-primary/20 text-primary">
                {person.name.charAt(0)}{person.surname.charAt(0)}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <h3 className="font-semibold text-foreground">{person.name} {person.surname}</h3>
              <p className="text-sm text-muted-foreground">{person.position}</p>
              <p className="text-xs text-muted-foreground">{person.company}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {getStatusBadge(person.status)}
            {getClearanceBadge(person.clearanceLevel)}
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="gap-2 border-primary/30 text-primary hover:bg-primary/20"
                  onClick={() => setSelectedPerson(person)}
                >
                  <Eye className="h-3 w-3" />
                  Открыть досье
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-background/95 backdrop-blur-lg border-border/50 max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Досье - {person.name} {person.surname}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20 border-2 border-primary/50">
                      <AvatarImage src={person.photo} alt={`${person.name} ${person.surname}`} />
                      <AvatarFallback className="bg-primary/20 text-primary text-lg">
                        {person.name.charAt(0)}{person.surname.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{person.name} {person.surname}</h3>
                      <p className="text-muted-foreground">{person.position}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {getStatusBadge(person.status)}
                        {getClearanceBadge(person.clearanceLevel)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Дата рождения
                      </label>
                      <p className="font-medium">{new Date(person.birthDate).toLocaleDateString('ru-RU')}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        Организация
                      </label>
                      <p className="font-medium">{person.company}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Местоположение</label>
                      <p className="font-medium">{person.location}</p>
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground">Последняя активность</label>
                      <p className="font-medium">{person.lastActivity}</p>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground">Дополнительная информация</label>
                    <div className="mt-2 p-3 rounded-lg bg-muted/20 border border-border/50">
                      <p className="text-sm">{person.notes}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'document':
        return <File className="h-5 w-5 text-blue-400" />;
      case 'video':
        return <Video className="h-5 w-5 text-red-400" />;
      case 'image':
        return <ImageIcon className="h-5 w-5 text-green-400" />;
      default:
        return <File className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const FileCard = ({ file }: { file: MediaFile }) => (
    <Card className="bg-muted/20 border-border/50 hover:bg-muted/30 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
              {getFileIcon(file.type)}
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-foreground truncate max-w-64">{file.name}</h3>
              <p className="text-sm text-muted-foreground">{file.description}</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-xs text-muted-foreground">{file.size}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(file.uploadDate).toLocaleDateString('ru-RU')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {file.type === 'video' && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="gap-2 border-primary/30 text-primary hover:bg-primary/20"
                  >
                    <Play className="h-3 w-3" />
                    Воспроизвести
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-background/95 backdrop-blur-lg border-border/50 max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5 text-primary" />
                      {file.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                    <video 
                      controls 
                      className="w-full h-full rounded-lg"
                      poster={file.thumbnail}
                    >
                      <source src={file.url} type="video/mp4" />
                      Ваш браузер не поддерживает видео.
                    </video>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {file.description}
                  </div>
                </DialogContent>
              </Dialog>
            )}
            
            {file.type === 'image' && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="gap-2 border-primary/30 text-primary hover:bg-primary/20"
                  >
                    <Eye className="h-3 w-3" />
                    Просмотр
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-background/95 backdrop-blur-lg border-border/50 max-w-4xl">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <ImageIcon className="h-5 w-5 text-primary" />
                      {file.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="bg-black rounded-lg p-4 flex items-center justify-center min-h-96">
                    <div className="text-muted-foreground">
                      Предварительный просмотр изображений
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {file.description}
                  </div>
                </DialogContent>
              </Dialog>
            )}

            <Button 
              variant="outline" 
              size="sm"
              className="gap-2 border-primary/30 text-primary hover:bg-primary/20"
              onClick={() => window.open(file.url, '_blank')}
            >
              <Download className="h-3 w-3" />
              Скачать
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="cyber-panel animate-fade-in-up">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold neon-text">Архив досье</h2>
      </div>

      <Tabs defaultValue="media" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-muted/20 border border-border/50">
          <TabsTrigger 
            value="media" 
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            Медиа файлы
          </TabsTrigger>
          <TabsTrigger 
            value="private" 
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary flex items-center gap-2"
          >
            <Lock className="h-4 w-4" />
            Приватные досье
          </TabsTrigger>
          <TabsTrigger 
            value="individual" 
            className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary flex items-center gap-2"
          >
            <User className="h-4 w-4" />
            Индивидуальные досье
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="media" className="space-y-3 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Архив документов, видео и изображений</span>
          </div>
          {mediaFiles.map((file) => (
            <FileCard key={file.id} file={file} />
          ))}
        </TabsContent>
        
        <TabsContent value="private" className="space-y-3 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-red-400" />
            <span className="text-sm text-red-400">Секретная информация - требуется повышенный уровень доступа</span>
          </div>
          {privatFiles.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </TabsContent>
        
        <TabsContent value="individual" className="space-y-3 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <User className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-blue-400">Публичная информация - стандартный уровень доступа</span>
          </div>
          {individualFiles.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};