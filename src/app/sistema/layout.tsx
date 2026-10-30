import type { ReactNode } from "react";
import { SystemNavigation } from "@/components/shared/system-navigation";

export default function SystemLayout({ children }: { children: ReactNode }) {
  return <SystemNavigation>{children}</SystemNavigation>;
}
