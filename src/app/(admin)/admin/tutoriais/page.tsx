import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { AdminPlaceholderPage } from "@/features/admin/components/admin-placeholder-page";

const AdminTutorialsPage = () => {
  return (
    <AdminPageShell>
      <AdminPlaceholderPage
        title="Tutoriais"
        description="Crie e edite guias tecnicos, series e conteudos passo a passo."
      />
    </AdminPageShell>
  );
};

export default AdminTutorialsPage;
