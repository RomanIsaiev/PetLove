import cl from "./LogOutBtn.module.scss";

export const LogOutBtn = ({ openModal }) => {
  return (
    <button
      onClick={openModal}
      className={location.pathname === "/" ? cl.logOutHome : cl.logOut}
    >
      Log out
    </button>
  );
};
