"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Camera, Upload, Power, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface GroupSettingsProps {
  groupId: string;
}

export function GroupSettings({ groupId }: GroupSettingsProps) {
  const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="relative h-40 w-full rounded-lg bg-cover bg-center bg-gradient-to-b from-blue-500 to-blue-600">
            <Button
              variant="secondary"
              size="sm"
              className="absolute bottom-4 right-4"
            >
              <Upload className="h-4 w-4 mr-2" />
              Change Banner
            </Button>
          </div>
          
          <div className="flex items-start gap-4 -mt-12 px-4">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                variant="secondary"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 space-y-1">
              <Input
                placeholder="Group Name"
                className="text-lg font-semibold h-auto px-0 border-0 focus-visible:ring-0"
                defaultValue="Product Updates"
              />
              <Textarea
                placeholder="Group Description"
                className="resize-none"
                defaultValue="Official channel for product updates and announcements"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Welcome Message</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Enter welcome message"
            className="min-h-[100px]"
            defaultValue="Welcome to our group! 👋"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Group Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full" variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Update Group
          </Button>
          
          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => setIsDeactivateDialogOpen(true)}
          >
            <Power className="mr-2 h-4 w-4" />
            Deactivate Group
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full" variant="destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Group
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  group and remove all data associated with it.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground">
                  Delete Group
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </div>
  );
}