import CategoryCard from "@/modules/home/CategoryCard";
import { FaCity } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

const HomePage = () => {
  const services = ["خرید", "فروش", "اجاره", "رهن"];
  const cities = [
    "تهران",
    "مشهد",
    "اصفهان",
    "تبریز",
    "شیراز",
    "اهواز",
    "خرم‌آباد",
    "چالوس",
  ];
  return (
    <div>
      <div className="flex justify-center items-center rounded-xl p-5 my-24">
        <div className="w-full text-center text-meBlue">
          <h1 className=" font-bold text-5xl mb-8">سامانه خرید و اجاره ملک</h1>
          <ul className=" list-none flex justify-center flex-wrap">
            {services.map((s, i) => (
              <li
                className="flex items-center w-20 m-3 bg-[#bbdefb] py-[5px] px-[10px] rounded-md"
                key={i}
              >
                <FiCircle />
                <span className="font-normal mr-1 h-5">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between flex-wrap my-12">
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="ویلا" name="villa" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر" name="office" />
      </div>
      <div className=" my-24">
        <h3 className=" font-semibold text-[2rem] text-center text-meBlue">
          شهر های پر بازدید
        </h3>
        <ul className=" grid grid-cols-4 mt-12 list-none justify-items-center">
          {cities.map((c, i) => (
            <li
              className="bg-[#bbdefb] text-meBlue text-[1.2rem] w-60 my-2 flex justify-center items-center p-3  rounded-xl"
              key={i}
            >
              <FaCity />
              <span className=" h-7 mr-4 font-normal ">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
