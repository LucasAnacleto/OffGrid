import { AdminNavbar } from "./admin-navbar";

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="min-h-screen bg-[#f4f4f0] p-1 text-black mx-auto max-w-screen-2xl p-4">
      <div className="flex justify-between items-center">
        <AdminNavbar />
      </div>
      <div className="mx-auto max-w-screen-2xl p-4 bg-[#f4f4f0]">
        {children}
      </div>
    </main>
  )
}

export default AuthLayout;