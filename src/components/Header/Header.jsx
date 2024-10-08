import { Link, useLocation } from "react-router-dom";
import { Container } from "../UI/Container/Container";

import cl from "./Header.module.scss";

import { Nav } from "../Nav/Nav";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserNav } from "../UserNav/UserNav";

export const Header = () => {
  const location = useLocation();

  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <header className={location.pathname === "/" ? cl.headerHome : cl.header}>
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
          <Nav />
          {userData ? <UserNav /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};
