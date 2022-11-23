import PropTypes from 'prop-types';

const ProfileRockets = ({ name }) => (
  <>
    <tr>
      <td>{name}</td>
    </tr>
  </>
);

export default ProfileRockets;

ProfileRockets.propTypes = {
  name: PropTypes.string.isRequired,
};
