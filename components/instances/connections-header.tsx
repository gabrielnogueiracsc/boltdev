"use client";

import { Instance } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface InstanceHeaderProps {
  instance: Instance;
}

export function InstanceHeader({ instance }: InstanceHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">{instance.titulo}</h1>

        </div>
        <p className="text-muted-foreground">{instance.desc}</p>
      </div>
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Contratar unibot
      </Button>
    </div>
  );
}