import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import cl from "./LogOutBtn.module.scss";

export const LogOutBtn = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userData");
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <button
      className={location.pathname === "/" ? cl.logOutHome : cl.logOut}
      onClick={logout}
    >
      Log out
    </button>
  );
};
