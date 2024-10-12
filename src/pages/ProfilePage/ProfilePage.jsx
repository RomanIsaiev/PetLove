import { useEffect } from "react";
import { Title } from "../../components/Title/Title";
import { getCurrentUser } from "../../redux/users/current";

export const ProfilePage = () => {
  useEffect(() => {
    const getUserData = async () => {
      try {
        await getCurrentUser().then((response) => {
          console.log(response.data);
          return response;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <Title pageTitle="Profile" />
    </div>
  );
};
