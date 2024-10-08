import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signin } from "../../redux/users/login";
import cl from "../RegistrationForm/RegistrationForm.module.scss";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/)
      .required(),
    password: yup.string().min(7).required(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const email = watch("email", "");
  const password = watch("password", "");

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await signin(data);

      console.log(response);

      if (response.status === 200) {
        const data = response.data;
        localStorage.setItem("userData", JSON.stringify(data));

        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      }
    } catch (error) {
      console.error("Error during signip", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cl.inputContainer}>
        <input
          className={`${cl.input} 
          ${email ? (errors.email ? " inputFalse" : "inputTrue") : ""}`}
          placeholder="Email"
          {...register("email")}
        />
        {(errors.email || email) && (
          <p className={cl.error}>
            {errors.email ? (
              "Enter a valid Email"
            ) : (
              <span>Email is valid!</span>
            )}
          </p>
        )}
        <div className={cl.checkMail}>
          {email && (errors.email || email) && (
            <img
              src={errors.email ? "/cross-red.svg" : "/check-green.svg"}
              alt="check"
            />
          )}
        </div>
      </div>
      <div className={cl.inputContainer}>
        <input
          className={`${cl.input} ${
            password ? (errors.password ? " inputFalse" : "inputTrue") : ""
          }`}
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          {...register("password")}
        />
        {(errors.password || password) && (
          <p className={cl.error}>
            {errors.password ? (
              errors.password.message
            ) : (
              <span>Password is secure</span>
            )}
          </p>
        )}
        {password && (
          <button
            type="button"
            className={cl.showBtn}
            onClick={togglePasswordVisibility}
          >
            <img
              src={showPassword ? "/eye.svg" : "/eye-off.svg"}
              alt="show/hide"
            />
          </button>
        )}
        <div className={cl.checkGreen}>
          {password && (errors.password || password) && (
            <img
              src={errors.password ? "/cross-red.svg" : "/check-green.svg"}
              alt="check"
            />
          )}
        </div>
      </div>
      <button className={cl.sumbitBtn} type="sumbit">
        Log in
      </button>
    </form>
  );
};
