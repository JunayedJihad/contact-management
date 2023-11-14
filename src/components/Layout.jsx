import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div>
      <div className="header bg-light">
        <Header />
      </div>
      <div className="row gx-0">
        <div className="col-4">
          <Sidebar/>
        </div>
        <div className="col-8  h-[90vh] bg-gray-400">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Layout;
