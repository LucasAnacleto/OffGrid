import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { AdminPlaceholderPage } from "@/features/admin/components/admin-placeholder-page";

const AdminSettingsPage = () => {
  return (
    <AdminPageShell>
      <AdminPlaceholderPage
        title="Configuracoes"
        description="Ajuste preferencias gerais, SEO e opcoes operacionais do admin."
      />
    </AdminPageShell>
  );
};

export default AdminSettingsPage;
