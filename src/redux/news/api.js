import axios from "axios";

axios.get("/news").then((data) => {
  console.log(data);
  return data;
});

// export const getNews = create
