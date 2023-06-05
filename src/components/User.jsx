import '../styles/_user.sass';
import photoCover from '../images/photo-cover.svg';

function User(props) {
  const { photo, name, position, email, phone } = props;
  // Destructuring passed properties

  return (
    <div className="user__item">
      {photo ===
      'https://frontend-test-assignment-api.abz.agency/images/placeholders/placeholder.png' ? (
        // Check if the user's photo is a preloader, then a stub image is displayed
        <img
          className="users__item-photo"
          src={photoCover}
          alt="user avatar"
          width="70px"
        />
      ) : (
        // Otherwise, the user's photo is displayed
        <img
          className="user__item-photo"
          src={photo}
          alt="user avatar"
          width="70px"
        />
      )}

      <div className="user__item-name">{name}</div>
      <div className="user__item-body">
        <div className="user__item-position">{position}</div>
        <div className="user__item-email" title={email}>
          {email}
        </div>
        <div className="user__item-phone">{phone}</div>
      </div>
    </div>
  );
}

export default User;
