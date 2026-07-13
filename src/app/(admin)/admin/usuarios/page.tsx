import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { AdminPlaceholderPage } from "@/features/admin/components/admin-placeholder-page";

const AdminUsersPage = () => {
  return (
    <AdminPageShell>
      <AdminPlaceholderPage
        title="Usuarios"
        description="Administre autores, editores e permissoes da area restrita."
      />
    </AdminPageShell>
  );
};

export default AdminUsersPage;
