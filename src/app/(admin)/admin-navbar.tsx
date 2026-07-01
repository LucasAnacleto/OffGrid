import Link from "next/link";
import { Anton } from "next/font/google";

import { cn } from "@/lib/utils";
import { AdminLogoutButton } from "./admin-logout-button";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

type AdminNavbarStyle = "default" | "admin";

interface AdminNavbarProps {
  styleVariant?: AdminNavbarStyle;
  userName?: string;
}

export const AdminNavbar = ({
  styleVariant = "default",
  userName,
}: AdminNavbarProps) => {
  if (styleVariant === "default") {
    return (
      <header className="w-full border border-white/80 bg-black text-white">
        <div className="flex min-h-20 w-full flex-wrap items-center justify-between gap-4 px-5 py-3 md:h-20 md:flex-nowrap md:px-6 md:py-0">
          <Link href="/" className="min-w-0 flex-col leading-none">
            <span
              className={cn(
                "text-4xl font-black uppercase tracking-wide text-white sm:text-5xl",
                anton.className
              )}
            >
              OFF<b className="text-pink-500">GRID</b>
            </span>
            <span className="mt-0.5 block text-[9px] font-black uppercase tracking-[0.08em] text-white sm:text-[11px]">
              Tecnologia fora do automatico
            </span>
          </Link>

          <div className="flex min-w-0 items-center gap-3 md:gap-5">
            <span className="bg-pink-500 px-5 py-2.5 text-xl font-black uppercase tracking-wide text-black md:px-6 md:text-2xl">
              Admin
            </span>
            <div className="min-w-0">
              <p className="text-sm font-black uppercase tracking-wide md:text-base">
                Area restrita
              </p>
              <p className="mt-0.5 max-w-[18ch] text-[10px] text-white md:max-w-none md:text-xs">
                Acesso apenas para administradores
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full border-2 border-black bg-[#f4f4f0] text-black shadow-[4px_4px_0_#000]">
      <div className="flex min-h-20 w-full flex-col gap-4 px-5 py-3 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-0">
        <div className="flex min-w-0 flex-wrap items-center gap-4 md:gap-5">
          <Link href="/" className="group flex min-w-0 items-center gap-3 leading-none">
            <span className="min-w-0">
              <span
                className={cn(
                  "block text-4xl font-black uppercase tracking-normal text-black sm:text-5xl",
                  anton.className
                )}
              >
                OFF<b className="text-pink-500">GRID</b>
              </span>
              <span className="mt-0.5 block text-[9px] font-black uppercase tracking-[0.08em] text-black sm:text-[11px]">
                Tecnologia fora do automatico
              </span>
            </span>
          </Link>

          <Link
            href="/admin"
            className={cn(
              "border-2 border-black bg-pink-500 px-5 py-2.5 text-xl font-black uppercase leading-none text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5 sm:px-6 sm:text-2xl",
              anton.className
            )}
          >
            / Admin
          </Link>
        </div>

        <AdminLogoutButton userName={userName} />
      </div>
    </header>
  );
};
