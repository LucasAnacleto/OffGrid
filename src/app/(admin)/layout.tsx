import { AdminNavbar } from "./admin-navbar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-h-screen bg-[#f4f4f0] p-1 text-black">
      <AdminNavbar />
      {children}
    </main>
  );
};

export default AuthLayout;
