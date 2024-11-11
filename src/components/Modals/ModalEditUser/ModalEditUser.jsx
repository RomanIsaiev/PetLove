import * as yup from "yup";

import modal from "../../Modals/generalModalStyles.module.scss";
import cl from "./ModalEditUser.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { editProfile } from "../../../redux/users/edit";
import { useEffect, useState } from "react";

export const ModalEditUser = ({ isOpen, onClose, user }) => {
  const { avatar, email, name, phone } = user;
  const [avatarUrl, setAvatarUrl] = useState(avatar || ""); // Инициализация URL аватара

  console.log(name);

  // Схема валидации с использованием Yup
  const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "Please enter a valid email address"
      )
      .required("Email is required"),
    avatar: yup
      .string()
      .matches(
        /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/i,
        "Please enter a valid URL for the avatar image"
      )
      .required("Avatar URL is required"),
    phone: yup
      .string()
      .matches(
        /^\+38\d{10}$/,
        "Please enter a valid phone number in +38XXXXXXXXXX format"
      )
      .required("Phone number is required"),
  });

  // Использование useForm с defaultValues
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      userName: name || "",
      userEmail: email || "",
      userPhone: phone || "",
      userAvatar: avatar || "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await editProfile(data); // Отправка всех данных, включая аватар
      toast.success("Profile updated successfully!");
      onClose(); // Закрываем модальное окно после успешного обновления
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={modal.modalOverlay}>
      <div className={modal.modalEditUser}>
        <button
          className={modal.closeBtn}
          onClick={onClose}
          data-area="closeBtn"
        >
          <img src="/close-modal.svg" alt="close" data-area="closeBtn" />
        </button>
        <p className={cl.modalTitle}>Edit information</p>
        <div className={cl.avatarContainer}>
          {avatarUrl ? (
            <img src={avatarUrl} alt="avatar" />
          ) : (
            <div className={cl.avatarBox}>
              <img src="/user.svg" alt="default avatar" />
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Name</label>
            <input type="text" {...register("userName")} />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <label>Email</label>
            <input type="email" {...register("userEmail")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label>Phone</label>
            <input type="text" {...register("userPhone")} />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          <div>
            <label>Avatar URL</label>
            <input
              type="text"
              {...register("userAvatar")}
              value={avatarUrl} // Отображаем текущий URL
              readOnly // Поле только для чтения, так как мы обновляем его через кнопку
            />
            {errors.avatar && <p>{errors.avatar.message}</p>}
            <button type="button">Upload Photo</button>
          </div>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
};
