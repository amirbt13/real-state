import { MdApartment } from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { BiLeftArrowAlt, BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BProfile } from "src/types/Profile";
import { sp } from "@/utils/replaceNumbers";
import Link from "next/link";

interface Props {
  profile: BProfile;
}
const Card: React.FC<Props> = ({
  profile: { title, category, price, location, _id },
}) => {
  let icon = null;
  switch (category) {
    case "villa":
      icon = (
        <RiHome3Line className=" text-3xl bg-[#304ffe58] text-meBlue p-1 rounded-md " />
      );
      break;
    case "apartment":
      icon = (
        <MdApartment className=" text-3xl bg-[#304ffe58] text-meBlue p-1 rounded-md " />
      );
      break;
    case "store":
      icon = (
        <BiStore className=" text-3xl bg-[#304ffe58] text-meBlue p-1 rounded-md " />
      );
      break;
    case "office":
      icon = (
        <GiOfficeChair className=" text-3xl bg-[#304ffe58] text-meBlue p-1 rounded-md " />
      );
      break;
  }

  return (
    <div className=" w-64 border-2 border-solid border-[#304ffe58] rounded-xl p-2 m-3">
      <div>{icon}</div>
      <p className=" font-normal my-3">{title}</p>
      <p className=" flex text-gray-700 text-sm">
        <HiOutlineLocationMarker className=" ml-1 text-base" />
        {location}
      </p>
      <span className=" text-gray-700 block text-sm font-normal mt-3">
        {sp(price)} تومان{" "}
      </span>
      <Link
        className="flex items-center justify-between mt-5 text-[0.95rem] font-normal text-meBlue"
        href={`/buy-residentials/${_id}`}
      >
        مشاهده آگهی
        <BiLeftArrowAlt className="text-[1.5rem]" />
      </Link>
    </div>
  );
};

export default Card;
