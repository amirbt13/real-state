import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { category } from "src/data/category";

const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <p className="flex text-[1.2rem] font-normal">
        <HiFilter className=" ml-1 text-[1.3rem] text-meBlue" />
        دسته بندی
      </p>
      <Link className=" text-gray-900 m-1 text-lg" href={"/buy-residentials"}>
        همه
      </Link>
      <ul className="flex flex-col">
        {category.map((c, i) => (
          <Link
            className="text-gray-600 m-1"
            key={i}
            href={{
              pathname: "/buy-residentials",
              query: { category: c.name },
            }}
          >
            {c.pname}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
