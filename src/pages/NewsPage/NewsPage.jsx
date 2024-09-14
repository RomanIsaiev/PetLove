import { useEffect, useState } from "react";
import { NewsList } from "../../components/News/NewsList/NewsList";
import { Title } from "../../components/Title/Title";
import { getNews } from "../../redux/news";
import cl from "./NewsPage.module.scss";
import { SearchField } from "../../components/SearchField/SearchField";
import { Pagination } from "../../components/Pagination/Pagination";

export const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleQuerySubmit = (searchQuery) => {
    setNews([]);
    setPage(1);
    setQuery(searchQuery);
  };

  const handleClearQuery = () => {
    setQuery("");
    setPage(1);
  };

  const pageSelector = (page) => {
    setPage(page);
  };

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        setIsLoading(true);
        await getNews(query, page).then((response) => {
          setTotalPages(response.totalPages);
          if (!response.results.length) {
            return;
          }
          setNews(response.results);
        });
      } catch (error) {
        return error.message;
      } finally {
        setIsLoading(false);
      }
    }

    componentDidUpdate();
  }, [query, page]);

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
        {totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPage={totalPages}
            pageSelector={pageSelector}
          />
        )}
      </div>
    </section>
  );
};
