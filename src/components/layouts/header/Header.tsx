import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

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

      <Link
        href="/signin"
        className={`flex items-center bg-white text-meBlue hover:bg-meBlue hover:text-white transition-all ease-in duration-100 rounded-lg py-1 px-3`}
      >
        <FiLogIn className={`text-2xl`} />
        <span className={`mr-1`}>ورود</span>
      </Link>
    </header>
  );
};

export default Header;
