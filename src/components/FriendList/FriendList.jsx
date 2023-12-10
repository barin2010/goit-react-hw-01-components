import css from './FriendList.module.css'
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return(
  <ul className={css.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>)
};
export { FriendList };
