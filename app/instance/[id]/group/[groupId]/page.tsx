import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GroupOverview } from "@/components/groups/management/group-overview";
import { GroupAdmins } from "@/components/groups/management/group-admins";
import { GroupCommands } from "@/components/groups/management/group-commands";
import { GroupPermissions } from "@/components/groups/management/group-permissions";
import { GroupSettings } from "@/components/groups/management/group-settings";
import { getInstance, getGroup, mockInstances, mockGroups } from "@/lib/data";

export function generateStaticParams() {
  return mockInstances.flatMap((instance) => {
    const groups = mockGroups[instance.id] || [];
    return groups.map((group) => ({
      id: instance.id,
      groupId: group.id,
    }));
  });
}

export default function GroupManagementPage({ params }: { params: { id: string; groupId: string } }) {
  const instance = getInstance(params.id);
  const group = getGroup(params.id, params.groupId);

  if (!group) {
    return <div>Group not found</div>;
  }

  return (
    <div className="space-y-6">
      <Breadcrumb
        items={[
          { label: instance.name, href: `/instance/${params.id}` },
          { label: group.name }
        ]}
      />
      
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{group.name}</h1>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="admins">Administrators</TabsTrigger>
          <TabsTrigger value="commands">Commands</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <GroupOverview group={group} />
        </TabsContent>

        <TabsContent value="admins" className="space-y-4">
          <GroupAdmins groupId={group.id} />
        </TabsContent>

        <TabsContent value="commands" className="space-y-4">
          <GroupCommands groupId={group.id} />
        </TabsContent>

        <TabsContent value="permissions" className="space-y-4">
          <GroupPermissions groupId={group.id} />
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <GroupSettings groupId={group.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}