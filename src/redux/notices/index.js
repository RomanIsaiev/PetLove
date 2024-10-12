import { toast } from "react-toastify";
import { instance } from "../../axios";

export const getNotices = async (
  page = 1,
  keyword = "",
  category = "",
  species = "",
  location = "",
  price = false,
  popularity = false,
  sex = ""
) => {
  const queryParams = [
    `page=${page}`,
    keyword && `keyword=${keyword}`,
    category && `category=${category}`,
    species && `species=${species}`,
    location && `locationId=${location}`,
    price && `byPrice=${price}`,
    popularity && `byPopularity=${popularity}`,
    sex && `sex=${sex}`,
  ]
    .filter(Boolean)
    .join("&");

  const { data } = await instance.get(`/notices?${queryParams}`);
  return data;
};

export const getNoticeById = async (id) => {
  try {
    return await instance.get(`/notices/${id}`);
  } catch (error) {
    error;
  }
};

export const addFavorite = async (id) => {
  try {
    const response = await instance.post(`/notices/favorites/add/${id}`);
    toast.success("Successful add to favorite");
    return response;
  } catch (error) {
    console.log(error);

    if (error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("This id is not valid");
          break;
        case 404:
          toast.error("This notice is not found in notices");
          break;
        case 409:
          toast.error(
            "This notice has already added to user's favorite notices"
          );
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          toast.error("An error occurred. Please try again.");
      }
    } else if (error.request) {
      toast.error(
        "The server is currently unavailable. Please check your internet connection and try again."
      );
    } else {
      toast.error("An error occurred while logging in. Please try again.");
    }
  }
};

export const removeFavorite = async (id) => {
  try {
    const response = await instance.delete(`/notices/favorites/remove/${id}`);
    toast.success("Successful remove to favorite");
    return response;
  } catch (error) {
    console.log(error);

    if (error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("This id is not valid");
          break;
        case 404:
          toast.error("This notice is not found in notices");
          break;
        case 409:
          toast.error("You aren't owner of this pet");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          toast.error("An error occurred. Please try again.");
      }
    } else if (error.request) {
      toast.error(
        "The server is currently unavailable. Please check your internet connection and try again."
      );
    } else {
      toast.error("An error occurred while logging in. Please try again.");
    }
  }
};
