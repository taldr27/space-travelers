import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Nav from '../components/NavBar';
import Lielem from '../components/LiRocket';
import { getRockets } from '../redux/rockets/Rockets';

const RocketsContainer = () => {
  const dataRo = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!dataRo.length) {
      dispatch(getRockets());
    }
  }, [dispatch, dataRo.length]);
  return (

    <>
      <Nav />
      <ul className="parentLielementRock">
        { dataRo.map((r) => (
          <Lielem
            key={r.id}
            id={r.id}
            img={r.img}
            name={r.name}
            description={r.description}
            reserved={r.reserved}
          />
        ))}

      </ul>
    </>
  );
};

export default RocketsContainer;
