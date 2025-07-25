import { HelpCircle, Bot, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

interface AppSidebarProps {
  onHintsClick: () => void;
  onAISoldierClick: () => void;
}

export function AppSidebar({ onHintsClick, onAISoldierClick }: AppSidebarProps) {

  const utilityItems = [
    { 
      id: 'hints',
      label: 'Hints', 
      icon: HelpCircle, 
      onClick: onHintsClick,
      className: 'border-accent text-accent hover:bg-accent/20'
    },
    { 
      id: 'ai-soldier',
      label: 'AI Soldier', 
      icon: Bot, 
      onClick: onAISoldierClick,
      className: 'border-primary text-primary hover:bg-primary/20'
    },
  ];

  return (
    <Sidebar className="w-64" collapsible="icon">
      <SidebarContent className="bg-background/95 backdrop-blur-lg border-r border-border/50">
        <SidebarGroup>
          <SidebarGroupLabel className="text-accent font-semibold">
            Operations
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {utilityItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start gap-3 ${item.className}`}
                      onClick={item.onClick}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 ml-auto" />
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}