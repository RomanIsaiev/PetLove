import { useEffect, useState } from "react";
import { getGenders } from "../../../redux/filters";
import cl from "../Dropdown.module.scss";
import css from "./ByGender.module.scss";

export const ByGender = ({ getGender }) => {
  const [genders, setGenders] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    async function componentDidMount() {
      try {
        await getGenders().then((response) => {
          setGenders(response);
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
      getGender(selected);
      setSelectedItem(selected);
    }
  };

  return (
    <div className={cl.container}>
      <div className={cl.titleBox} onClick={toggleDropdown}>
        <p className={cl.title}>By gender</p>
        <img
          className={isDropdownOpen ? `${cl.icon}` : null}
          src="/arrow-down.svg"
          alt=""
        />
      </div>
      {isDropdownOpen && (
        <ul className={`${cl.list} ${css.genderList}`} onClick={selectCategory}>
          <li
            className={`${cl.listItem} ${!selectedItem && "isActiveFilter"}`}
            data-value={""}
          >
            Show all
          </li>
          {genders.map((item, index) => (
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
