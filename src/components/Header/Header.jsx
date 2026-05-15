import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ user = "Admin" }) => {

  // Route title mapping
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/guards": "Guards",
    "/attendance": "Attendance",
    "/shifts": "Shifts",
    "/incidents": "Incidents",
    "/sites": "Sites",
  };

  const location = useLocation();

  const title = pageTitles[location.pathname] || "Dashboard";

  return (

    

    <header className="header">
      <div className="header-left">
        <h1>{title}</h1>
      </div>

      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>

        <button className="notification-btn">
          🔔
          <span className="notification-count">3</span>
        </button>

        <div className="profile-section">
          <div className="profile-avatar">
            {user.charAt(0).toUpperCase()}
          </div>

          <div className="profile-info">
            <h4>{user}</h4>
            <p>Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;