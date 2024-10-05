import { PetBlock } from "../../components/PetBlock/PetBlock";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { Title } from "../../components/Title/Title";
import cl from "./Registration.module.scss";
import { NavLink, useLocation } from "react-router-dom";

export const Registration = () => {
  const location = useLocation();
  console.log(location);

  const data = {
    backgroundImage: "/public/reg-image-1x.jpg",
    petImage: "/public/reg-pet-image-1x.png",
    petName: "Jake",
    birthday: "18.10.2021",
    comment:
      "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.",
  };

  return (
    <div className={cl.container}>
      <div className={cl.imageBlock}>
        <PetBlock data={data} />
      </div>
      <div className={cl.formBlock}>
        <div className={cl.titleContainer}>
          <Title pageTitle="Registration" />
        </div>
        <p className={cl.desc}>Thank you for your interest in our platform.</p>
        <RegistrationForm />
        <p className={cl.accountInfo}>
          Already have an account? <NavLink to={"/login"}>Login</NavLink>
        </p>
      </div>
    </div>
  );
};
