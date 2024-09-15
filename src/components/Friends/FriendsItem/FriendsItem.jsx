import PropTypes from "prop-types";
import cl from "./FriendsItem.module.scss";

export const FriendsItem = ({ data }) => {
  const { address, addressUrl, email, imageUrl, phone, title, url, workDays } =
    data;

  const date = new Date();
  const weekDay = date.getDay();

  return (
    <li className={cl.item}>
      <div>
        <img src={imageUrl} alt={title} width="90" height="90" />
      </div>
      <div>
        <a href={url} target="_blank" rel="nofollow">
          <h3 className={cl.title}>{title}</h3>
        </a>
        <ul className={cl.contactsList}>
          <li className={cl.contactsItem}>
            {email ? (
              <a href={`mailto:${email}`} target="_blank" rel="nofollow">
                <span>Email:</span> {email}
              </a>
            ) : (
              <p>
                <span>Email:</span> website only
              </p>
            )}
          </li>
          <li className={cl.contactsItem}>
            {address ? (
              <a href={addressUrl} target="_blank" rel="nofollow">
                <span>Address:</span> {address.split(" ").slice(0, 3).join(" ")}
              </a>
            ) : (
              <p>
                <span>Address:</span> website only
              </p>
            )}
          </li>
          <li className={cl.contactsItem}>
            {phone ? (
              <a href={`tel:${phone}`} target="_blank" rel="nofollow">
                <span>Phone:</span> {phone ?? "email only"}
              </a>
            ) : (
              <p>
                <span>Phone:</span> website only
              </p>
            )}
          </li>
        </ul>
      </div>
      <div className={cl.workTimeContainer}>
        {workDays ? (
          workDays?.[weekDay]?.isOpen ? (
            <span className={cl.workTime}>
              {workDays?.[weekDay]?.from} - {workDays?.[weekDay]?.to}
            </span>
          ) : (
            <span className={cl.workTime}>Closed</span>
          )
        ) : (
          <span className={cl.workTime}>Day and night</span>
        )}
      </div>
    </li>
  );
};

FriendsItem.propTypes = {
  data: PropTypes.object,
};
