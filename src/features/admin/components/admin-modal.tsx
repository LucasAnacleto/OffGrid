import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";

interface AdminModalProps {
  title: string;
  backHref: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const AdminModal = ({
  title,
  backHref,
  children,
  footer,
  className,
}: AdminModalProps) => {
  return (
    <div className={cn("flex min-h-full flex-col gap-5", className)}>
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="inline-flex w-fit bg-black px-3 py-2 text-3xl font-black uppercase leading-none text-white shadow-[3px_3px_0_#000]">
          {title}
        </h1>

        <Link
          href={backHref}
          className="inline-flex h-11 w-fit items-center gap-2 border-2 border-black bg-white px-4 text-sm font-black uppercase text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="size-5" strokeWidth={3} />
          Voltar
        </Link>
      </header>

      <div className="min-w-0 flex-1">{children}</div>

      {footer ? (
        <footer className="flex flex-col gap-3 border-t-2 border-black pt-4 sm:flex-row sm:justify-end">
          {footer}
        </footer>
      ) : null}
    </div>
  );
};
