import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup } from "../../redux/users/register";
import cl from "./RegistrationForm.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/)
      .required(),
    password: yup.string().min(7).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
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

  const name = watch("name", "");
  const email = watch("email", "");
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const onSubmit = async (data) => {
    const { confirmPassword, ...formData } = data;

    try {
      const response = await signup(formData);

      console.log(response);

      if (response.status === 201) {
        const token = response.data.token;
        localStorage.setItem("authToken", token);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cl.inputContainer}>
        <input
          className={`${cl.input} ${
            name ? (errors.name ? " inputFalse" : "inputTrue") : ""
          }`}
          placeholder="Name"
          {...register("name")}
        />
        {errors.name && <p className={cl.error}>{errors.name.message}</p>}
        <div className={cl.checkMail}>
          {name && (errors.name || name) && (
            <img
              src={errors.name ? "/cross-red.svg" : "/check-green.svg"}
              alt="check"
            />
          )}
        </div>
      </div>
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
      <div className={cl.inputContainer}>
        <input
          className={`${cl.input} ${
            confirmPassword
              ? errors.confirmPassword
                ? " inputFalse"
                : "inputTrue"
              : ""
          }`}
          placeholder="Confirm password"
          type={showConfirmPassword ? "text" : "password"}
          {...register("confirmPassword")}
        />
        {(errors.confirmPassword || confirmPassword) && (
          <p className={cl.error}>
            {errors.confirmPassword ? (
              errors.confirmPassword.message
            ) : (
              <span>Passwords match</span>
            )}
          </p>
        )}
        {confirmPassword && (
          <button
            type="button"
            className={cl.showBtn}
            onClick={toggleConfirmPasswordVisibility}
          >
            <img
              src={showConfirmPassword ? "/eye.svg" : "/eye-off.svg"}
              alt="show/hide"
            />
          </button>
        )}
        <div className={cl.checkGreen}>
          {confirmPassword && (errors.confirmPassword || confirmPassword) && (
            <img
              src={
                errors.confirmPassword ? "/cross-red.svg" : "/check-green.svg"
              }
              alt="check"
            />
          )}
        </div>
      </div>

      <button className={cl.sumbitBtn} type="sumbit">
        Registration
      </button>
    </form>
  );
};
