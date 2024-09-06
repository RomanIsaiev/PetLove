import { useEffect, useState } from "react";
import { NewsList } from "../../components/News/NewsList/NewsList";
import { Title } from "../../components/Title/Title";
import { getNews } from "../../redux/news";
import cl from "./NewsPage.module.scss";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        setIsLoading(true);
        await getNews().then((response) => {
          if (!response.length) {
            return;
          }
          setNews(response);
        });
      } catch (error) {
        return error.message;
      } finally {
        setIsLoading(false);
      }
    }

    componentDidUpdate();
  }, []);

  console.log(news);

  return (
    <section className={cl.section}>
      <div>
        <div>
          <Title pageTitle="News" />
        </div>
        <NewsList news={news} />
      </div>
    </section>
  );
};
