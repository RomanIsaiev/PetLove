import PropTypes from "prop-types";
import { FriendsItem } from "../FriendsItem/FriendsItem";

export const FriendsList = ({ friends }) => {
  console.log(friends);
  return (
    <ul>
      {friends.map((item) => (
        <FriendsItem key={item._id} data={item} />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.array,
};
