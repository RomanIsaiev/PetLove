import { Link, NavLink } from "react-router-dom";
import { Container } from "../UI/Container/Container";

export const Header = () => {
  return (
    <header>
      <Container>
        <div>
          <Link to="/">
            <img src="/logo.svg" alt="logo" />
          </Link>
          <nav>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/notices">Find pet</NavLink>
            <NavLink to="/friends">Our friends</NavLink>
          </nav>
          <div>
            <NavLink to="login">Log in</NavLink>
            <NavLink to="register">Registration</NavLink>
          </div>
        </div>
      </Container>
    </header>
  );
};
