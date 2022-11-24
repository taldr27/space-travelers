import PropTypes from 'prop-types';

const ProfileMissions = ({ name }) => (
  <>
    <tr>
      <td>{name}</td>
    </tr>
  </>
);

ProfileMissions.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileMissions;
