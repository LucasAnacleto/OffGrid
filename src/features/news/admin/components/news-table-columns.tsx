"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { NewsAdminItem } from "../types";
import { NewsStatusBadge } from "./news-status-badge";
import { NewsTableActions } from "./news-table-actions";

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

const SortableHeader = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 font-black uppercase"
    >
      {label}
      <ArrowUpDown className="size-3.5" strokeWidth={3} />
    </button>
  );
};

export const newsTableColumns: ColumnDef<NewsAdminItem>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <SortableHeader
        label="Titulo"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => {
      const news = row.original;

      return (
        <div className="max-w-[360px]">
          <p className="truncate font-black uppercase">{news.title}</p>
          <p className="mt-1 truncate text-xs font-bold lowercase text-black/60">
            /{news.slug}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => (
      <span className="font-black uppercase">{row.original.category}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <NewsStatusBadge status={row.original.status} />,
  },
  {
    accessorKey: "author",
    header: "Autor",
  },
  {
    accessorKey: "publishedAt",
    header: ({ column }) => (
      <SortableHeader
        label="Publicacao"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => formatDate(row.original.publishedAt),
  },
  {
    accessorKey: "views",
    header: ({ column }) => (
      <SortableHeader
        label="Views"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      />
    ),
    cell: ({ row }) => (
      <span className="font-black">{row.original.views.toLocaleString("pt-BR")}</span>
    ),
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Acoes</span>,
    cell: ({ row }) => <NewsTableActions news={row.original} />,
  },
];
