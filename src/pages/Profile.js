import { useSelector } from 'react-redux';
import Nav from '../components/NavBar';
import ProfileMissions from '../components/ProfileMissions';
// import ProfileRockets from '../components/ProfileRockets';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved !== false);
  return (
    <>
      <Nav />
      <div>
        {
          joinedMissions.map((joined) => (
            <ProfileMissions
              key={joined.id}
              name={joined.missionName}
            />
          ))
        }
      </div>
    </>
  );
};

export default Profile;
