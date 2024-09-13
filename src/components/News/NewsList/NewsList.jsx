import PropTypes from "prop-types";
import { NewsItem } from "../NewsItem/NewsItem";

import cl from "./NewsList.module.scss";

export const NewsList = ({ news }) => {
  return (
    <ul className={cl.list}>
      {news.map((item) => (
        <NewsItem key={item._id} data={item} />
      ))}
    </ul>
  );
};

NewsList.propTypes = {
  news: PropTypes.array,
};
