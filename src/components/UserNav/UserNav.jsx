import { Link } from "react-router-dom";
import cl from "./UserNav.module.scss";
import { LogOutBtn } from "../LogOutBtn/LogOutBtn";

export const UserNav = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className={cl.authContainer}>
      <LogOutBtn />
      <Link className={cl.link} to="/profile">
        <div className={cl.bgImg}>
          <img className={cl.img} src="/user.svg" alt="userImg" />
        </div>
        <p className={cl.userName}>{userData.name}</p>
      </Link>
    </div>
  );
};
