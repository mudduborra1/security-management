import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth"); // 🔓 clear session
    navigate("/", { replace: true }); // redirect to login
  };

  return <button onClick={handleLogout}>Logout</button>;
}