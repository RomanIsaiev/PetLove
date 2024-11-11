import { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import cl from "./OurFriends.module.scss";

import { FriendsList } from "../../components/Friends/FriendsList/FriendsList";
import { getFriends } from "../../redux/friends";

export const OurFriends = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        setIsLoading(true);
        await getFriends().then((response) => {
          setFriends(response);
        });
      } catch (error) {
        return error.message;
      } finally {
        setIsLoading(false);
      }
    }

    componentDidUpdate();
  }, []);

  return (
    <section className="section">
      <div className={cl.titleContainer}>
        <Title pageTitle="Our friends" />
      </div>
      <FriendsList friends={friends} />
    </section>
  );
};
