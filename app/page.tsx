import { InstanceList } from "@/components/instances/instance-list";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { InstanceHeader } from "@/components/instances/connections-header";

const intances = 
  {
    id: '1',
    titulo: 'Seus unibots',
    desc: 'selecione um dos seus unibots para gerenciar os grupos.',
  }
;

export default function Home() {
  return (
    <div>
      <InstanceHeader instance={intances} />
      <div className="space-y-8">
        <InstanceList />
      </div>
    </div>
  );
}