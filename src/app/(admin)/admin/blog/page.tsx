import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { AdminPlaceholderPage } from "@/features/admin/components/admin-placeholder-page";

const AdminBlogPage = () => {
  return (
    <AdminPageShell>
      <AdminPlaceholderPage
        title="Blog"
        description="Gerencie posts, rascunhos e publicacoes do blog."
      />
    </AdminPageShell>
  );
};

export default AdminBlogPage;
