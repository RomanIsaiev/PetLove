import { instance } from "../../axios";

export const getCurrentUser = async () => {
  try {
    const response = await instance.get("/users/current");
    return response;
  } catch (error) {
    console.log(error);
  }
};
