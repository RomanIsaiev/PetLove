import { Link, NavLink, useLocation } from "react-router-dom";
import { Container } from "../UI/Container/Container";

import cl from "./Header.module.scss";

export const Header = () => {
  const location = useLocation();
  return (
    <header className={cl.header}>
      <Container>
        <div
          className={
            location.pathname === "/"
              ? cl.headerContainerHome
              : cl.headerContainer
          }
        >
          <Link to="/">
            {location.pathname === "/" ? (
              <img src="/logo-white.svg" alt="logo" />
            ) : (
              <img src="/logo.svg" alt="logo" />
            )}
          </Link>
          <nav className={cl.navContainer}>
            <NavLink
              className={
                location.pathname === "/" ? cl.navItemHome : cl.navItem
              }
              to="/news"
            >
              News
            </NavLink>
            <NavLink
              className={
                location.pathname === "/" ? cl.navItemHome : cl.navItem
              }
              to="/notices"
            >
              Find pet
            </NavLink>
            <NavLink
              className={
                location.pathname === "/" ? cl.navItemHome : cl.navItem
              }
              to="/friends"
            >
              Our friends
            </NavLink>
          </nav>
          <div className={cl.authContainer}>
            <NavLink
              className={
                location.pathname === "/" ? cl.authLoginHome : cl.authLogin
              }
              to="login"
            >
              Log in
            </NavLink>
            <NavLink
              className={
                location.pathname === "/" ? cl.authRegHome : cl.authReg
              }
              to="register"
            >
              Registration
            </NavLink>
          </div>
        </div>
      </Container>
    </header>
  );
};
