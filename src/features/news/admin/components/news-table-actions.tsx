"use client";

import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { NewsAdminItem } from "../types";

interface NewsTableActionsProps {
  news: NewsAdminItem;
}

export const NewsTableActions = ({ news }: NewsTableActionsProps) => {
  return (
    <div className="flex items-center justify-end gap-2">
      <Link
        href={`/noticias/${news.slug}`}
        aria-label="Visualizar noticia"
        className="inline-flex size-9 items-center justify-center border-2 border-black bg-white text-black shadow-[2px_2px_0_#000] transition-transform hover:-translate-y-0.5"
      >
        <Eye className="size-4" strokeWidth={3} />
      </Link>
      <Link
        href={`/admin/noticias/${news.id}/editar`}
        aria-label="Editar noticia"
        className="inline-flex size-9 items-center justify-center border-2 border-black bg-pink-500 text-black shadow-[2px_2px_0_#000] transition-transform hover:-translate-y-0.5"
      >
        <Pencil className="size-4" strokeWidth={3} />
      </Link>
      <button
        type="button"
        aria-label="Excluir noticia"
        className="inline-flex size-9 items-center justify-center border-2 border-black bg-black text-white shadow-[2px_2px_0_#000] transition-transform hover:-translate-y-0.5"
      >
        <Trash2 className="size-4" strokeWidth={3} />
      </button>
    </div>
  );
};
