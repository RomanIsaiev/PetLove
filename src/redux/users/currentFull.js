import { instance } from "../../axios";

export const getCurrentUserFull = async () => {
  try {
    const response = await instance.get("/users/current/full");
    return response;
  } catch (error) {
    console.log(error);
  }
};
