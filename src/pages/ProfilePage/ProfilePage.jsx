import { useEffect, useState } from "react";
import { Title } from "../../components/Title/Title";
import { UserCard } from "../../components/UserCard/UserCard";
import { getCurrentUserFull } from "../../redux/users/currentFull";

export const ProfilePage = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      try {
        await getCurrentUserFull().then((response) => {
          console.log(response.data);
          setUser(response.data);
          return response;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <section className="section">
      <div>
        <UserCard user={user} />
      </div>
    </section>
  );
};
