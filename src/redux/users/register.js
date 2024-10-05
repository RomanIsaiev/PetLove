import { instance } from "../../axios";

export const signup = async (data) => {
  try {
    await instance.post(`/users/signup`, data);
    console.log("register complete", data);
  } catch (error) {
    console.error(error);
  }
};
