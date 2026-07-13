import { cn } from "@/lib/utils";

import { NewsStatus } from "../types";

const statusLabels: Record<NewsStatus, string> = {
  draft: "Rascunho",
  published: "Publicado",
  scheduled: "Agendado",
};

const statusClasses: Record<NewsStatus, string> = {
  draft: "bg-white text-black",
  published: "bg-pink-500 text-black",
  scheduled: "bg-[#f7e702] text-black",
};

interface NewsStatusBadgeProps {
  status: NewsStatus;
}

export const NewsStatusBadge = ({ status }: NewsStatusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex border-2 border-black px-2 py-1 text-xs font-black uppercase leading-none shadow-[2px_2px_0_#000]",
        statusClasses[status]
      )}
    >
      {statusLabels[status]}
    </span>
  );
};
