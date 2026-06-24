import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/authStore";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export default function LogoutForm() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="w-full flex items-center justify-center gap-2 text-red-600 border-red-300 hover:bg-red-50 hover:text-red-700 transition-colors"
    >
      <LogOut className="h-4 w-4" />
      Log out
    </Button>
  );
}