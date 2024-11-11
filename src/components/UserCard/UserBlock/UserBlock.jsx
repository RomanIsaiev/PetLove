import cl from "./UserBlock.module.scss";

export const UserBlock = ({ user, isOpen }) => {
  const { avatar, email, name, phone } = user;

  return (
    <div>
      <div className={cl.avatarContainer}>
        {avatar ? (
          <img src={`${avatar}`} alt="avatar" />
        ) : (
          <div className={cl.avatarBox}>
            <img src="/user.svg" alt="default avatar" />
          </div>
        )}
        {avatar ? null : (
          <button className={cl.uploadBtn} onClick={isOpen}>
            Upload photo
          </button>
        )}
      </div>
      <div className={cl.infoContainer}>
        <p className={cl.infoTitle}>My information</p>
        <ul className={cl.infoList}>
          <li
            className={`${cl.infoItem} ${
              name ? "userInfoFill" : "userInfoEmpty"
            }`}
          >
            {name}
          </li>
          <li
            className={`${cl.infoItem} ${
              email ? "userInfoFill" : "userInfoEmpty"
            }`}
          >
            {email}
          </li>
          <li
            className={`${cl.infoItem} ${
              phone ? "userInfoFill" : "userInfoEmpty"
            }`}
          >
            {phone ? phone : "+380"}
          </li>
        </ul>
      </div>
    </div>
  );
};
