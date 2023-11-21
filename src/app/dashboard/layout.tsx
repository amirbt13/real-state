import DashboardSidebar from "@/layouts/dashboard/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
    headers: { Cookie: cookies().toString() },
    cache: "no-store",
  });
  const { user } = await res.json();
  console.log(user);
  if (user.error) return <h3>{user.error}</h3>;
  return (
    <DashboardSidebar email={user.email} role={user.role}>
      {children}
    </DashboardSidebar>
  );
};

export default layout;
