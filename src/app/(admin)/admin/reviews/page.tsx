import { AdminPageShell } from "@/features/admin/components/admin-page-shell";
import { AdminPlaceholderPage } from "@/features/admin/components/admin-placeholder-page";

const AdminReviewsPage = () => {
  return (
    <AdminPageShell>
      <AdminPlaceholderPage
        title="Reviews"
        description="Organize reviews, notas, produtos e materiais em avaliacao."
      />
    </AdminPageShell>
  );
};

export default AdminReviewsPage;
