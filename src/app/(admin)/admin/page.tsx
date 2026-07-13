import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { NewsDataTable } from "@/features/news/admin/components/news-data-table";
import { newsAdminData } from "@/features/news/admin/data/news-admin-data";

const AdminPage = () => {
  return (
    <AdminPageShell>
      <NewsDataTable data={newsAdminData} />
    </AdminPageShell>
  );
};

export default AdminPage;
