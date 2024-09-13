import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "../components/UI/Container/Container";
import { Header } from "../components/Header/Header";

import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <ToastContainer autoClose={3000} position="top-right" />
    </>
  );
};
