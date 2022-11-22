import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GETTED_ROCKETS = 'GETTED_ROKCETS';

const initialState = [];

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk(
  GETTED_ROCKETS, () => axios.get(apiUrl)
    .then((response) => {
      const rockets = response.data;
      const data = Object.keys(rockets).map((id) => ({
        id: rockets[id].id,
        name: rockets[id].rocket_name,
        description: rockets[id].description,
        img: rockets[id].flickr_images[0],
        reserved: false,
      }));

      return data;
    }),
);

const rocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  reducers: {
    reservedRockets(state, action) {
      const newState = state.map((index) => {
        if (action.payload !== index.id) {
          return { ...index };
        }
        return { ...index, reserved: true };
      });
      return newState;
    },
    cancelReservedRockets(state, action) {
      const newState = state.map((index) => {
        if (action.payload !== index.id) {
          return { ...index };
        }
        return { ...index, reserved: false };
      });
      return newState;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (_, action) => action.payload);
    builder.addCase(getRockets.rejected, (state) => {
      const newState = state; newState.status = 'failed';
    });
    builder.addCase(getRockets.pending, (_, action) => action.payload);
  },
});
export const { reservedRockets } = rocketsSlice.actions;
export const { cancelReservedRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
