export type NewsStatus = "draft" | "published" | "scheduled";

export type NewsAdminItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: NewsStatus;
  author: string;
  publishedAt: string;
  views: number;
};
