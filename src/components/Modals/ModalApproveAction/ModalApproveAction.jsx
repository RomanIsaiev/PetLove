import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import modal from "../generalModalStyles.module.scss";
import cl from "./ModalApproveAction.module.scss";

export const ModalApproveAction = ({ isOpen, onClose, setIsModal }) => {
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const logout = () => {
    localStorage.removeItem("userData");
    toast.info("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className={modal.modalOverlay}>
      <div className={modal.modalContentApprove}>
        <button
          className={modal.closeBtn}
          onClick={onClose}
          data-area="closeBtn"
        >
          <img src="/close-modal.svg" alt="close" data-area="closeBtn" />
        </button>
        <div className={cl.imgBox}>
          <img
            className={cl.image}
            src="/approve-modal-img-1x.png"
            alt="emoji dog"
          />
        </div>
        <p className={cl.text}>Already leaving?</p>
        <div className={cl.btnsContainer}>
          <button
            className={`${cl.btnBase} ${cl.approveBtn}`}
            onClick={() => {
              logout();
              setIsModal(false);
            }}
            type="button"
          >
            Yes
          </button>
          <button
            className={`${cl.btnBase}`}
            onClick={onClose}
            type="button"
            data-area="closeBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
