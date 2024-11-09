import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCurrentUser } from "../../../redux/users/current";
import { addFavorite, removeFavorite } from "../../../redux/notices";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

const userData = localStorage.getItem("userData");

export const FavoritesProvider = ({ children }) => {
  const [userProfile, setIsUserProfile] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getCurrentUser();
        setIsUserProfile(response.data);
        setFavorites(response.data.noticesFavorites);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
  }, []);

  const toggleFavorite = async (card) => {
    try {
      const isAlreadyFavorite = favorites.some((fav) => {
        console.log(fav);

        return fav._id === card._id;
      });

      if (isAlreadyFavorite) {
        await removeFavorite(card._id);
        setFavorites((prevFavorites) =>
          prevFavorites.filter((fav) => fav._id !== card._id)
        );
      } else {
        await addFavorite(card._id);
        setFavorites((prevFavorites) => [...prevFavorites, card]);
      }
    } catch (error) {
      console.error("Failed to toggle favorite:", error);
    }
  };

  const isFavorite = (id) => favorites.some((fav) => fav._id === id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
