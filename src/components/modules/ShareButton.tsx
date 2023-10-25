"use client";
import { LuShare2 } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const ShareButton = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <>
      <CopyToClipboard
        text={url}
        onCopy={() => toast.success("آدرس صفحه آگهی کپی شد")}
      >
        <div className="flex items-center justify-center cursor-pointer shadow-md shadow-[#403ffe4a] rounded-lg py-3 my-5">
          <LuShare2 className=" ml-3 text-[1.2rem] text-meBlue" />
          <button className="text-normal text-gray-700 h-5 transition-all ease-in duration-100 cursor-pointer hover:text-meBlue ">
            اشتراک گذاری
          </button>
        </div>
      </CopyToClipboard>
      <Toaster />
    </>
  );
};

export default ShareButton;
