import PropTypes from "prop-types";
import { format } from "date-fns";
import cl from "./NoticesItem.module.scss";

export const NoticesItem = ({ data }) => {
  const {
    birthday,
    category,
    comment,
    imgURL,
    location,
    name,
    popularity,
    sex,
    species,
    title,
  } = data;

  const formatDate = (birthday) => {
    if (birthday) {
      return format(birthday, "dd.MM.yyyy");
    } else {
      return "Unknown";
    }
  };

  return (
    <li className={cl.item}>
      <img className={cl.image} src={imgURL} alt={title} />
      <div className={cl.infoContainer}>
        <div className={cl.titleContainer}>
          <h3 className={cl.title}>{title}</h3>
          <div>
            <span className={cl.rating}>{Math.round(popularity / 1000)}</span>
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
        <button className={cl.learnMore}>Learn more</button>
        <button className={cl.favBtn}>Fav</button>
      </div>
    </li>
  );
};

NoticesItem.propTypes = {
  data: PropTypes.object,
};
