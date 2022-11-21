// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'; // ES6

const Lielem = ({ img, title, paragraph }) => (

  <li>
    <img src={img} alt="60px" />
    <div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  </li>
);
export default Lielem;

Lielem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
