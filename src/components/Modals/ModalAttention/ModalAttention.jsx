import { Link } from "react-router-dom";
import cl from "./ModalAttention.module.scss";

export const ModalAttention = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={cl.modalOverlay} onClick={onClose} data-area="overlay">
      <div className={cl.modalContent}>
        <button className={cl.closeBtn} onClick={onClose} data-area="closeBtn">
          <img src="/close-modal.svg" alt="close" data-area="closeBtn" />
        </button>
        <div className={cl.imgBox}>
          <img
            className={cl.image}
            src="/attention-image-1x.png"
            alt="emoji dog"
          />
        </div>
        <h3 className={cl.title}>Attention</h3>
        <p className={cl.text}>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
        <div className={cl.btnsContainer}>
          <Link to="/login" className={`${cl.logBtn} ${cl.baseBtn}`}>
            Log In
          </Link>
          <Link to="/register" className={`${cl.regBtn} ${cl.baseBtn}`}>
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
};
