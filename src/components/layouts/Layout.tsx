import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className=" min-h-[450px]">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
