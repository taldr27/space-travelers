import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Nav from '../components/NavBar';
import ProfileMissions from '../components/ProfileMissions';
import '../styles/Profile.css';
import ProfileRockets from '../components/ProfileRockets';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);
  const joinedMissions = missions.filter((mission) => mission.reserved !== false);
  const reservedRockets = rockets.filter((rockets) => rockets.reserved !== false);
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
        <Table className="table-bootstrap">
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {
              reservedRockets.map((e) => (
                <ProfileRockets
                  key={e.id}
                  name={e.name}
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
