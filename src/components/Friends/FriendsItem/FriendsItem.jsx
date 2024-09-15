import PropTypes from "prop-types";

export const FriendsItem = ({ data }) => {
  const { address, addressUrl, email, imageUrl, phone, title, url, workDays } =
    data;

  const date = new Date();
  const weekDay = date.getDay();

  return (
    <li>
      <div>
        <div>
          <img src={imageUrl} alt={title} width="90" height="90" />
        </div>
        <div>
          <a href={url} target="_blank" rel="nofollow">
            <h3>{title}</h3>
          </a>
          <ul>
            <li>
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
            <li>
              {address ? (
                <a href={addressUrl} target="_blank" rel="nofollow">
                  <span>Address:</span> {address}
                </a>
              ) : (
                <p>
                  <span>Address:</span> website only
                </p>
              )}
            </li>
            <li>
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
        <div>
          {workDays ? (
            workDays?.[weekDay]?.isOpen ? (
              <span>
                {workDays?.[weekDay]?.from} - {workDays?.[weekDay]?.to}{" "}
              </span>
            ) : (
              "Closed"
            )
          ) : (
            "Day and night"
          )}
        </div>
      </div>
    </li>
  );
};

FriendsItem.propTypes = {
  data: PropTypes.object,
};
