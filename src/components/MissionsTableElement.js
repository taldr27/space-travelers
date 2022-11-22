import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import '../styles/MissionsTableElement.css';

const Mission = ({ missionName, description }) => (
  <>
    <tr>
      <th>{missionName}</th>
      <td>{description}</td>
      <td><Button variant="secondary" type="button">NOT A MEMBER</Button></td>
      <td><Button variant="secondary" type="button">JOIN MISSION</Button></td>
    </tr>
  </>
);

export default Mission;

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
