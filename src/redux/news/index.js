import { instance } from "../../axios";

export const getNews = async () => {
  const page = 1;
  const limit = 6;
  const keyword = "";
  try {
    const result = await instance.get(
      `/news?page=${page}&limit=${limit}&keyword=${keyword}`
    );
    console.log(result.data);
    return result.data;
  } catch {
    return;
  }
};
