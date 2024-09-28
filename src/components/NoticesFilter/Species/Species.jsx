import { useEffect, useState } from "react";
import { getSpeciesList } from "../../../redux/filters";
import cl from "../Dropdown.module.scss";
import css from "./Species.module.scss";

export const Species = ({ getSpecies }) => {
  const [species, setSpecies] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    async function componentDidMount() {
      try {
        await getSpeciesList().then((response) => {
          setSpecies(response);
        });
      } catch (error) {
        return error.message;
      }
    }

    componentDidMount();
  }, []);

  const toggleDropdown = () =>
    setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen);

  const selectCategory = (event) => {
    const selected = event.target.dataset.value;

    if (event.target.hasAttribute("data-value")) {
      getSpecies(selected);
      setSelectedItem(selected);
    }
  };

  return (
    <div className={cl.container}>
      <div className={cl.titleBox} onClick={toggleDropdown}>
        <p className={cl.title}>By type</p>
        <img
          className={isDropdownOpen ? `${cl.icon}` : null}
          src="/arrow-down.svg"
          alt=""
        />
      </div>
      {isDropdownOpen && (
        <ul
          className={`${cl.list} ${css.speciesList}`}
          onClick={selectCategory}
        >
          <li
            className={`${cl.listItem} ${!selectedItem && "isActiveFilter"}`}
            data-value={""}
          >
            Show all
          </li>
          {species.map((item, index) => (
            <li
              className={`${cl.listItem} ${
                selectedItem === item && "isActiveFilter"
              }`}
              key={index}
              data-value={item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
