import PropTypes from "prop-types";
import { format } from "date-fns";
import cl from "./NoticesItem.module.scss";
import { addFavorite, removeFavorite } from "../../../redux/notices";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../../redux/users/current";

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

  const [isFavorite, setIsFavorite] = useState(false);
  const [userProfile, setIsUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getCurrentUser();
        setIsUserProfile(response.data);

        const isFavoritePets = response.data.noticesFavorites.some(
          (item) => item._id === _id
        );
        setIsFavorite(isFavoritePets);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
  }, [_id]);

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await removeFavorite(_id);
        setIsFavorite(false);
      } else {
        await addFavorite(_id);
        setIsFavorite(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (birthday) => {
    if (birthday) {
      return format(birthday, "dd.MM.yyyy");
    } else {
      return "Unknown";
    }
  };

  const formatPopularity = (popularity) => {
    let value = popularity;

    if (popularity > 10 && popularity <= 100) {
      value = popularity;
    } else if (popularity > 100 && popularity <= 1000) {
      value = popularity / 10;
    } else if (popularity > 1000) {
      value = popularity / 100;
    }

    return Math.round(value);
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
            openModal(data);
          }}
        >
          Learn more
        </button>
        <button
          className={cl.favBtn}
          onClick={() => {
            toggleFavorite();
          }}
        >
          <img
            src={isFavorite ? "/remove-favorite.svg" : "/unfavorite.svg"}
            alt="unfavorite icon"
          />
        </button>
      </div>
    </li>
  );
};

NoticesItem.propTypes = {
  data: PropTypes.object,
};
