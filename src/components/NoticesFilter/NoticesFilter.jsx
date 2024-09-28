import { SearchField } from "../SearchField/SearchField";
import { ByGender } from "./ByGender/ByGender";
import { Categories } from "./Categories/Categories";
import cl from "./NoticesFilter.module.scss";
import { Species } from "./Species/Species";

export const NoticesFilter = ({
  getKeyword,
  clearKeyword,
  getCategory,
  getGender,
  getSpecies,
}) => {
  return (
    <div className={cl.container}>
      <div className={cl.selectFilters}>
        <div className={cl.searchContainer}>
          <SearchField onSubmit={getKeyword} onClear={clearKeyword} />
        </div>
        <div className={cl.categoryContainer}>
          <Categories getCategory={getCategory} />
        </div>
        <div className={cl.genderContainer}>
          <ByGender getGender={getGender} />
        </div>
        <div className={cl.genderContainer}>
          <Species getSpecies={getSpecies} />
        </div>
      </div>
    </div>
  );
};
