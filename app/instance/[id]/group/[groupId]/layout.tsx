import { getGroup } from "@/lib/data";
import { notFound } from "next/navigation";

export default function GroupLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string; groupId: string };
}) {
  const group = getGroup(params.id, params.groupId);

  if (!group) {
    notFound();
  }

  return <>{children}</>;
}