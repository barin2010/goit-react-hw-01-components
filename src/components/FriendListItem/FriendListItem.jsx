import css from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return(
    <li className={css.item}>
      <span
        className={isOnline ? `${css.status} ${css.statusOnline}` : `${css.status} ${css.statusOffline}`}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>)
};

export { FriendListItem };
