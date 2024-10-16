import PropTypes from "prop-types";
import { NoticesItem } from "../NoticesItem/NoticesItem";
import cl from "./NoticesList.module.scss";

export const NoticesList = ({ notices, openModal }) => {
  console.log(notices);

  return (
    <ul className={cl.list}>
      {notices.map((item) => (
        <NoticesItem key={item._id} data={item} openModal={openModal} />
      ))}
    </ul>
  );
};

NoticesList.propTypes = {
  notices: PropTypes.array,
};
