import React from "react";
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import "./Layout.css";

const Layout = ({
  children,
  title = "Dashboard",
  activeMenu = "Dashboard",
  user = "Admin",
}) => {
  return (
    <div className="layout-container">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} />

      {/* Main Content */}
      <div className="layout-main">
        {/* Header */}
        <Header title={title} user={user} />

        {/* Page Content */}
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

