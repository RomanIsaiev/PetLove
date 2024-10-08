import { LoginForm } from "../../components/LoginForm/LoginForm";
import { PetBlock } from "../../components/PetBlock/PetBlock";
import { Title } from "../../components/Title/Title";
import cl from "./Login.module.scss";

export const Login = () => {
  const data = {
    backgroundImage: "/log-image-1x.jpg",
    petImage: "/log-pet-image-1x.png",
    petName: "Rich",
    birthday: "21.09.2020",
    comment:
      "Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!",
  };

  return (
    <div className={cl.container}>
      <div>
        <PetBlock data={data} />
      </div>
      <div className={cl.formBlock}>
        <div className={cl.titleContainer}>
          <Title pageTitle="Log in" />
        </div>
        <p className={cl.desc}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
        <LoginForm />
      </div>
    </div>
  );
};
