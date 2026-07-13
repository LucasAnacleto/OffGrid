"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, UserRound } from "lucide-react";

interface AdminLogoutButtonProps {
  userName?: string;
}

export const AdminLogoutButton = ({ userName }: AdminLogoutButtonProps) => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      router.replace("/admin/sign-in");
      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <button
      type="button"
      disabled={isLoggingOut}
      onClick={handleLogout}
      className="flex w-full items-center justify-between gap-3 border-2 border-black bg-white px-3 py-2 text-left shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-70 lg:w-auto lg:min-w-64"
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <span className="flex size-10 shrink-0 items-center justify-center border-2 border-black bg-[#f4f4f0]">
          <UserRound className="size-6" strokeWidth={3} />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-xs font-black uppercase tracking-[0.04em] sm:text-sm">
            {userName}
          </span>
          <span className="mt-0.5 block text-[10px] font-black uppercase tracking-[0.04em] sm:text-xs">
            {isLoggingOut ? "Saindo" : "Administrador"}
          </span>
        </span>
      </span>
      <ChevronDown className="size-5 shrink-0" strokeWidth={4} />
    </button>
  );
};
