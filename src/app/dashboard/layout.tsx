import DashboardSidebar from "@/layouts/dashboard/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return <DashboardSidebar>{children}</DashboardSidebar>;
};

export default layout;
