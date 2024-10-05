import { Title } from "../../components/Title/Title";
import cl from "./Login.module.scss";

export const Login = () => {
  return (
    <div className={cl.container}>
      <div></div>
      <div className={cl.formBlock}>
        <div className={cl.titleContainer}>
          <Title pageTitle="Log in" />
        </div>
        <p className={cl.desc}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </div>
    </div>
  );
};
