import ItemList from "@/modules/ItemList";
import ShareButton from "@/modules/ShareButton";
import { e2p, sp } from "@/utils/replaceNumbers";
import { AiOutlinePhone } from "react-icons/ai";
import { BiCalendarCheck, BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { SiHomebridge } from "react-icons/si";
import { category } from "src/data/category";

import { BProfile } from "src/types/Profile";

interface Props {
  data: { profile: BProfile } | { error: string };
}

const ProfileDetailsPage: React.FC<Props> = ({ data }) => {
  if ("error" in data) <h1>{data.error}</h1>;
  if ("profile" in data) {
    const { profile } = data;
    let icon;
    switch (profile.category) {
      case "villa":
        icon = <RiHome3Line />;
        break;
      case "apartment":
        icon = <MdApartment />;
        break;
      case "store":
        icon = <BiStore />;
        break;
      case "office":
        icon = <GiOfficeChair />;
        break;
      default:
        break;
    }
    let thisCategory = category.filter(
      (item) => item.name === profile.category
    );

    return (
      <div className="flex mt-16">
        <div className="@main@ w-full">
          <h1 className=" text-meBlue text-xl font-normal mb-3">
            {profile.title}
          </h1>
          <span className="flex items-start h-4 mb-12 text-gray-700">
            <HiOutlineLocationMarker className=" text-[1.2rem] ml-1" />
            {profile.location}
          </span>
          <h3 className=" text-meBlue text-lg font-normal border-b border-solid border-slate-300 mb-5 pb-2">
            توضیحات
          </h3>
          <p className=" text-justify mb-12">{profile.description}</p>
          <h3 className=" text-meBlue text-lg font-normal border-b border-solid border-slate-300 mb-5 pb-2">
            امکانات رفاهی
          </h3>
          <ItemList data={profile.amenities} />
          <h3 className=" text-meBlue text-lg font-normal border-b border-solid border-slate-300 mb-5 pb-2">
            قوانین
          </h3>
          <ItemList data={profile.rules} />
        </div>
        <div className="@sidebar@ w-[250px] mr-10">
          <div className=" shadow-md shadow-[#304ffe4a] p-[10px] rounded-xl mb-5 flex flex-col items-center">
            <SiHomebridge className=" text-5xl text-meBlue mt-[10px] mb-5" />
            <p className=" text-lg font-normal">املاک {profile.realState}</p>
            <span className="flex items-center text-gray-700 mt-5">
              <AiOutlinePhone className=" text-[1.4rem] m-0 ml-1 text-gray-700" />
              {e2p(profile.phone)}
            </span>
          </div>
          <ShareButton />
          <div className=" shadow-md shadow-[#304ffe4a] p-[10px] rounded-xl mb-5 flex flex-col items-center pt-5 ">
            <p className="flex items-center gap-1 text-gray-700 mb-5 h-5">
              {icon}
              {thisCategory[0].pname}
            </p>
            <p className="flex items-center text-gray-700 mb-5 h-5">
              {sp(profile.price)} تومان
            </p>
            <p className="flex items-center text-gray-700 mb-5 h-5">
              <BiCalendarCheck className="text-[1.5rem] ml-[5px] text-meBlue" />
              {new Date(profile.construction).toLocaleDateString("fa-IR")}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileDetailsPage;
