import { instance } from "../../axios";

export const getCategories = async () => {
  const { data } = await instance.get("/notices/categories");
  return data;
};
