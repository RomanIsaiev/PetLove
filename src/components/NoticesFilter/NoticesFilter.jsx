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

  // const selectValue = (event) => {
  //   if (event.target.hasAttribute("data-radio")) {
  //     setCurrentValue(event.target.dataset.radio);
  //   }
  // };

  // console.log("currentValue", currentValue);
  // switch (currentValue) {
  //   case "popular":
  //     currentValue === "popular" ? getPopular(false) : getPopular(true);

  //     break;
  //   case "unpopular":
  //     getPopular(true);
  //     console.log("set - Unpopular");
  //     break;
  //   case "cheap":
  //     getPrice(false);
  //     console.log("set - cheap");
  //     break;
  //   case "expensive":
  //     getPrice(true);
  //     console.log("set - expensive");
  //     break;
  // }

  // const handleButtonClick = (buttonName) => {
  //   if (currentValue === buttonName) {
  //     // Если нажимаем на уже активную кнопку, деактивируем её
  //     setCurrentValue("");
  //     if (buttonName === "popular" || buttonName === "unpopular") {
  //       getPopular(null); // Деактивируем фильтр популярности
  //     } else {
  //       getPrice(null); // Деактивируем фильтр цены
  //     }
  //   } else {
  //     // Активируем нажатую кнопку и деактивируем другие
  //     setCurrentValue(buttonName);
  //     if (buttonName === "popular") {
  //       getPopular(false); // Активируем фильтр Popular
  //     } else if (buttonName === "unpopular") {
  //       getPopular(true); // Активируем фильтр Unpopular
  //     } else if (buttonName === "cheap") {
  //       getPrice(false); // Активируем фильтр Cheap
  //     } else if (buttonName === "expensive") {
  //       getPrice(true); // Активируем фильтр Expensive
  //     }
  //   }
  // };

  const setPopular = () => {
    if (currentValue === "popular") {
      setCurrentValue("");
      getPopular(true);
    } else {
      setCurrentValue("popular");
      getPopular(false);
    }
  };

  const setUnpopular = () => {
    if (currentValue === "unpopular") {
      setCurrentValue("");
      getPopular(true);
    } else {
      setCurrentValue("unpopular");
      getPopular(true);
    }
  };

  const setCheap = () => {
    if (currentValue === "cheap") {
      setCurrentValue("");
      getPrice(false);
    } else {
      setCurrentValue("cheap");
      getPrice(true);
    }
  };

  const setExpensive = () => {
    if (currentValue === "expensive") {
      setCurrentValue("");
      getPrice(true);
    } else {
      setCurrentValue("expensive");
      getPrice(false);
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
            onClick={setPopular}
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
            onClick={setUnpopular}
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
            onClick={setCheap}
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
            onClick={setExpensive}
            data-radio="expensive"
          >
            Expensive
          </button>
        </div>
      </div>
    </div>
  );
};
