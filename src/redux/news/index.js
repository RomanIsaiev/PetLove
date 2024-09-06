import { instance } from "../../axios";

export const getNews = async () => {
  const page = 1;
  const limit = 6;
  const keyword = "";
  const { data } = await instance.get(
    `/news?page=${page}&limit=${limit}&keyword=${keyword}`
  );
  return data.results;
};
