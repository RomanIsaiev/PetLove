import { instance } from "../../axios";

export const getFriends = async () => {
  const { data } = await instance.get("/friends");
  return data;
};
