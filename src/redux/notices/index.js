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
