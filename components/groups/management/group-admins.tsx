"use client";

import { useState } from "react";
import { Admin } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  ChevronDown,
  Shield,
  UserMinus
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface GroupAdminsProps {
  groupId: string;
}

export function GroupAdmins({ groupId }: GroupAdminsProps) {
  const [admins] = useState<Admin[]>([
    {
      id: "1",
      name: "John Doe",
      role: "owner",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      addedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "2",
      name: "Jane Smith",
      role: "admin",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      addedAt: "2024-01-05T00:00:00Z",
    },
    {
      id: "3",
      name: "Mike Johnson",
      role: "moderator",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop",
      addedAt: "2024-01-10T00:00:00Z",
    },
  ]);

  const getRoleBadgeVariant = (role: Admin["role"]) => {
    switch (role) {
      case "owner":
        return "destructive";
      case "admin":
        return "default";
      case "moderator":
        return "secondary";
      default:
        return "default";
    }
  };

  const handleDemote = (adminId: string) => {
    // Implement demotion logic
    console.log("Demoting admin:", adminId);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Administrators</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Admin
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={admin.avatar} alt={admin.name} />
                  <AvatarFallback>{admin.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{admin.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Added {new Date(admin.addedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={getRoleBadgeVariant(admin.role)}>
                  {admin.role}
                </Badge>
                {admin.role !== "owner" && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {admin.role === "admin" && (
                        <DropdownMenuItem onClick={() => handleDemote(admin.id)}>
                          <Shield className="h-4 w-4 mr-2" />
                          Demote to Moderator
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem 
                        onClick={() => handleDemote(admin.id)}
                        className="text-destructive"
                      >
                        <UserMinus className="h-4 w-4 mr-2" />
                        Remove Admin
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}