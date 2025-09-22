import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  Database, 
  FileText, 
  Car, 
  AlertTriangle, 
  Phone, 
  CreditCard,
  Lock,
  User,
  Eye,
  Shield,
  Users,
  Activity,
  Clock,
  MapPin,
  DollarSign,
  ArrowLeft,
  Plus,
  Building,
  UserPlus,
  Calendar,
  Briefcase,
  Gavel
} from 'lucide-react';

const Databases = () => {
  const [selectedDatabase, setSelectedDatabase] = useState<string | null>(null);
  const [createdProfiles, setCreatedProfiles] = useState<any[]>([]);
  const [showingInputs, setShowingInputs] = useState<{ type: string | null, firstName: string, lastName: string }>({
    type: null,
    firstName: '',
    lastName: ''
  });
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);

  const handleCreateProfile = (type: string) => {
    if (showingInputs.firstName.trim() && showingInputs.lastName.trim()) {
      const newProfile = {
        id: Date.now(),
        type,
        firstName: showingInputs.firstName,
        lastName: showingInputs.lastName,
        photo: type === 'private' ? '/agent-profile-1.jpg' : '/ceo-profile-1.jpg',
        details: {
          dateOfBirth: type === 'private' ? '1985-03-15' : '1970-08-22',
          placeOfBirth: type === 'private' ? 'Moscow, Russia' : 'London, UK',
          mobileNumber: type === 'private' ? '+7-495-123-4567' : '+44-20-7946-0958',
          passportNo: type === 'private' ? 'RF 12 34 567890' : 'UK 98 76 543210',
          workPlace: type === 'private' ? 'Tech Solutions Ltd.' : 'Global Corp Industries',
          criminalCases: type === 'private' ? 'Clean record' : 'Tax evasion investigation (2019)'
        }
      };
      setCreatedProfiles(prev => [...prev, newProfile]);
      setShowingInputs({ type: null, firstName: '', lastName: '' });
    }
  };

  const databases = [
    {
      id: 'personal',
      name: 'Personal Files',
      icon: FileText,
      description: 'Личные файлы и документы',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      records: 847,
      status: 'online'
    },
    {
      id: 'car',
      name: 'Vehicle Registry',
      icon: Car,
      description: 'База данных автомобилей',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      records: 15420,
      status: 'online'
    },
    {
      id: 'bandit',
      name: 'Wanted List',
      icon: AlertTriangle,
      description: 'Список разыскиваемых',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      records: 342,
      status: 'secure'
    },
    {
      id: 'mobile',
      name: 'Communications',
      icon: Phone,
      description: 'История звонков и SMS',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      records: 8934,
      status: 'monitored'
    },
    {
      id: 'bank',
      name: 'Financial Records',
      icon: CreditCard,
      description: 'Банковские операции',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      records: 23108,
      status: 'encrypted'
    },
    {
      id: 'government',
      name: 'Government DB',
      icon: Shield,
      description: 'Правительственные записи',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      records: 5621,
      status: 'classified'
    }
  ];

  // Sample data for different databases
  const personalFiles = [
    { id: 1, name: 'John Alexander Doe', age: 34, occupation: 'Software Engineer', location: 'San Francisco', security: 'Level 3', lastSeen: '2024-01-15 14:32' },
    { id: 2, name: 'Sarah Michelle Connor', age: 28, occupation: 'Cybersecurity Analyst', location: 'New York', security: 'Level 5', lastSeen: '2024-01-14 09:15' },
    { id: 3, name: 'Marcus Johnson Smith', age: 45, occupation: 'Financial Consultant', location: 'Chicago', security: 'Level 2', lastSeen: '2024-01-13 16:45' }
  ];

  const carRegistry = [
    { id: 1, plate: 'ABC-123', model: 'Tesla Model S', owner: 'John Doe', status: 'Clean', lastCheck: '2024-01-15' },
    { id: 2, plate: 'XYZ-789', model: 'BMW X5', owner: 'Sarah Connor', status: 'Flagged', lastCheck: '2024-01-14' },
    { id: 3, plate: 'DEF-456', model: 'Mercedes C-Class', owner: 'Marcus Smith', status: 'Clean', lastCheck: '2024-01-12' }
  ];

  const wantedList = [
    { id: 1, name: 'Viktor "Ghost" Petrov', crime: 'Кибертерроризм', danger: 'Extreme', bounty: '$500,000', location: 'Unknown' },
    { id: 2, name: 'Elena Rodriguez', crime: 'Корпоративный шпионаж', danger: 'High', bounty: '$250,000', location: 'Miami' },
    { id: 3, name: 'Chen Wei Lin', crime: 'Торговля данными', danger: 'Medium', bounty: '$100,000', location: 'Hong Kong' }
  ];

  const communications = [
    { id: 1, from: '+1-555-0123', to: '+1-555-0456', type: 'Call', duration: '5:23', time: '2024-01-15 14:30', status: 'Intercepted' },
    { id: 2, from: '+1-555-0789', to: '+1-555-0234', type: 'SMS', content: 'Meeting at 8PM', time: '2024-01-15 13:45', status: 'Decoded' },
    { id: 3, from: '+1-555-0345', to: '+1-555-0678', type: 'Call', duration: '12:45', time: '2024-01-15 12:15', status: 'Monitored' }
  ];

  const financialRecords = [
    { id: 1, account: '****-1234', amount: '$15,750', type: 'Transfer', recipient: 'Offshore Account', time: '2024-01-15 11:30', status: 'Suspicious' },
    { id: 2, account: '****-5678', amount: '$2,400', type: 'Withdrawal', location: 'ATM Downtown', time: '2024-01-15 10:15', status: 'Normal' },
    { id: 3, account: '****-9012', amount: '$125,000', type: 'Deposit', source: 'Unknown Entity', time: '2024-01-14 16:45', status: 'Flagged' }
  ];

  const governmentRecords = [
    { id: 1, subject: 'Project NEXUS', classification: 'TOP SECRET', department: 'NSA', accessLevel: 'Omega', lastAccess: '2024-01-15' },
    { id: 2, subject: 'Operation GHOST PROTOCOL', classification: 'CLASSIFIED', department: 'CIA', accessLevel: 'Alpha', lastAccess: '2024-01-14' },
    { id: 3, subject: 'QUANTUM Initiative', classification: 'SECRET', department: 'DoD', accessLevel: 'Beta', lastAccess: '2024-01-13' }
  ];

  const getDangerBadgeColor = (danger: string) => {
    switch (danger) {
      case 'Extreme': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'High': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-green-500/20 text-green-400 border-green-500/30';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'secure': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'monitored': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'encrypted': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'classified': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const renderDatabaseContent = () => {
    if (!selectedDatabase) return null;

    const dbInfo = databases.find(db => db.id === selectedDatabase);

    switch (selectedDatabase) {
      case 'personal':
        return (
          <div className="space-y-6">
            {/* Creation Interface */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Private Individual */}
              <Card className="cyber-panel border-blue-500/30 bg-blue-500/5">
                <CardContent className="p-6">
                  {showingInputs.type === 'private' ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <UserPlus className="h-5 w-5 text-blue-400" />
                        <h3 className="text-lg font-medium text-blue-400">Private Individual</h3>
                      </div>
                      <Input
                        placeholder="First Name"
                        value={showingInputs.firstName}
                        onChange={(e) => setShowingInputs(prev => ({ ...prev, firstName: e.target.value }))}
                        className="cyber-input"
                      />
                      <Input
                        placeholder="Last Name"
                        value={showingInputs.lastName}
                        onChange={(e) => setShowingInputs(prev => ({ ...prev, lastName: e.target.value }))}
                        className="cyber-input"
                      />
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleCreateProfile('private')}
                          className="flex-1 bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30"
                          disabled={!showingInputs.firstName.trim() || !showingInputs.lastName.trim()}
                        >
                          Create Profile
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setShowingInputs({ type: null, firstName: '', lastName: '' })}
                          className="border-muted-foreground/30"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                        <UserPlus className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-medium text-blue-400 mb-2">Private Individual</h3>
                      <p className="text-sm text-muted-foreground mb-4">Add civilian target profile</p>
                      <Button 
                        onClick={() => setShowingInputs({ type: 'private', firstName: '', lastName: '' })}
                        className="w-full bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Target
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* CEO Database */}
              <Card className="cyber-panel border-yellow-500/30 bg-yellow-500/5">
                <CardContent className="p-6">
                  {showingInputs.type === 'ceo' ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-4">
                        <Building className="h-5 w-5 text-yellow-400" />
                        <h3 className="text-lg font-medium text-yellow-400">CEO Database</h3>
                      </div>
                      <Input
                        placeholder="First Name"
                        value={showingInputs.firstName}
                        onChange={(e) => setShowingInputs(prev => ({ ...prev, firstName: e.target.value }))}
                        className="cyber-input"
                      />
                      <Input
                        placeholder="Last Name"
                        value={showingInputs.lastName}
                        onChange={(e) => setShowingInputs(prev => ({ ...prev, lastName: e.target.value }))}
                        className="cyber-input"
                      />
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => handleCreateProfile('ceo')}
                          className="flex-1 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30"
                          disabled={!showingInputs.firstName.trim() || !showingInputs.lastName.trim()}
                        >
                          Create Profile
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => setShowingInputs({ type: null, firstName: '', lastName: '' })}
                          className="border-muted-foreground/30"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                        <Building className="h-8 w-8 text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-medium text-yellow-400 mb-2">CEO Database</h3>
                      <p className="text-sm text-muted-foreground mb-4">Add corporate executive profile</p>
                      <Button 
                        onClick={() => setShowingInputs({ type: 'ceo', firstName: '', lastName: '' })}
                        className="w-full bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Executive
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Created Profiles */}
            {createdProfiles.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary mb-4">Active Profiles</h3>
                {createdProfiles.map((profile) => (
                  <Card 
                    key={profile.id} 
                    className={`cyber-panel hover:border-primary/50 cursor-pointer transition-all ${
                      profile.type === 'private' ? 'border-blue-500/30 bg-blue-500/5' : 'border-yellow-500/30 bg-yellow-500/5'
                    }`}
                    onClick={() => setSelectedProfile(profile)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full ${
                          profile.type === 'private' ? 'bg-blue-500/20' : 'bg-yellow-500/20'
                        } flex items-center justify-center overflow-hidden`}>
                          {profile.type === 'private' ? 
                            <User className={`h-8 w-8 ${profile.type === 'private' ? 'text-blue-400' : 'text-yellow-400'}`} /> :
                            <Building className={`h-8 w-8 ${profile.type === 'private' ? 'text-blue-400' : 'text-yellow-400'}`} />
                          }
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground text-xl">
                            {profile.firstName} {profile.lastName}
                          </h4>
                          <p className={`text-sm ${profile.type === 'private' ? 'text-blue-400' : 'text-yellow-400'}`}>
                            {profile.type === 'private' ? 'Private Individual' : 'Corporate Executive'}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-xs text-green-400">Profile Active</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          View Dossier
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Default profiles */}
            {personalFiles.map((person) => (
              <Card key={person.id} className="cyber-panel hover:border-primary/50 cursor-pointer transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-lg">{person.name}</h4>
                        <p className="text-sm text-muted-foreground">{person.occupation} • {person.location}</p>
                        <p className="text-xs text-muted-foreground mt-1">Age: {person.age} • Last seen: {person.lastSeen}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={`mb-2 ${person.security === 'Level 5' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-green-500/20 text-green-400 border-green-500/30'}`}>
                        {person.security}
                      </Badge>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'car':
        return (
          <div className="space-y-4">
            {carRegistry.map((car) => (
              <Card key={car.id} className="cyber-panel hover:border-green-500/50 cursor-pointer transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Car className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-lg">{car.plate}</h4>
                        <p className="text-sm text-muted-foreground">{car.model}</p>
                        <p className="text-xs text-muted-foreground mt-1">Owner: {car.owner} • Last check: {car.lastCheck}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={`mb-2 ${car.status === 'Flagged' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-green-500/20 text-green-400 border-green-500/30'}`}>
                        {car.status}
                      </Badge>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'bandit':
        return (
          <div className="space-y-4">
            {wantedList.map((criminal) => (
              <Card key={criminal.id} className="cyber-panel hover:border-red-500/50 cursor-pointer transition-all bg-red-500/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-lg">{criminal.name}</h4>
                        <p className="text-sm text-muted-foreground">{criminal.crime}</p>
                        <p className="text-xs text-muted-foreground mt-1">Location: {criminal.location} • Bounty: {criminal.bounty}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={`mb-2 ${getDangerBadgeColor(criminal.danger)}`}>
                        {criminal.danger} Risk
                      </Badge>
                      <Button size="sm" variant="outline" className="flex items-center gap-2 border-red-500/30 text-red-400 hover:bg-red-500/10">
                        <Shield className="h-4 w-4" />
                        Case File
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'mobile':
        return (
          <div className="space-y-4">
            {communications.map((comm) => (
              <Card key={comm.id} className="cyber-panel hover:border-purple-500/50 cursor-pointer transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Phone className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-lg">{comm.from} → {comm.to}</h4>
                        <p className="text-sm text-muted-foreground">{comm.type} {comm.duration && `• ${comm.duration}`}</p>
                        <p className="text-xs text-muted-foreground mt-1">{comm.time} {comm.content && `• "${comm.content}"`}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-2 bg-purple-500/20 text-purple-400 border-purple-500/30">
                        {comm.status}
                      </Badge>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Activity className="h-4 w-4" />
                        Analyze
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'bank':
        return (
          <div className="space-y-4">
            {financialRecords.map((record) => (
              <Card key={record.id} className="cyber-panel hover:border-yellow-500/50 cursor-pointer transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <DollarSign className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-lg">{record.amount} • {record.type}</h4>
                        <p className="text-sm text-muted-foreground">{record.account} • {record.recipient || record.location || record.source}</p>
                        <p className="text-xs text-muted-foreground mt-1">{record.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={`mb-2 ${record.status === 'Suspicious' || record.status === 'Flagged' ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-green-500/20 text-green-400 border-green-500/30'}`}>
                        {record.status}
                      </Badge>
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4" />
                        Trace
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'government':
        return (
          <div className="space-y-4">
            {governmentRecords.map((record) => (
              <Card key={record.id} className="cyber-panel hover:border-cyan-500/50 cursor-pointer transition-all bg-cyan-500/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-lg">{record.subject}</h4>
                        <p className="text-sm text-muted-foreground">{record.department} • Access Level: {record.accessLevel}</p>
                        <p className="text-xs text-muted-foreground mt-1">Last accessed: {record.lastAccess}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-2 bg-red-500/20 text-red-400 border-red-500/30">
                        {record.classification}
                      </Badge>
                      <Button size="sm" variant="outline" className="flex items-center gap-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                        <Lock className="h-4 w-4" />
                        Decrypt
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <Database className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">База данных недоступна</p>
            <p className="text-sm text-muted-foreground mt-2">Требуется дополнительная авторизация</p>
          </div>
        );
    }
  };

  return (
    <div className="cyber-panel max-w-7xl mx-auto animate-fade-in-up">
      <div className="flex items-center gap-3 mb-8">
        <Database className="h-8 w-8 text-primary" />
        <h2 className="text-3xl font-bold neon-text">Aegis Intelligence Database</h2>
      </div>

      {!selectedDatabase ? (
        <>
          <div className="mb-8 text-center">
            <p className="text-muted-foreground text-lg">Secure Access to Classified Information Networks</p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-400">System Online</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary">Secure Connection</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {databases.map((db) => {
              const IconComponent = db.icon;
              return (
                <Card 
                  key={db.id}
                  className={`cyber-panel cursor-pointer transition-all hover:scale-105 group ${db.borderColor} ${db.bgColor}`}
                  onClick={() => setSelectedDatabase(db.id)}
                >
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-4 relative">
                      <div className={`w-16 h-16 rounded-full ${db.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-8 w-8 ${db.color}`} />
                      </div>
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getStatusBadgeColor(db.status).split(' ')[0]} border-2 border-background`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{db.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-3">{db.description}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Records:</span>
                      <span className={db.color}>{db.records.toLocaleString()}</span>
                    </div>
                    <Badge className={`w-full justify-center ${getStatusBadgeColor(db.status)}`}>
                      {db.status.toUpperCase()}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className={`w-full ${db.color} border-current hover:bg-current/10 group-hover:glow-effect`}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Access Database
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={() => setSelectedDatabase(null)}
              className="mb-4 hover:bg-primary/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Database Selection
            </Button>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {databases.find(db => db.id === selectedDatabase)?.name}
                </h3>
                <p className="text-muted-foreground">
                  {databases.find(db => db.id === selectedDatabase)?.description}
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">Live Access</span>
                </div>
                <Badge className={getStatusBadgeColor(databases.find(db => db.id === selectedDatabase)?.status || '')}>
                  {databases.find(db => db.id === selectedDatabase)?.status?.toUpperCase()}
                </Badge>
              </div>
            </div>
          </div>
          {renderDatabaseContent()}
        </div>
      )}

      {/* Profile Detail Dialog */}
      <Dialog open={selectedProfile !== null} onOpenChange={() => setSelectedProfile(null)}>
        <DialogContent className="max-w-4xl cyber-panel bg-background/95 backdrop-blur-sm border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold neon-text flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              Target Dossier - Classification: {selectedProfile?.type === 'private' ? 'CONFIDENTIAL' : 'TOP SECRET'}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProfile && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              {/* Photo Section */}
              <div className="lg:col-span-1">
                <div className="cyber-panel p-6 h-fit">
                  <div className="aspect-[3/4] bg-gradient-to-b from-primary/20 to-background rounded-lg mb-4 flex items-center justify-center border border-primary/30">
                    {selectedProfile.type === 'private' ? 
                      <User className="h-24 w-24 text-primary" /> :
                      <Building className="h-24 w-24 text-primary" />
                    }
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {selectedProfile.firstName} {selectedProfile.lastName}
                    </h3>
                    <Badge className={`${
                      selectedProfile.type === 'private' 
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    }`}>
                      {selectedProfile.type === 'private' ? 'Private Individual' : 'Corporate Executive'}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="lg:col-span-2">
                <div className="cyber-panel p-6">
                  <h4 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Personal Information
                  </h4>
                  
                  <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="cyber-panel p-4 bg-muted/10">
                        <div className="flex items-center gap-2 mb-2">
                          <User className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">First Name:</span>
                        </div>
                        <p className="text-foreground font-mono">{selectedProfile.firstName}</p>
                      </div>
                      
                      <div className="cyber-panel p-4 bg-muted/10">
                        <div className="flex items-center gap-2 mb-2">
                          <User className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Last Name:</span>
                        </div>
                        <p className="text-foreground font-mono">{selectedProfile.lastName}</p>
                      </div>
                      
                      <div className="cyber-panel p-4 bg-muted/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Date of Birth:</span>
                        </div>
                        <p className="text-foreground font-mono">{selectedProfile.details.dateOfBirth}</p>
                      </div>
                      
                      <div className="cyber-panel p-4 bg-muted/10">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Place of Birth:</span>
                        </div>
                        <p className="text-foreground font-mono">{selectedProfile.details.placeOfBirth}</p>
                      </div>
                      
                      <div className="cyber-panel p-4 bg-muted/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Phone className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Mobile Number:</span>
                        </div>
                        <p className="text-foreground font-mono">{selectedProfile.details.mobileNumber}</p>
                      </div>
                      
                      <div className="cyber-panel p-4 bg-muted/10">
                        <div className="flex items-center gap-2 mb-2">
                          <CreditCard className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Passport No.:</span>
                        </div>
                        <p className="text-foreground font-mono">{selectedProfile.details.passportNo}</p>
                      </div>
                      
                      <div className="cyber-panel p-4 bg-muted/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Work Place:</span>
                        </div>
                        <p className="text-foreground font-mono">{selectedProfile.details.workPlace}</p>
                      </div>
                      
                      <div className="cyber-panel p-4 bg-muted/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Gavel className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Criminal Cases:</span>
                        </div>
                        <p className={`font-mono ${
                          selectedProfile.details.criminalCases === 'Clean record' 
                            ? 'text-green-400' 
                            : 'text-red-400'
                        }`}>
                          {selectedProfile.details.criminalCases}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 border border-red-500/30 bg-red-500/5 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-red-400" />
                        <span className="text-sm font-medium text-red-400">Security Notice:</span>
                      </div>
                      <p className="text-sm text-red-400">
                        This information is classified. Unauthorized access or distribution is strictly prohibited.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Databases;