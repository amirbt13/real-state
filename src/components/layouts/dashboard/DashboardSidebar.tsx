import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/modules/dashborad-layout/logout-button/LogoutButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

const DashboardSidebar = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-8 px-4 rounded-xl shadow-[0px_2px_10px] shadow-meBlue ml-10 w-56">
        <CgProfile className=" text-5xl text-meBlue" />
        <p className=" text-gray-500 text-lg font-normal mt-5">
          {session?.user?.email}
        </p>
        <span className=" bg-slate-200 w-full h-[1px] mb-8"></span>
        <Link className=" my-1 font-normal w-full" href="/dashboard">
          حساب کاربری
        </Link>
        <Link
          className=" my-1 font-normal w-full"
          href="/dashboard/my-profiles"
        >
          آگهی های من
        </Link>
        <Link className=" my-1 font-normal w-full" href="/dashboard/add">
          ثبت آگهی
        </Link>
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardSidebar;
