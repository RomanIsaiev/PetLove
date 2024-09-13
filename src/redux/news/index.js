import { instance } from "../../axios";

export const getNews = async (keyword = "", page = 1, limit = 6) => {
  const { data } = await instance.get(
    `/news?page=${page}&limit=${limit}&keyword=${keyword}`
  );
  console.log(data);
  return data.results;
};
