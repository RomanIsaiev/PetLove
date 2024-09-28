import { useEffect, useState } from "react";
import { NoticesList } from "../../components/Notices/NoticesList/NoticesList";
import { Title } from "../../components/Title/Title";
import { getNotices } from "../../redux/notices";
import { Pagination } from "../../components/Pagination/Pagination";
import cl from "./NoticesPage.module.scss";
import { NoticesFilter } from "../../components/NoticesFilter/NoticesFilter";
import { set } from "date-fns";
export const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(true);
  const [popularity, setPopularity] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const pageSelector = (page) => {
    setPage(page);
  };

  const getKeyword = (value) => {
    setPage(1);
    setKeyword(value);
  };

  const clearKeyword = () => {
    setKeyword("");
    setPage(1);
  };

  const getCategory = (value) => {
    setCategory(value);
  };

  const getGender = (value) => {
    setGender(value);
  };

  const getSpecies = (value) => {
    setSpecies(value);
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
          popularity,
          gender
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
  }, [keyword, page, category, species, location, price, popularity, gender]);

  return (
    <section className={cl.section}>
      <div>
        <div className={cl.title}>
          <Title pageTitle="Find your favorite pet" />
        </div>
        <div>
          <NoticesFilter
            getKeyword={getKeyword}
            clearKeyword={clearKeyword}
            getCategory={getCategory}
            getGender={getGender}
            getSpecies={getSpecies}
          />
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
