import { NavLink, useLocation } from "react-router-dom";
import cl from "./Nav.module.scss";

export const Nav = () => {
  const location = useLocation();
  return (
    <nav className={cl.navContainer}>
      <NavLink
        className={location.pathname === "/" ? cl.navItemHome : cl.navItem}
        to="/news"
      >
        News
      </NavLink>
      <NavLink
        className={location.pathname === "/" ? cl.navItemHome : cl.navItem}
        to="/notices"
      >
        Find pet
      </NavLink>
      <NavLink
        className={location.pathname === "/" ? cl.navItemHome : cl.navItem}
        to="/friends"
      >
        Our friends
      </NavLink>
    </nav>
  );
};
