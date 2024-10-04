import { useState } from "react";
import { SearchField } from "../SearchField/SearchField";
import { ByGender } from "./ByGender/ByGender";
import { Categories } from "./Categories/Categories";
import { Cities } from "./Cities/Cities";
import cl from "./NoticesFilter.module.scss";
import { Species } from "./Species/Species";

export const NoticesFilter = ({
  getKeyword,
  clearKeyword,
  getCategory,
  getGender,
  getSpecies,
  getLocation,
  getPopular,
  getPrice,
}) => {
  const [currentValue, setCurrentValue] = useState("");

  const handleButtonClick = (value, type) => {
    if (currentValue === value) {
      setCurrentValue("");
      type === "popularity" ? getPopular(null) : getPrice(null);
    } else {
      setCurrentValue(value);
      if (type === "popularity") {
        getPopular(value === "popular" ? false : true);
      } else {
        getPrice(value === "cheap" ? false : true);
      }
    }
  };

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
        <div className={cl.locationContainer}>
          <Cities getLocation={getLocation} />
        </div>
      </div>
      <div className={cl.radioContainer}>
        <div className={cl.popularContainer}>
          <button
            className={`${cl.radioBtn} ${
              currentValue === "popular" && "btnActive"
            }`}
            onClick={() => handleButtonClick("popular", "popularity")}
            data-radio="popular"
          >
            Popular
          </button>
        </div>
        <div className={cl.popularContainer}>
          <button
            className={`${cl.radioBtn} ${
              currentValue === "unpopular" && "btnActive"
            }`}
            onClick={() => handleButtonClick("unpopular", "popularity")}
            data-radio="unpopular"
          >
            Unpopular
          </button>
        </div>
        <div className={cl.popularContainer}>
          <button
            className={`${cl.radioBtn} ${
              currentValue === "cheap" && "btnActive"
            }`}
            onClick={() => handleButtonClick("cheap", "price")}
            data-radio="cheap"
          >
            Cheap
          </button>
        </div>
        <div className={cl.popularContainer}>
          <button
            className={`${cl.radioBtn} ${
              currentValue === "expensive" && "btnActive"
            }`}
            onClick={() => handleButtonClick("expensive", "price")}
            data-radio="expensive"
          >
            Expensive
          </button>
        </div>
      </div>
    </div>
  );
};
