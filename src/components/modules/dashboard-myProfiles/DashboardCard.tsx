"use client";
import { BProfile } from "src/types/Profile";
import Card from "@/modules/Card";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  profile: BProfile;
}

const DashboardCard: React.FC<Props> = ({ profile }) => {
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${profile._id}`);
  };
  const deleteHandler = async () => {
    console.log("click");
    const res = await fetch(`/api/profile/delete/${profile._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (res.status === 200) {
      toast.success(data.message);
      router.refresh();
    } else {
      toast.error(data.error);
    }
  };
  return (
    <div className="flex border-2 border-solid border-[#304ffe58] rounded-2xl mb-5">
      <Card profile={profile} />
      <div className=" flex items-end justify-between gap-4 p-3 w-full">
        <button
          onClick={editHandler}
          className="flex items-center justify-center w-1/2  bg-white cursor-pointer h-10 rounded-lg text-normal border border-solid border-[rgb(0_168_0)] text-[rgb(0_168_0)]"
        >
          ویرایش
        </button>
        <button
          onClick={deleteHandler}
          className="flex items-center justify-center w-1/2  bg-white cursor-pointer h-10 rounded-lg text-normal border border-solid border-[#db0505] text-[#db0505]"
        >
          حدف آگهی
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardCard;
