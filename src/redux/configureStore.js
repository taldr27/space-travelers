import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/Missions';
import rocketsReducer from './rockets/Rockets';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
