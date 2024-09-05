import axios from "axios";

export const instance = axios.create({
  baseURL: "https://petlove.b.goit.study/api",
});
