import { format } from "date-fns";

import modal from "../generalModalStyles.module.scss";
import cl from "./ModalNotice.module.scss";
import { useEffect, useState } from "react";
import { getNoticeById } from "../../../redux/notices";
import { useFavorites } from "../../Notices/FavoritesContext/FavoritesContext";

export const ModalNotice = ({ isOpen, onClose, id }) => {
  const [currentPet, setCurrentPet] = useState({});
  const { isFavorite, toggleFavorite } = useFavorites();

  console.log(id);

  const {
    birthday,
    category,
    comment,
    imgURL,
    name,
    popularity,
    sex,
    species,
    user: { email, phone } = {},
  } = currentPet;

  useEffect(() => {
    const fetchNoticeById = async () => {
      try {
        const response = await getNoticeById(id);
        setCurrentPet(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNoticeById();
  }, [id, onClose]);

  if (!isOpen) {
    return null;
  }

  const formatDate = (birthday) =>
    birthday ? format(birthday, "dd.MM.yyyy") : "Unknown";

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

  const ratingToStars = (rating) => {
    const totalStars = 5;
    return [...Array(totalStars)].map((_, index) => {
      return (
        <img
          key={index}
          src={
            index < rating
              ? "/rating-star-active.svg"
              : "/rating-star-unactive.svg"
          }
          alt={index < rating ? "Filled star" : "Empty star"}
          className="star"
        />
      );
    });
  };

  const handleFavoriteClick = () => {
    toggleFavorite(currentPet);
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
        <div className={cl.ratingContainer}>
          {ratingToStars(formatPopularity(popularity))}
          {formatPopularity(popularity)}
        </div>
        <ul className={cl.infoList}>
          <li className={cl.infoItem}>
            <span>Name</span> {name}
          </li>
          <li className={cl.infoItem}>
            <span>Birthday</span> {formatDate(birthday)}
          </li>
          <li className={cl.infoItem}>
            <span>Sex</span> {sex}
          </li>
          <li className={cl.infoItem}>
            <span>Species</span> {species}
          </li>
        </ul>
        <p className={cl.comment}>{comment}</p>
        <div className={cl.btnContainer}>
          <button
            className={`${cl.btnBase} ${cl.addBtn}`}
            onClick={handleFavoriteClick}
          >
            {isFavorite(id) ? "Remove from" : "Add to"}
            <img
              src={"heart-modal-white.svg"}
              alt={isFavorite(id) ? "remove favorite" : "add to favorite"}
            />
          </button>
          <a
            className={`${cl.btnBase}  ${cl.contactBtn}`}
            href={`mailto:${email}`}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
