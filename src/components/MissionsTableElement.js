import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import '../styles/MissionsTableElement.css';
import { useDispatch } from 'react-redux';
import { reservedMissions } from '../redux/missions/Missions';

const Mission = ({
  id,
  missionName,
  description,
}) => {
  const dispatch = useDispatch();
  const reserved = () => (
    dispatch(reservedMissions(id))
  );
  return (
    <>
      <tr>
        <th>{missionName}</th>
        <td>{description}</td>
        <td><Button variant="secondary" type="button">NOT A MEMBER</Button></td>
        <td><Button variant="secondary" onClick={reserved} type="button" id={id}>JOIN MISSION</Button></td>
      </tr>
    </>
  );
};
export default Mission;
Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
