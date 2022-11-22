import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import '../styles/MissionsTableElement.css';
import { useDispatch } from 'react-redux';
import { joinMissions, leaveMissions } from '../redux/missions/Missions';

const Mission = ({
  id,
  missionName,
  description,
  reserved,
}) => {
  const dispatch = useDispatch();
  const reserve = () => {
    dispatch(joinMissions(id));
  };

  const leaving = () => {
    dispatch(leaveMissions(id));
  };
  return (
    <>
      <tr>
        <th>{missionName}</th>
        <td>{description}</td>
        <td>
          {!reserved && (
            <Button variant="secondary" type="button">NOT A MEMBER</Button>
          )}
          {reserved && (
            <Button variant="info" type="button">Active member</Button>
          )}
        </td>
        <td>
          {!reserved && (
            <Button variant="outline-secondary" onClick={reserve} type="button" className="joinBtn" id={id}>JOIN MISSION</Button>
          )}
          {reserved && (
            <Button variant="outline-danger" onClick={leaving} type="button" className="leaveBtn" id={id}>LEAVE MISSION</Button>
          )}
        </td>
      </tr>
    </>
  );
};
export default Mission;
Mission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
