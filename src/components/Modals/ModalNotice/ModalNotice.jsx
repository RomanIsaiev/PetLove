import modal from "../generalModalStyles.module.scss";
import cl from "./ModalNotice.module.scss";

export const ModalNotice = ({ isOpen, onClose, data }) => {
  if (!isOpen) {
    return null;
  }

  console.log(data);

  const {
    birthday,
    category,
    comment,
    imgURL,
    name,
    popularity,
    sex,
    species,
    title,
  } = data;

  const formatPopularity = (popularity) => {
    let value = popularity;

    if (popularity > 10 && popularity <= 100) {
      value = popularity / 10;
    } else if (popularity > 100 && popularity <= 1000) {
      value = popularity / 100;
    } else if (popularity > 1000) {
      value = popularity / 1000;
    }

    const scaledValue = value / 2;
    return Math.round(scaledValue > 5 ? 5 : scaledValue);
  };

  return (
    <div className={modal.modalOverlay}>
      <div className={modal.modelNotice}>
        <button
          className={modal.closeBtn}
          onClick={onClose}
          data-area="closeBtn"
        >
          <img src="/close-modal.svg" alt="close" data-area="closeBtn" />
        </button>
        <div className={cl.imageContainer}>
          <div className={cl.imageBox}>
            <img className={cl.img} src={imgURL} alt="" />
          </div>
          <span className={cl.category}>{category}</span>
        </div>
        <p className={cl.name}>{name}</p>
        <div></div>
      </div>
    </div>
  );
};
