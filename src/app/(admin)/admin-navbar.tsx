import Link from "next/link";
import { Anton } from "next/font/google";

import { cn } from "@/lib/utils";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const AdminNavbar = () => {
  return (
    <header className="w-full border border-white/80 bg-black text-white">
      <div className="flex min-h-20 w-full flex-wrap items-center justify-between gap-4 px-4 py-4 md:h-28 md:flex-nowrap md:px-7 md:py-0">
        <Link href="/" className="min-w-0 flex-col leading-none">
          <span
            className={cn(
              "text-3xl font-black uppercase tracking-wide text-white sm:text-5xl md:text-7xl",
              anton.className
            )}
          >
            OFF<b className="text-pink-500">GRID</b>
          </span>
          <span className="mt-2 block text-xs font-black uppercase tracking-[0.08em] text-white sm:text-sm">
            Tecnologia fora do automatico
          </span>
        </Link>

        <div className="flex min-w-0 items-center gap-4 md:gap-7">
          <span className="bg-pink-500 px-5 py-3 text-2xl font-black uppercase tracking-wide text-black md:px-8 md:py-5 md:text-3xl">
            Admin
          </span>
          <div className="min-w-0">
            <p className="text-base font-black uppercase tracking-wide md:text-lg">
              Area restrita
            </p>
            <p className="mt-1 max-w-[18ch] text-xs text-white md:max-w-none md:text-sm">
              Acesso apenas para administradores
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
