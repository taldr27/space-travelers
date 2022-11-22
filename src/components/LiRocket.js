// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Lirocket.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { reservedRockets } from '../redux/rockets/Rockets';

const Lielem = ({
  id, img, name, description,
}) => {
  const dispatch = useDispatch();

  const reservation = () => {
    dispatch(reservedRockets(id));
    // document.querySelector(`.reservationL_${e.target.id}`).style.display = 'block';
    // document.querySelector(`.buttoonRocket_${e.target.id}`).style.display = 'none';
    // document.querySelector(`.buttoonRocketCancel_${e.target.id}`).style.display = 'block';
  };

  return (
    <li className="licontent">
      <div className="imgWrapper">
        <img src={img} alt="60px" className="image_rockets" />
      </div>
      <div className="rigthContent">
        <p
          style={{ display: 'none' }}
          className={`reservationL_${id}`}
        >
          Reserved
        </p>
        <h1 className="titleRocket">{name}</h1>
        <p className="parafRocket">{description}</p>
        <Button id={id} variant="primary" type="button" onClick={reservation} className={`buttoonRocket_${id}`}>Reserve Rocket</Button>
        <Button id={id} variant="primary" type="button" onClick={reservation} className={`buttoonRocketCancel_${id}`} style={{ display: 'none' }}>Cancel Reservation</Button>
      </div>
    </li>
  );
};
export default Lielem;

Lielem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
