"use client";

import { Group, TopUser, CommandUsage } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, MessageSquare, Clock, Crown, 
  Lock, Unlock, Send, Settings, AlertCircle,
  MessageCircle
} from "lucide-react";

interface GroupOverviewProps {
  group: Group;
}

const mockTopUsers: TopUser[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    messageCount: 1234,
    lastActive: "2024-03-20T10:00:00Z"
  },
  // Add more mock users...
];

const mockTopCommands: CommandUsage[] = [
  {
    command: "!help",
    usageCount: 156,
    lastUsed: "2024-03-20T10:00:00Z"
  },
  // Add more mock commands...
];

const QuickAction = ({ icon: Icon, label, onClick, variant = "outline" }: any) => (
  <Button 
    variant={variant} 
    className="flex flex-col items-center justify-center h-24 w-full gap-2"
    onClick={onClick}
  >
    <Icon className="h-6 w-6" />
    <span className="text-sm text-center">{label}</span>
  </Button>
);

export function GroupOverview({ group }: GroupOverviewProps) {
  const daysUntilExpiration = Math.ceil(
    (new Date(group.subscription.expiresAt).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-bold">Group Profile</CardTitle>
          <Button variant="outline">Renew Subscription</Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={group.avatar} alt={group.name} />
              <AvatarFallback>{group.name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">{group.name}</h3>
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Owned by {group.owner.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-sm">
                  {group.subscription.plan.toUpperCase()} PLAN
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {daysUntilExpiration} days remaining
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <QuickAction icon={group.status === 'active' ? Lock : Unlock} label={group.status === 'active' ? "Close Group" : "Open Group"} />
            <QuickAction icon={Send} label="Send Announcement" />
            <QuickAction icon={Settings} label="Modify Permissions" />
            <QuickAction icon={MessageCircle} label="Edit Welcome" />
            <QuickAction icon={AlertCircle} label="Report Issue" variant="destructive" className="col-span-2" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Active Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTopUsers.map((user) => (
              <div key={user.id} className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.messageCount} messages</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Used Commands</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTopCommands.map((cmd) => (
              <div key={cmd.command} className="flex items-center justify-between">
                <code className="text-sm bg-muted px-2 py-1 rounded">{cmd.command}</code>
                <span className="text-sm text-muted-foreground">{cmd.usageCount} uses</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}