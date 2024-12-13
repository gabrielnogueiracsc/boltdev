"use client";

import { Instance } from "@/lib/types";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

interface InstanceCardProps {
  instance: Instance;
}

export function InstanceCard({ instance }: InstanceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={instance.profilePicture} alt={instance.name} />
          <AvatarFallback>{instance.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="font-semibold">{instance.name}</h3>
          <p className="text-sm text-muted-foreground">{instance.phoneNumber}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Active Groups:</span>
          <Badge variant="secondary">{instance.activeGroups}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/instance/${instance.id}`} className="w-full">
          <Button className="w-full" variant="default">
            Manage
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}