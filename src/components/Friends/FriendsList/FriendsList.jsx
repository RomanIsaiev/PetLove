import PropTypes from "prop-types";
import { FriendsItem } from "../FriendsItem/FriendsItem";
import cl from "./FriendsList.module.scss";

export const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={cl.list}>
      {friends.map((item) => (
        <FriendsItem key={item._id} data={item} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};
