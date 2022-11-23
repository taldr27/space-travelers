import Nav from '../components/NavBar';
import ProfileMissions from '../components/ProfileMissions';
import ProfileRockets from '../components/ProfileRockets';

const Profile = () => (
  <>
    <Nav />
    <div>
      <ProfileMissions />
      <ProfileRockets />
    </div>
  </>
);

export default Profile;
