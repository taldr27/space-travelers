// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Lirocket.css';
import Button from 'react-bootstrap/Button';

const Lielem = ({ img, title, paragraph }) => (

  <li className="licontent">
    <div className="imgWrapper">
      <img src={img} alt="60px" className="image_rockets" />
    </div>
    <div className="rigthContent">
      <h1 className="titleRocket">{title}</h1>
      <p className="parafRocket">{paragraph}</p>
      <Button variant="primary" type="button" className="buttoonRocket">Reserve Rocket</Button>
    </div>
  </li>
);
export default Lielem;

Lielem.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};
