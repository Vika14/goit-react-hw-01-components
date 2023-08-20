import PropTypes from 'prop-types';
import css from './friendListItem.module.css';

export const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? `${css.status} ${css.isOnline}` : css.status}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};