import HeaderControls from "@/modules/header/header-controls/HeaderControls";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`flex items-center justify-between p-5 my-5 rounded-lg bg-meBlue text-white`}
    >
      <div>
        <ul className={` list-none flex`}>
          <li className={`ml-8 sm:ml-2`}>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className={`ml-8`}>
            <Link href="/buy-residentials">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <HeaderControls />
    </header>
  );
};

export default Header;
