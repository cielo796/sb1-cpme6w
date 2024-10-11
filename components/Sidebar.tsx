"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Users, UserPlus, Clipboard, Utensils, Activity, Calendar, 
  Truck, PhoneCall, DollarSign, MessageSquare, BarChart, Settings
} from 'lucide-react';

const sidebarItems = [
  { name: 'Dashboard', href: '/', icon: BarChart },
  { name: 'User Management', href: '/users', icon: Users },
  { name: 'Admission Management', href: '/admission', icon: UserPlus },
  { name: 'Care Planning', href: '/care-planning', icon: Clipboard },
  { name: 'Nutrition Management', href: '/nutrition', icon: Utensils },
  { name: 'Rehabilitation', href: '/rehabilitation', icon: Activity },
  { name: 'Scheduling', href: '/scheduling', icon: Calendar },
  { name: 'Transportation', href: '/transportation', icon: Truck },
  { name: 'Nurse Call System', href: '/nurse-call', icon: PhoneCall },
  { name: 'Financial Management', href: '/finance', icon: DollarSign },
  { name: 'Communication', href: '/communication', icon: MessageSquare },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "flex flex-col h-screen bg-gray-100 border-r transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full"
        >
          {isCollapsed ? '→' : '←'}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-2">
          {sidebarItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <span className={cn(
                "flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              )}>
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span>{item.name}</span>}
              </span>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;