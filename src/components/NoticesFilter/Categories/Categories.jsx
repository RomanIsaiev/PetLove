import { useEffect, useState } from "react";
import { getCategories } from "../../../redux/filters";
import cl from "../Dropdown.module.scss";

export const Categories = ({ getCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    async function componentDidMount() {
      try {
        await getCategories().then((response) => {
          setCategories(response);
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
      getCategory(selected);
      setSelectedItem(selected);
    }
  };

  return (
    <div className={cl.container}>
      <div className={cl.titleBox} onClick={toggleDropdown}>
        <p className={cl.title}>Category</p>
        <img
          className={isDropdownOpen ? `${cl.icon}` : null}
          src="/arrow-down.svg"
          alt=""
        />
      </div>
      {isDropdownOpen && (
        <ul className={cl.list} onClick={selectCategory}>
          <li
            className={`${cl.listItem} ${!selectedItem && "isActiveFilter"}`}
            data-value={""}
          >
            Show all
          </li>
          {categories.map((item, index) => (
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
