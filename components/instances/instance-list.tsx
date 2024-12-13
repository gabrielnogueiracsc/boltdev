"use client";

import { InstanceCard } from "@/components/instances/instance-card";
import { mockInstances } from "@/lib/data";

export function InstanceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockInstances.map((instance) => (
        <InstanceCard key={instance.id} instance={instance} />
      ))}
    </div>
  );
}