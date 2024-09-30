import { instance } from "../../axios";

export const getCities = async () => {
  const { data } = await instance.get("/cities");
  return data;
};
