"use client";

import { Group } from "@/lib/types";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Crown } from "lucide-react";
import Link from "next/link";

interface GroupCardProps {
  group: Group;
  instanceId: string;
}

const planColors = {
  basic: "bg-gray-500",
  gold: "bg-yellow-500",
  diamond: "bg-blue-500",
};

export function GroupCard({ group, instanceId }: GroupCardProps) {
  const daysUntilExpiration = Math.ceil(
    (new Date(group.subscription.expiresAt).getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className={`${planColors[group.subscription.plan]} bg-opacity-10`}>
            {group.subscription.plan.charAt(0).toUpperCase() + group.subscription.plan.slice(1)} Plan
          </Badge>
          <span className="text-sm text-muted-foreground">
            {daysUntilExpiration} days left
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarImage src={group.avatar} alt={group.name} />
              <AvatarFallback>{group.name[0]}</AvatarFallback>
            </Avatar>
            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
              group.status === 'active' ? 'bg-green-500' : 
              group.status === 'archived' ? 'bg-yellow-500' : 'bg-gray-500'
            }`} />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="font-semibold">{group.name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Crown className="h-4 w-4" />
              <span>{group.owner.name}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Members:</span>
            <Badge variant="secondary">{group.memberCount}</Badge>
          </div>
          {group.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{group.description}</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/instance/${instanceId}/group/${group.id}`} className="w-full">
          <Button className="w-full" variant="default">
            Manage Group
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}