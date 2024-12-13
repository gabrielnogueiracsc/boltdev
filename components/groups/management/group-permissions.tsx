"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Permission, PermissionGroup } from "@/lib/types";
import {
  Settings,
  Brain,
  Download,
  Sticker,
  Shield,
} from "lucide-react";

interface GroupPermissionsProps {
  groupId: string;
}

const permissionGroups: Record<PermissionGroup, { icon: any; title: string }> = {
  settings: { icon: Settings, title: "Settings" },
  ai: { icon: Brain, title: "AI Features" },
  downloads: { icon: Download, title: "Downloads" },
  stickers: { icon: Sticker, title: "Stickers" },
  basic: { icon: Shield, title: "Basic" },
};

const mockPermissions: Permission[] = [
  // Settings
  { id: "1", name: "Change Group Info", description: "Allow admins to change group info", enabled: true, group: "settings" },
  { id: "2", name: "Manage Members", description: "Allow admins to add/remove members", enabled: true, group: "settings" },
  
  // AI Features
  { id: "3", name: "AI Chat", description: "Enable AI chat responses", enabled: true, group: "ai" },
  { id: "4", name: "AI Image Generation", description: "Allow AI image generation", enabled: false, group: "ai" },
  
  // Downloads
  { id: "5", name: "Media Downloads", description: "Allow media downloads", enabled: true, group: "downloads" },
  { id: "6", name: "File Sharing", description: "Enable file sharing", enabled: true, group: "downloads" },
  
  // Stickers
  { id: "7", name: "Create Stickers", description: "Allow sticker creation", enabled: true, group: "stickers" },
  { id: "8", name: "Share Stickers", description: "Allow sharing stickers", enabled: true, group: "stickers" },
  
  // Basic
  { id: "9", name: "Send Messages", description: "Allow sending messages", enabled: true, group: "basic" },
  { id: "10", name: "Send Media", description: "Allow sending media", enabled: true, group: "basic" },
];

export function GroupPermissions({ groupId }: GroupPermissionsProps) {
  const [permissions, setPermissions] = useState<Permission[]>(mockPermissions);

  const handleToggle = (permissionId: string) => {
    setPermissions((prev) =>
      prev.map((p) =>
        p.id === permissionId ? { ...p, enabled: !p.enabled } : p
      )
    );
  };

  const groupedPermissions = permissions.reduce((acc, permission) => {
    if (!acc[permission.group]) {
      acc[permission.group] = [];
    }
    acc[permission.group].push(permission);
    return acc;
  }, {} as Record<PermissionGroup, Permission[]>);

  return (
    <div className="space-y-6">
      {Object.entries(groupedPermissions).map(([group, perms]) => {
        const GroupIcon = permissionGroups[group as PermissionGroup].icon;
        return (
          <Card key={group}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <GroupIcon className="h-5 w-5" />
                <CardTitle>{permissionGroups[group as PermissionGroup].title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {perms.map((permission) => (
                <div
                  key={permission.id}
                  className="flex flex-row items-center justify-between space-y-0"
                >
                  <div className="space-y-0.5">
                    <Label htmlFor={permission.id}>{permission.name}</Label>
                    <p className="text-sm text-muted-foreground">
                      {permission.description}
                    </p>
                  </div>
                  <Switch
                    id={permission.id}
                    checked={permission.enabled}
                    onCheckedChange={() => handleToggle(permission.id)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}