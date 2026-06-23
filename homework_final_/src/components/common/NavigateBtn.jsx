import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export default function NavigateBtn({ path = -1, children }) {
  const navigate = useNavigate();

  return <Button onClick={() => navigate(path)}>{children}</Button>;
}