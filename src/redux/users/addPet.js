import { instance } from "../../axios";

export const addPet = async () => {
  try {
    const response = await instance.get("/users/current/pets/add");
    return response;
  } catch (error) {
    console.log(error);
  }
};
