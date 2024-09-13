import { useEffect, useState } from "react";
import { NewsList } from "../../components/News/NewsList/NewsList";
import { Title } from "../../components/Title/Title";
import { getNews } from "../../redux/news";
import cl from "./NewsPage.module.scss";
import { SearchField } from "../../components/SearchField/SearchField";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuerySubmit = (searchQuery) => {
    setNews([]);
    setQuery(searchQuery);
  };

  const handleClearQuery = () => {
    setQuery("");
  };

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        setIsLoading(true);
        await getNews(query, page).then((response) => {
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
  }, [query, page]);

  console.log(news);

  return (
    <section className={cl.section}>
      <div>
        <div className={cl.titleSearchContainer}>
          <Title pageTitle="News" />
          <SearchField
            onSubmit={handleQuerySubmit}
            onClear={handleClearQuery}
          />
        </div>
        <NewsList news={news} />
      </div>
    </section>
  );
};
