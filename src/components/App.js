import { Profile } from "./Profile/Profile";
import user from "../data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../data/data.json";
import { FriendList } from "./FriendList/FriendList";
import friend from "../data/friends.json";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import item from "../data/transactions.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
       />
      <Statistics title="Upload stats" statis={data} />
      <FriendList friends={friend} />
      <TransactionHistory items={item} />
    </div>
  );
};
