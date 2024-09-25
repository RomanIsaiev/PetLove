import { useEffect, useState } from "react";
import { NoticesList } from "../../components/Notices/NoticesList/NoticesList";
import { Title } from "../../components/Title/Title";
import { getNotices } from "../../redux/notices";
import { Pagination } from "../../components/Pagination/Pagination";

export const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(true);
  const [popularity, setPopularity] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const pageSelector = (page) => {
    setPage(page);
  };

  useEffect(() => {
    async function componentDidUpdate() {
      try {
        setIsLoading(true);
        await getNotices(
          page,
          keyword,
          category,
          species,
          location,
          price,
          popularity
        ).then((response) => {
          setTotalPages(response.totalPages);
          if (!response.results.length) {
            return;
          }
          setNotices(response.results);
        });
      } catch (error) {
        return error.message;
      } finally {
        setIsLoading(false);
      }
    }

    componentDidUpdate();
  }, [keyword, page, category, species, location, price, popularity]);

  return (
    <section>
      <div>
        <Title pageTitle="Find your favorite pet" />
        <div>
          <h3>FILTERS</h3>
        </div>
        <NoticesList notices={notices} />
        <Pagination
          currentPage={page}
          totalPage={totalPages}
          pageSelector={pageSelector}
        />
      </div>
    </section>
  );
};
