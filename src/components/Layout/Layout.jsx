import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/sidebar";
import Scrollbar from "../Scrollbar/Scrollbar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <Scrollbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
