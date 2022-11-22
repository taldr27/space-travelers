import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionsTableElement.css';

const Mission = ({ missionName, description }) => (
  <>
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td><button type="button">NOT A MEMBER</button></td>
      <td><button type="button">JOIN MISSION</button></td>
    </tr>
  </>
);

export default Mission;

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
