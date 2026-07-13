"use client";

import { useMemo, useState } from "react";

import { DataTable } from "@/components/data-table/data-table";

import { NewsAdminItem } from "../types";
import { newsTableColumns } from "./news-table-columns";
import { NewsToolbar, NewsStatusFilter } from "./news-toolbar";

interface NewsDataTableProps {
  data: NewsAdminItem[];
}

export const NewsDataTable = ({ data }: NewsDataTableProps) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<NewsStatusFilter>("all");

  const filteredData = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return data.filter((item) => {
      const matchesStatus = status === "all" || item.status === status;
      const matchesSearch =
        !normalizedSearch ||
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.slug.toLowerCase().includes(normalizedSearch) ||
        item.category.toLowerCase().includes(normalizedSearch) ||
        item.author.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesSearch;
    });
  }, [data, search, status]);

  return (
    <div className="space-y-4">
      <NewsToolbar
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />
      <DataTable
        columns={newsTableColumns}
        data={filteredData}
        emptyMessage="Nenhuma noticia encontrada."
      />
    </div>
  );
};
