import cl from "./PetBlock.module.scss";

export const PetBlock = ({ data }) => {
  const { backgroundImage, petImage, petName, birthday, comment } = data;
  return (
    <div className={cl.imageBox}>
      <img className={cl.backgroundImage} src={backgroundImage} alt="cat" />
      <div className={cl.userCommentContainer}>
        <div className={cl.iconContainer}>
          <img className={cl.icon} src={petImage} alt="cat" />
        </div>
        <div className={cl.infoContainer}>
          <div className={cl.petInfoContainer}>
            <p className={cl.name}>{petName}</p>
            <p className={cl.birthday}>
              Birthday: <span>{birthday}</span>
            </p>
          </div>
          <p className={cl.comment}>{comment}</p>
        </div>
      </div>
    </div>
  );
};
