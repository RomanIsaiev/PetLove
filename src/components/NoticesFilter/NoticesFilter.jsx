import { SearchField } from "../SearchField/SearchField";
import { Categories } from "./Categories/Categories";

export const NoticesFilter = ({ getKeyword, clearKeyword }) => {
  const getValue = (value) => {
    console.log(value);
    getKeyword(value);
  };

  const clearValue = () => {
    clearKeyword();
  };

  return (
    <div>
      <SearchField onSubmit={getValue} onClear={clearValue} />
      <Categories />
    </div>
  );
};
