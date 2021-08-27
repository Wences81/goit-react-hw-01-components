import Profile from './components/Profile';
import profile from './user.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={profile.avatar}
        name={profile.name}
        tag={profile.tag}
        location={profile.location}
        followers={profile.stats.followers}
        views={profile.stats.views}
        likes={profile.stats.likes}
      />
    </div>
  );
}
