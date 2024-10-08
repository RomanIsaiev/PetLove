import { Link, useLocation } from "react-router-dom";
import cl from "./UserNav.module.scss";
import { LogOutBtn } from "../LogOutBtn/LogOutBtn";

export const UserNav = ({ openModal }) => {
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className={cl.authContainer}>
      {!(location.pathname === "/") && <LogOutBtn openModal={openModal} />}
      <Link className={cl.link} to="/profile">
        <div className={cl.bgImg}>
          <img className={cl.img} src="/user.svg" alt="userImg" />
        </div>
        <p
          className={location.pathname === "/" ? cl.userNameHome : cl.userName}
        >
          {userData.name}
        </p>
      </Link>
    </div>
  );
};
