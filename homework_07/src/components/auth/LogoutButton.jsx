import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/authStore";

export default function LogoutForm() {
  const logout = useAuthStore((state) => state.logout);
  const navigate= useNavigate();

  const handleLogout =()=>{
    logout();
    navigate("/login")
  }

  return <button onClick={handleLogout}>Log out</button>;
}