import Profile from './components/Profile';
import profile from './user.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList';
import friends from './friends.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={profile.avatar}
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        stats={profile.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />;
    </div>
  );
}
