import { InstanceHeader } from "@/components/instances/instance-header";
import { GroupFilters } from "@/components/groups/group-filters";
import { GroupCard } from "@/components/groups/group-card";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Instance } from "@/lib/types";
import { getInstance, getInstanceGroups, mockInstances } from "@/lib/data";

export function generateStaticParams() {
  return mockInstances.map((instance) => ({
    id: instance.id,
  }));
}

export default function InstancePage({ params }: { params: { id: string } }) {
  const instance = getInstance(params.id);
  const groups = getInstanceGroups(params.id);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: instance.name }
        ]}
      />
      <InstanceHeader instance={instance} />
      <GroupFilters />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} instanceId={params.id} />
        ))}
      </div>
    </div>
  );
}