import PropTypes from 'prop-types';
import '../styles/Lirocket.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { reservedRockets, cancelReservedRockets } from '../redux/rockets/Rockets';

const Lielem = ({
  id, img, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const reservation = () => {
    dispatch(reservedRockets(id));
  };

  const cancelReservation = () => {
    dispatch(cancelReservedRockets(id));
  };

  return (
    <div className="rocketDiv">
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

        <p className="parafRocket">
          {reserved && (<button type="button" className="buttonConfirm">Reserved</button>)}
          {description}
        </p>
        {!reserved && (
          <Button id={id} className="btn-reserve" variant="primary" type="button" onClick={reservation}>Reserve Rocket</Button>
        )}
        {reserved && (
          <Button id={id} className="btn-reserve" variant="outline-secondary" type="button" onClick={cancelReservation}>Cancel Reservation</Button>

        )}
      </div>
    </div>
  );
};
export default Lielem;

Lielem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
