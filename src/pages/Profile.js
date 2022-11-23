import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Nav from '../components/NavBar';
import ProfileMissions from '../components/ProfileMissions';
import '../styles/Profile.css';
// import ProfileRockets from '../components/ProfileRockets';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved !== false);
  return (
    <>
      <Nav />
      <div className="tables">
        <Table className="table-bootstrap">
          <thead>
            <tr>
              <th>My Mission</th>
            </tr>
          </thead>
          <tbody>
            {
              joinedMissions.map((joined) => (
                <ProfileMissions
                  key={joined.id}
                  name={joined.missionName}
                />
              ))
            }
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Profile;
