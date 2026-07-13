import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { NewsFormModal } from "@/features/news/admin/components/news-form-modal";

const NewAdminNewsPage = () => {
  return (
    <AdminPageShell>
      <NewsFormModal />
    </AdminPageShell>
  );
};

export default NewAdminNewsPage;
