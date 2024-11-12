import { Link } from "react-router-dom";
import cl from "./PetsBlock.module.scss";

export const PetsBlock = () => {
  return (
    <div>
      <div className={cl.titleBox}>
        <p className={cl.blockTitle}>My pets</p>
        <Link to="/add-pet" className={cl.addBtn}>
          Add pet <img src="./white-plus.svg" alt="plus" />
        </Link>
      </div>
    </div>
  );
};
