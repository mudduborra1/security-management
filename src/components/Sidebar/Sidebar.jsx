import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  FaHome,
  FaUserShield,
  FaClipboardCheck,
  FaCalendarCheck,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {

  const navigate = useNavigate();

  // ✅ current route location
  const location = useLocation();

  // logout
  const handleLogout = () => {
    localStorage.removeItem("auth");

    navigate("/", { replace: true });
  };

  // menu items
  const menuItems = [
    {
      pagename: "Dashboard",
      pathname: "/dashboard",
      faicon: FaHome,
    },
    {
      pagename: "Guards",
      pathname: "/guards",
      faicon: FaUserShield,
    },
    {
      pagename: "Attendance",
      pathname: "/attendance",
      faicon: FaClipboardCheck,
    },
    {
      pagename: "Shifts",
      pathname: "/shifts",
      faicon: FaCalendarCheck,
    },
    {
      pagename: "Incidents",
      pathname: "/incidents",
      faicon: FaCalendarCheck,
    },
    {
      pagename: "Sites",
      pathname: "/sites",
      faicon: FaCalendarCheck,
    },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <h2>BPDSS</h2>
      </div>

      <nav className="sidebar-nav">
        <ul>

          {menuItems.map((item, index) => (

            <li
              key={index}
              className={
                location.pathname === item.pathname
                  ? "active"
                  : ""
              }
            >

              <Link to={item.pathname} className="menu-lnk">

                <item.faicon />

                <span style={{ marginLeft: "10px" }}>
                  {item.pagename}
                </span>

              </Link>

            </li>

          ))}

        </ul>
      </nav>

      {/* footer */}
      <div className="sidebar-footer">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;