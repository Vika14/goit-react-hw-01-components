import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(friend => (
        <li className={css.item}>
          <span
            className={
              friend.isOnline ? `${css.status} ${css.isOnline}` : css.status
            }
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
