import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Nav from '../components/NavBar';
import Lielem from '../components/LiRocket';
import { getRockets } from '../redux/rockets/Rockets';

const RocketsContainer = () => {
  const dataRo = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (

    <>
      <Nav />
      <ul className="parentLielementRock">
        { dataRo.map((r) => (
          <Lielem
            key={r.id}
            img={r.flickr_images[0]}
            title={r.rocket_name}
            paragraph={r.description}
          />
        ))}

      </ul>
    </>
  );
};

export default RocketsContainer;
