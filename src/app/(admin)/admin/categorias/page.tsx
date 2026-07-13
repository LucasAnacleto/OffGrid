import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { AdminPlaceholderPage } from "@/features/admin/components/admin-placeholder-page";

const AdminCategoriesPage = () => {
  return (
    <AdminPageShell>
      <AdminPlaceholderPage
        title="Categorias"
        description="Cadastre categorias para organizar noticias, posts e reviews."
      />
    </AdminPageShell>
  );
};

export default AdminCategoriesPage;
