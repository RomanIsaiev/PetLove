import { instance } from "../../axios";

export const getCategories = async () => {
  const { data } = await instance.get("/notices/categories");
  return data;
};

export const getGenders = async () => {
  const { data } = await instance.get("/notices/sex");
  return data;
};

export const getSpeciesList = async () => {
  const { data } = await instance.get("/notices/species");
  return data;
};
