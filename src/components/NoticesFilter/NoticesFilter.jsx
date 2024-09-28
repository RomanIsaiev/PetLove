import { SearchField } from "../SearchField/SearchField";
import { Categories } from "./Categories/Categories";
import cl from "./NoticesFilter.module.scss";

export const NoticesFilter = ({ getKeyword, clearKeyword, getCategory }) => {
  return (
    <div className={cl.container}>
      <div>
        <SearchField onSubmit={getKeyword} onClear={clearKeyword} />
        <Categories getCategory={getCategory} />
      </div>
    </div>
  );
};
