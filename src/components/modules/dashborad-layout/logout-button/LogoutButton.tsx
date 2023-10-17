"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  return (
    <button
      className="flex bg-none border-none mt-5 w-full text-right text-base text-[rgb(219_5_5)] cursor-pointer"
      onClick={() => signOut()}
    >
      <FiLogOut className=" text-[1.2rem] ml-1 text-[rgb(219_5_5)]" />
      خروج
    </button>
  );
};

export default LogoutButton;
