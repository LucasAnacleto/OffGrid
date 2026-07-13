import { cn } from "@/lib/utils";

import AdminSidebar from "./admin-sidebar";

interface AdminPageShellProps {
  children: React.ReactNode;
  className?: string;
}

export const AdminPageShell = ({
  children,
  className,
}: AdminPageShellProps) => {
  return (
    <section
      className={cn(
        "grid gap-4 bg-[#f4f4f0] text-black lg:grid-cols-[18rem_minmax(0,1fr)]",
        className
      )}
    >
      <AdminSidebar />

      <div className="min-w-0 border-2 border-black bg-[#f4f4f0] p-4 shadow-[4px_4px_0_#000]">
        {children}
      </div>
    </section>
  );
};
