import PropTypes from "prop-types";
import { format } from "date-fns";
import cl from "./NoticesItem.module.scss";
import { addFavorite, removeFavorite } from "../../../redux/notices";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../../redux/users/current";
import { useFavorites } from "../FavoritesContext/FavoritesContext";

export const NoticesItem = ({ data, openModal }) => {
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
    _id,
  } = data;

  const userData = localStorage.getItem("userData");

  const { isFavorite, toggleFavorite } = useFavorites();
  const favoriteIcon = isFavorite(_id)
    ? "/remove-favorite.svg"
    : "/unfavorite.svg";

  const formatDate = (birthday) => {
    return birthday ? format(birthday, "dd.MM.yyyy") : "Unknown";
  };

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
    <li className={cl.item}>
      <img className={cl.image} src={imgURL} alt={title} />
      <div className={cl.infoContainer}>
        <div className={cl.titleContainer}>
          <h3 className={cl.title}>{title}</h3>
          <div className={cl.ratingContainer}>
            <img src="/rating-star-active.svg" alt="rating star" />
            <span className={cl.rating}>{formatPopularity(popularity)}</span>
          </div>
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
          <li className={cl.infoItem}>
            <span>Category</span> {category}
          </li>
        </ul>
        <p className={cl.comment}>{comment}</p>
      </div>
      <div className={cl.btnContainer}>
        <button
          className={cl.learnMore}
          onClick={() => {
            openModal(_id);
          }}
        >
          Learn more
        </button>
        <button
          className={cl.favBtn}
          onClick={() => (userData ? toggleFavorite(data) : openModal(data))}
        >
          <img
            src={favoriteIcon}
            alt={isFavorite(_id) ? "remove favorite" : "add to favorite"}
          />
        </button>
      </div>
    </li>
  );
};

NoticesItem.propTypes = {
  data: PropTypes.object,
};
