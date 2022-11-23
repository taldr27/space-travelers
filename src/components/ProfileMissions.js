import PropTypes from 'prop-types';

const ProfileMissions = ({ name }) => {
  console.log('asd');
  return (
    <>
      <p>{name}</p>
    </>
  );
};

ProfileMissions.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileMissions;
