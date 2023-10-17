"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";

const HeaderControls = () => {
  const { data } = useSession();
  // console.log(data);
  return (
    <>
      {data ? (
        <Link
          href="/dashboard"
          className={`flex items-center bg-white text-meBlue hover:bg-meBlue hover:text-white transition-all ease-in duration-100 rounded-lg py-1 px-3`}
        >
          <FaUserAlt className={`text-2xl`} />
        </Link>
      ) : (
        <Link
          href="/signin"
          className={`flex items-center bg-white text-meBlue hover:bg-meBlue hover:text-white transition-all ease-in duration-100 rounded-lg py-1 px-3`}
        >
          <FiLogIn className={`text-2xl`} />
          <span className={`mr-1`}>ورود</span>
        </Link>
      )}
    </>
  );
};

export default HeaderControls;
