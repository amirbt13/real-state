import DashboardPage from "@/templates/DashboardPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import connectDB from "@/utils/api/connectDB";
import User from "@/models/User";

const Dashboard = async () => {
  try {
    connectDB();
  } catch (err) {
    console.log(err);
  }
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session?.user?.email });

  const createdAt = user.createdAt;
  // console.log(session);
  return <DashboardPage createdAt={createdAt} />;
};

export default Dashboard;
