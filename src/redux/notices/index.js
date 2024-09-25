import { instance } from "../../axios";

export const getNotices = async (
  page = 1,
  keyword = "",
  category = "",
  species = "",
  location = "",
  price = false,
  popularity = false
) => {
  const { data } = await instance.get(
    `/notices?page=${page}&keyword=${keyword}&category=${category}&species=${species}&locationId=${location}&byPrice${price}&byPopularity=${popularity}`
  );
  console.log(data);
  return data;
};