import PropTypes from "prop-types";
import { format } from "date-fns";
import cl from "./NewsItem.module.scss";

export const NewsItem = ({ data }) => {
  const { date, imgUrl, text, title, url } = data;
  const formatDate = format(date, "MM/dd/yyyy");

  return (
    <li className={cl.item}>
      <img className={cl.image} src={imgUrl} alt={title} />
      <h3 className={cl.title}>{title}</h3>
      <p className={cl.text}>{text}</p>
      <div className={cl.dateLinkContainer}>
        <span className={cl.date}>{formatDate}</span>
        <a className={cl.link} href={url}>
          Read more
        </a>
      </div>
    </li>
  );
};

NewsItem.propTypes = {
  data: PropTypes.object,
};
