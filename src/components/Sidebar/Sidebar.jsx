import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  ShieldUser,
  ClipboardCheck,
  CalendarCheck,
  Menu,
  LogOutIcon,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Guards", path: "/guards", icon: ShieldUser },
  { name: "Attendance", path: "/attendance", icon: ClipboardCheck },
  { name: "Shifts", path: "/shifts", icon: CalendarCheck }
];

export default function Sidebar({ collapsed, onToggle }) {

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {

    // Remove auth
    localStorage.removeItem("auth");

    // Redirect login page
    navigate("/", { replace: true });

  };


  return (
    <aside
      className={cn(
        "h-screen flex flex-col border-r bg-white dark:bg-gray-900 transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className="h-16 flex items-center justify-center border-b"
      >
        <Menu size={20} />
      </button>

      {/* Menu */}
      <nav className="flex flex-col flex-1 p-2 gap-1">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center w-full gap-3 px-3 py-2 rounded-lg text-sm font-medium",
                "transition-all hover:bg-gray-100 dark:hover:bg-gray-800",
                location.pathname === item.path &&
                  "bg-gray-200 dark:bg-gray-800"
              )}
            >
              <span className="flex items-center justify-center w-6 h-6 shrink-0">
                <Icon size={18} />
              </span>

              {!collapsed && (
                <span className="leading-none truncate">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

     {/* Footer */}
<div className="p-3 border-t border-gray-200 dark:border-gray-700">

  <Link
    to="/"
    onClick={handleLogout}
    className="
      flex
      items-center
      gap-3
      px-3
      py-2.5
      rounded-xl
      text-sm
      font-medium
      text-red-500
      hover:bg-red-50
      dark:hover:bg-red-900/20
      transition-all
      duration-200
      cursor-pointer
    "
  >
    {/* Icon */}
<span className="flex items-center justify-center w-6 h-6 shrink-0">
  <LogOutIcon size={18} />
</span>

{/* Text */}
{!collapsed && (
  <span className="truncate font-semibold">
    Logout
  </span>
)}
  </Link>

</div>
    </aside>
  );
}