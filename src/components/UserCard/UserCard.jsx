import { useState } from "react";
import { EditUserBtn } from "./EditUserBtn/EditUserBtn";
import { UserBlock } from "./UserBlock/UserBlock";
import cl from "./UserCard.module.scss";
import { ModalEditUser } from "../Modals/ModalEditUser/ModalEditUser";

export const UserCard = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (event) => {
    if (event.target.hasAttribute("data-area")) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className={cl.userCard}>
      <div className={cl.userLabel}>
        <p>User</p>
        <img src="./user-white.svg" alt="user" width="18" height="18" />
      </div>
      <EditUserBtn isOpen={openModal} />
      <UserBlock user={user} isOpen={openModal} />

      <ModalEditUser isOpen={isModalOpen} onClose={closeModal} user={user} />
    </div>
  );
};
