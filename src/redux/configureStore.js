import { configureStore } from '@reduxjs/toolkit';
 import missionsReducer from './missions/Missions';
 import rocketsReducer from './rockets/Rockets';

const store = configureStore({
  reducer: {
     missions: missionsReducer,
     rockets: rocketsReducer,
  },
});
export default store;
