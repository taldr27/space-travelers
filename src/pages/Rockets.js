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
  console.log(dataRo);

  return (

    <>
      <Nav />
      <ul>
        <Lielem img="asdadasdasd/dasda/dasd" title="Three" paragraph="sdafasdfsdfasdfd" />
      </ul>
    </>
  );
};

export default RocketsContainer;
