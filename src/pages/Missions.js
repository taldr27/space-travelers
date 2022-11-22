import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../components/MissionsTable';
import Nav from '../components/NavBar';
import { fetchMissions } from '../redux/missions/Missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const onClick = () => {
    console.log(missions);
  };
  return (
    <>
      <Nav />
      <button type="button" onClick={onClick}>Add</button>
      <Mission />
      <h2>hi</h2>
    </>
  );
};

export default Missions;
