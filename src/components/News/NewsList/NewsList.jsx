import { getNews } from "../../../redux/news";

export const NewsList = () => {
  console.log(getNews());

  return <ul>NewsList</ul>;
};
