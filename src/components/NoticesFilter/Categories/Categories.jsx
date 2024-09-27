import { useEffect, useState } from "react";
import { getCategories } from "../../../redux/filters";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");

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

  const handlerChangeFilter = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div>
        <button></button>
      </div>
      <p>Category</p>
      <ul>
        <li>Show all</li>
        {categories.map((item, index) => (
          <li key={index} data-value={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
