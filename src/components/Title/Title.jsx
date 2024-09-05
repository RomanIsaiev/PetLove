import PropTypes from "prop-types";
import cl from "./Title.module.scss";

export const Title = ({ pageTitle }) => {
  return <h2 className={cl.title}>{pageTitle}</h2>;
};

Title.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
