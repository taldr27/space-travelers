import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Mission from '../components/MissionsTableElement';
import Nav from '../components/NavBar';
import { fetchMissions } from '../redux/missions/Missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <>
      <Nav />
      <div className="table-container">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="thMission">Mission</th>
              <th className="thDescription">Description</th>
              <th className="thStatus">Status</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission
                key={mission.id}
                id={mission.id}
                missionName={mission.missionName}
                description={mission.missionDescription}
                reserved={mission.reserved}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default Missions;
