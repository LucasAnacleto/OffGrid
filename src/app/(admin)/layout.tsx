import { cookies } from "next/headers";

import {
  SESSION_COOKIE_NAME,
  verifySessionToken,
} from "@/features/auth/server/session";

import { AdminNavbar } from "./admin-navbar";

interface AuthLayoutProps {
  children: React.ReactNode
}

const getSessionUser = async () => {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);

  if (!sessionCookie?.value) {
    return null;
  }

  try {
    return await verifySessionToken(sessionCookie.value);
  } catch {
    return null;
  }
};

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const user = await getSessionUser();

  return (
    <main className="min-h-screen bg-[#f4f4f0] p-1 text-black">
      <div className="flex justify-between items-center">
        <AdminNavbar
          styleVariant={user ? "admin" : "default"}
          userName={user?.name}
        />
      </div>
      <div className="mx-auto max-w-screen-2xl p-4 bg-[#f4f4f0]">
        {children}
      </div>
    </main>
  )
}

export default AuthLayout;
