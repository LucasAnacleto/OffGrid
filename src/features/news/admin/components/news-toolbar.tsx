"use client";

import Link from "next/link";
import { Plus, Search } from "lucide-react";

import { NewsStatus } from "../types";

type NewsStatusFilter = "all" | NewsStatus;

const statusFilters: Array<{
  value: NewsStatusFilter;
  label: string;
}> = [
  { value: "all", label: "Todos" },
  { value: "draft", label: "Rascunhos" },
  { value: "published", label: "Publicados" },
  { value: "scheduled", label: "Agendados" },
];

interface NewsToolbarProps {
  search: string;
  status: NewsStatusFilter;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: NewsStatusFilter) => void;
}

export const NewsToolbar = ({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: NewsToolbarProps) => {
  return (
    <div className="flex flex-col gap-4 border-2 border-black bg-white p-4 shadow-[4px_4px_0_#000]">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <span className="inline-flex bg-black px-3 py-1 text-sm font-black uppercase leading-none text-white">
            Noticias
          </span>
          <h1 className="mt-3 text-3xl font-black uppercase leading-none text-black">
            Gerenciar noticias
          </h1>
        </div>

        <Link
          href="/admin/noticias/nova"
          className="inline-flex h-11 items-center justify-center gap-2 border-2 border-black bg-pink-500 px-4 text-sm font-black uppercase text-black shadow-[3px_3px_0_#000] transition-transform hover:-translate-y-0.5"
        >
          <Plus className="size-5" strokeWidth={3} />
          Nova noticia
        </Link>
      </div>

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
        <label className="relative block">
          <span className="sr-only">Buscar noticias</span>
          <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-black" />
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Buscar por titulo, slug, categoria ou autor..."
            className="h-11 w-full border-2 border-black bg-[#f4f4f0] pl-10 pr-3 text-sm font-bold text-black outline-none placeholder:text-black/45"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {statusFilters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => onStatusChange(item.value)}
              className={
                status === item.value
                  ? "h-10 border-2 border-black bg-pink-500 px-3 text-xs font-black uppercase text-black shadow-[2px_2px_0_#000]"
                  : "h-10 border-2 border-black bg-white px-3 text-xs font-black uppercase text-black hover:bg-[#f4f4f0]"
              }
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export type { NewsStatusFilter };
