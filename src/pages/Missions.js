import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              missionName={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Missions;
