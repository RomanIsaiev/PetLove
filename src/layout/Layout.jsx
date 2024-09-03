import { Outlet } from "react-router-dom";
import { Container } from "../components/UI/Container/Container";
import { Header } from "../components/Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
