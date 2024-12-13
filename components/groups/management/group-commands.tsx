"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2, Command } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface GroupCommandsProps {
  groupId: string;
}

export function GroupCommands({ groupId }: GroupCommandsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Custom Commands</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Command
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        {[
          { name: "!welcome", response: "Welcome to our group! 👋", enabled: true, usage: 156 },
          { name: "!rules", response: "Please follow our community guidelines", enabled: true, usage: 89 },
          { name: "!help", response: "Available commands: !welcome, !rules", enabled: false, usage: 45 },
        ].map((command, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 p-6 border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <Command className="h-4 w-4" />
                  <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                    {command.name}
                  </code>
                  <Badge variant="secondary" className="text-xs">
                    {command.usage} uses
                  </Badge>
                </div>
                <Input 
                  value={command.response} 
                  className="mt-2"
                  placeholder="Command response..."
                />
              </div>
              <div className="flex items-center gap-4 ml-4">
                <Switch checked={command.enabled} />
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}