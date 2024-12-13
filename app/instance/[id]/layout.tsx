import { getInstance } from "@/lib/data";
import { notFound } from "next/navigation";

export default function InstanceLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const instance = getInstance(params.id);

  if (!instance) {
    notFound();
  }

  return <>{children}</>;
}