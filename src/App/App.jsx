import { Profile } from 'components/Profile/Profile';
import user from 'components/Profile/user';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/Statistics/data';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transaction from 'components/TransactionHistory/transactions';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </Container>
  );
};
