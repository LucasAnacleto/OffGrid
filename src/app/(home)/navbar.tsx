"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Anton } from "next/font/google"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MenuIcon, Search } from "lucide-react";

import { NavbarSidebar } from "./navbar-sidebar";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  highlight?: boolean;
}

const NavbarItem = ({
  href,
  children,
  isActive,
  highlight,
}: NavbarItemProps) => {
  return (
    <Button
      variant="elevated"
      className={cn(
        "bg-transparent hover:bg-transparent hover:border-primary border-transparent px-3.5 text-lg",
        highlight && "border-black bg-[#f7e702] text-black hover:border-black hover:bg-[#f7e702]",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/noticias", children: "NOTÍCIAS" },
  { href: "/blog", children: "BLOG" },
  { href: "/tutoriais", children: "TUTORIAIS" },
  { href: "/reviews", children: "REVIEWS" },
  { href: "/zine", children: "ZINE", highlight: true },
  { href: "/sobre", children: "SOBRE" },
]

export const Navbar = () => {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus()
    }
  }, [isSearchOpen])

  return (
    <nav className="flex h-20 justify-between border-b border-black bg-white px-6 font-medium">
      <Link href="/" className="flex translate-y-1 flex-col leading-none">
        <span className={cn("text-5xl font-black tracking-wide text-black", anton.className)}>
          CTRL+<b className="text-pink-500">R</b>
        </span>
        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-black">
          Tecnologia fora do automático
        </span>
      </Link>

      <NavbarSidebar 
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            highlight={item.highlight}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div
        className={cn(
          "relative right-8 hidden h-full items-center overflow-hidden transition-[width] duration-300 ease-out lg:flex",
          isSearchOpen ? "w-96" : "w-48"
        )}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsSearchOpen(false)
          }
        }}
      >
        <Input
          ref={searchInputRef}
          type="search"
          placeholder="Buscar..."
          className={cn(
            "h-full min-w-0 rounded-none border-y-0 border-r-0 border-l border-black bg-white px-5 text-base font-medium shadow-none outline-none transition-all duration-300 ease-out placeholder:text-black/45 focus-visible:ring-0",
            isSearchOpen ? "w-64 opacity-100" : "w-0 border-l-0 px-0 opacity-0"
          )}
        />
        <Button
          variant="secondary"
          type="button"
          aria-label="Buscar"
          aria-expanded={isSearchOpen}
          onClick={() => setIsSearchOpen((current) => !current)}
          className={cn(
            "h-full shrink-0 rounded-none border-y-0 border-black bg-white text-lg transition-all duration-300 hover:translate-0 hover:border-black hover:bg-pink-400 hover:text-black hover:shadow-none",
            isSearchOpen ? "w-32 border-l" : "w-full border-l"
          )}
        >
          <Search className="size-6" />
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  )
}
