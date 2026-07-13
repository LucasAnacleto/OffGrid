"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  FileText,
  Folder,
  Hash,
  LogOut,
  Newspaper,
  Settings,
  Star,
  Tags,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils";

const adminNavItems = [
  {
    href: "/admin",
    label: "Noticias",
    icon: Newspaper,
  },
  {
    href: "/admin/blog",
    label: "Blog",
    icon: FileText,
  },
  {
    href: "/admin/reviews",
    label: "Reviews",
    icon: Star,
  },
  {
    href: "/admin/tutoriais",
    label: "Tutoriais",
    icon: Hash,
  },
  {
    href: "/admin/zines",
    label: "Zines",
    icon: BookOpen,
  },
  {
    href: "/admin/categorias",
    label: "Categorias",
    icon: Folder,
  },
  {
    href: "/admin/tags",
    label: "Tags",
    icon: Tags,
  },
  {
    href: "/admin/usuarios",
    label: "Usuarios",
    icon: UserRound,
  },
  {
    href: "/admin/configuracoes",
    label: "Configuracoes",
    icon: Settings,
  },
];

interface AdminSidebarProps {
  className?: string;
}

const AdminSidebar = ({ className }: AdminSidebarProps) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "w-full border-2 border-black bg-[#f4f4f0] p-4 text-black shadow-[4px_4px_0_#000] lg:min-h-[calc(100vh-7rem)] lg:w-72",
        className
      )}
    >
      <span className="inline-flex bg-black px-3 py-1 text-sm font-black uppercase leading-none text-white">
        Menu
      </span>

      <nav className="mt-4 flex flex-col gap-2">
        {adminNavItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(`${item.href}/`));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-12 items-center gap-3 border-2 border-transparent px-3 text-sm font-black uppercase transition-colors hover:border-black hover:bg-white",
                isActive &&
                  "border-black bg-pink-500 text-black shadow-[3px_3px_0_#000] hover:bg-pink-500"
              )}
            >
              <Icon className="size-6 shrink-0" strokeWidth={3} />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="my-5 h-px bg-black" />

      <button
        type="button"
        className="flex h-12 w-full items-center gap-3 border-2 border-transparent px-3 text-left text-sm font-black uppercase transition-colors hover:border-black hover:bg-white"
      >
        <LogOut className="size-6 shrink-0" strokeWidth={3} />
        <span>Sair</span>
      </button>
    </aside>
  );
};

export default AdminSidebar;
