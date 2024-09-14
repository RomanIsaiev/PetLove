import PropTypes from "prop-types";

import { useState } from "react";
import { toast } from "react-toastify";
import cl from "./SearchField.module.scss";

export const SearchField = ({ onSubmit, onClear }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim() === "") {
      toast.warn("This field must not be empty ");
      return;
    }

    onSubmit(value);
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value.toLowerCase());
  };

  const onClearField = () => {
    setValue("");
    onClear();
  };

  return (
    <div>
      <div className={cl.inputContainer}>
        <input
          className={cl.input}
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="Search"
        />
        <button className={cl.searchBtn} type="button" onClick={handleSubmit}>
          <img width="18" height="18" src="/search-icon.svg" alt="" />
        </button>
        <button className={cl.clearBtn} type="button" onClick={onClearField}>
          <img width="18" height="18" src="/cancel-cross.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

SearchField.PropTypes = {
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
};
