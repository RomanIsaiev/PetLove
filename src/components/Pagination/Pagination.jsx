import cl from "./Pagination.module.scss";

export const Pagination = ({ currentPage, totalPage, pageSelector }) => {
  const firstPage = () => {
    pageSelector(1);
  };

  const lastPage = () => {
    pageSelector(totalPage);
  };

  const prevPage = () => {
    if (currentPage === 1) {
      return;
    }

    pageSelector(currentPage - 1);
  };

  const nextPage = () => {
    pageSelector(currentPage + 1);
  };

  const doubleNextPage = () => {
    pageSelector(currentPage + 2);
  };

  return (
    <div className={cl.pagContainer}>
      <button
        className={`${cl.baseBtn}  ${cl.arrows} ${
          currentPage === 1 && cl.disabledBtn
        }`}
        disabled={currentPage === 1}
        onClick={firstPage}
      >
        &#60;&#60;
      </button>
      <button
        className={`${cl.baseBtn} ${currentPage === 1 && cl.disabledBtn}`}
        disabled={currentPage === 1}
        onClick={prevPage}
      >
        &#60;
      </button>
      {currentPage > 1 && (
        <button className={`${cl.baseBtn}`} onClick={prevPage}>
          {currentPage - 1}
        </button>
      )}
      <button className={`${cl.currentPage} ${cl.baseBtn}`}>
        {currentPage}
      </button>
      {currentPage !== totalPage && (
        <button className={`${cl.baseBtn}`} onClick={nextPage}>
          {currentPage + 1}
        </button>
      )}
      {currentPage === 1 && (
        <button className={`${cl.baseBtn}`} onClick={doubleNextPage}>
          {currentPage + 2}
        </button>
      )}
      {totalPage > 1 && currentPage !== totalPage && (
        <div className={cl.baseBtn}>
          <span className={cl.dots}>...</span>
        </div>
      )}
      <button
        className={`${cl.baseBtn} ${
          currentPage === totalPage && cl.disabledBtn
        }`}
        onClick={nextPage}
      >
        &#62;
      </button>
      <button
        className={`${cl.baseBtn} ${cl.arrows} ${
          currentPage === totalPage && cl.disabledBtn
        }`}
        onClick={lastPage}
      >
        &#62; &#62;
      </button>
    </div>
  );
};
