import React, { useEffect, useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { getCities } from "../../../redux/cities";
import { Provider } from "react-redux";

import cl from "./Cities.module.scss";

export const Cities = ({ getLocation }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({ value: "", label: "" });
  const [value, setValue] = useState("");

  useEffect(() => {
    async function componentDidMount() {
      try {
        await getCities().then((response) => {
          setCities(response);
        });
      } catch (error) {
        return error.message;
      }
    }

    componentDidMount();
  }, []);

  const filterCities = (inputValue, cities) => {
    return cities
      .filter((city) => {
        return city.cityEn.toLowerCase().includes(inputValue.toLowerCase());
      })
      .slice(0, 3);
  };

  const loadOptions = (inputValue, callback, cities) => {
    const filteredCities = filterCities(inputValue, cities);
    callback(
      filteredCities.map((city) => ({
        value: city._id,
        label: `${city.cityEn}, ${city.stateEn}`,
      }))
    );
  };

  const handleChange = (selectedOption) => {
    console.log(selectedOption);
    setValue(selectedOption.label);
    setSelectedCity(selectedOption);
    console.log("Выбранный город:", selectedOption);
  };

  console.log("selectedCity", selectedCity);

  const submitLocation = () => {
    console.log(selectedCity.value);
    return getLocation(selectedCity.value);
  };

  const clearLocation = () => {
    setSelectedCity({ value: "", label: "" });
    setValue("");
    return getLocation("");
  };

  const formatOptionLabel = ({ label, state }, { inputValue }) => {
    const index = label.toLowerCase().indexOf(inputValue.toLowerCase());

    if (index === -1) {
      return (
        <div>
          {label}, {state}
        </div>
      );
    }
    const beforeMatch = label.slice(0, index);
    const match = label.slice(index, index + inputValue.length);
    const afterMatch = label.slice(index + inputValue.length);

    return (
      <div>
        <span>{beforeMatch}</span>
        <span style={{ fontWeight: "bold", color: "black" }}>{match}</span>
        <span style={{ color: "gray" }}>{afterMatch}</span>, {state}
      </div>
    );
  };

  const handleInputChange = (newValue) => {
    setValue(newValue);
    console.log("newValue", newValue);
    // return newValue;
  };

  const customStyles = {
    singleValue: (provided) => ({
      ...provided,
      display: "-webkit-box",
      color: "#262626",
      fontFamily: "Manrope",
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "20px",
      letterSpacing: "-0.48px",
      margin: "0",
      padding: "0",
      maxWidth: "150px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    control: (provided) => ({
      ...provided,
      padding: "0",
      margin: "0",
      width: "227px",
      height: "48px",
      borderRadius: "30px",
      backgroundColor: "#fff",
      border: "inherit",
      boxShadow: "none",
      "&:hover": {
        borderColor: "darkblue",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#fff4df",
        color: "black",
        borderRadius: "30px",
      },
    }),
    menu: (provider) => ({
      ...provider,
      marginTop: "4px",
      padding: "14px",
      borderRadius: "15px",
      backgroundColor: "#fff",
      border: "none",
      boxShadow: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      display: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "black",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

  console.log("value", value);

  return (
    <div className={cl.inputContainer}>
      <AsyncSelect
        loadOptions={(inputValue, callback) =>
          loadOptions(inputValue, callback, cities)
        }
        onChange={handleChange}
        onInputChange={handleInputChange}
        defaultOptions
        placeholder="Location"
        styles={customStyles}
        formatOptionLabel={formatOptionLabel}
      />
      <button className={cl.searchBtn} type="button" onClick={submitLocation}>
        <img width="18" height="18" src="/search-icon.svg" alt="icon" />
      </button>
      {selectedCity.value && (
        <button className={cl.clearBtn} type="button" onClick={clearLocation}>
          <img width="18" height="18" src="/cancel-cross.svg" alt="icon" />
        </button>
      )}
    </div>
  );
};
