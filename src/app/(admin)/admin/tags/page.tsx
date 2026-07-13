import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { AdminPlaceholderPage } from "@/features/admin/components/admin-placeholder-page";

const AdminTagsPage = () => {
  return (
    <AdminPageShell>
      <AdminPlaceholderPage
        title="Tags"
        description="Gerencie palavras-chave para filtros e descoberta de conteudo."
      />
    </AdminPageShell>
  );
};

export default AdminTagsPage;
