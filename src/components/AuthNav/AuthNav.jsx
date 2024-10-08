import { NavLink } from "react-router-dom";
import cl from "./AuthNav.module.scss";

export const AuthNav = () => {
  return (
    <div className={cl.authContainer}>
      <NavLink
        className={location.pathname === "/" ? cl.authLoginHome : cl.authLogin}
        to="login"
      >
        Log in
      </NavLink>
      <NavLink
        className={location.pathname === "/" ? cl.authRegHome : cl.authReg}
        to="register"
      >
        Registration
      </NavLink>
    </div>
  );
};
