import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { AdminPlaceholderPage } from "@/features/admin/components/admin-placeholder-page";

const AdminZinesPage = () => {
  return (
    <AdminPageShell>
      <AdminPlaceholderPage
        title="Zines"
        description="Controle edicoes, capas e publicacoes especiais do zine."
      />
    </AdminPageShell>
  );
};

export default AdminZinesPage;
