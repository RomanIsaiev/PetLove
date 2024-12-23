import { useEffect, useState } from "react";
import { NoticesList } from "../../components/Notices/NoticesList/NoticesList";
import { Title } from "../../components/Title/Title";
import { getNotices } from "../../redux/notices";
import { Pagination } from "../../components/Pagination/Pagination";
import cl from "./NoticesPage.module.scss";
import { NoticesFilter } from "../../components/NoticesFilter/NoticesFilter";
import { ModalAttention } from "../../components/Modals/ModalAttention/ModalAttention";
import { ModalNotice } from "../../components/Modals/ModalNotice/ModalNotice";

export const NoticesPage = () => {
  const [notices, setNotices] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(false);
  const [popularity, setPopularity] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemId, setItemId] = useState("");

  const userData = JSON.parse(localStorage.getItem("userData"));

  const getKeyword = (value) => {
    setPage(1);
    setKeyword(value);
  };

  const clearKeyword = () => {
    setKeyword("");
    setPage(1);
  };

  const openModal = (id) => {
    setItemId(id);
    setIsModalOpen(true);
  };

  const closeModal = (event) => {
    if (event.target.hasAttribute("data-area")) {
      setIsModalOpen(false);
    }
    setItemId("");
  };

  useEffect(() => {
    const fetchNotice = async () => {
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
          if (!response.results) {
            return;
          }
          setNotices(response.results);
        });
      } catch (error) {
        return console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotice();
  }, [keyword, page, category, species, location, price, popularity, gender]);

  return (
    <section className="section">
      <div>
        <div className={cl.title}>
          <Title pageTitle="Find your favorite pet" />
        </div>
        <div>
          <NoticesFilter
            getKeyword={getKeyword}
            clearKeyword={clearKeyword}
            getCategory={setCategory}
            getGender={setGender}
            getSpecies={setSpecies}
            getLocation={setLocation}
            getPopular={setPopularity}
            getPrice={setPrice}
          />
        </div>
        <NoticesList notices={notices} openModal={openModal} />
        <Pagination
          currentPage={page}
          totalPage={totalPages}
          pageSelector={setPage}
        />
        {userData ? (
          <ModalNotice isOpen={isModalOpen} onClose={closeModal} id={itemId} />
        ) : (
          <ModalAttention isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
    </section>
  );
};
