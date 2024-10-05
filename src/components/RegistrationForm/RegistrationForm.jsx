import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup } from "../../redux/users/register";
import cl from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { confirmPassword, ...formData } = data;
    signup(formData);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input className={cl.input} placeholder="Name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input
          className={cl.input}
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input
          className={cl.input}
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <input
          className={`${cl.input} ${cl.lastInput}`}
          placeholder="Confirm password"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button className={cl.sumbitBtn} type="sumbit">
        Registration
      </button>
    </form>
  );
};
