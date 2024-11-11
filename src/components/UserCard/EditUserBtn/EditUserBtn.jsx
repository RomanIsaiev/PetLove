import cl from "./EditUserBtn.module.scss";

export const EditUserBtn = ({ isOpen }) => {
  return (
    <button className={cl.editBtn} onClick={isOpen}>
      <img src="./edit.svg" alt="edit" width="18" height="18" />
    </button>
  );
};
