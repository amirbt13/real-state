import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "@/modules/dashborad-layout/logout-button/LogoutButton";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { Role } from "src/types/enums";

interface Props {
  email: string;
  role: Role;
  children: React.ReactNode;
}

const DashboardSidebar: React.FC<Props> = async ({ children, email, role }) => {
  return (
    <div className="flex justify-between mt-20">
      <div className="flex flex-col items-center h-fit py-8 px-4 rounded-xl shadow-[0px_2px_10px] shadow-meBlue ml-10 w-56">
        <CgProfile className=" text-5xl text-meBlue" />
        {role === Role.ADMIN ? <p>Admin</p> : null}
        <p className=" text-gray-500 text-lg font-normal mt-5">{email}</p>
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
        {role === Role.ADMIN ? (
          <Link className=" my-1 font-normal w-full" href={"/"}>
            در انتظار تایید
          </Link>
        ) : null}
        <LogoutButton />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default DashboardSidebar;
