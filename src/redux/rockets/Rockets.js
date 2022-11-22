import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GETTED_ROCKETS = 'GETTED_ROKCETS';

const initialState = [];

const apiUrl = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk(
  GETTED_ROCKETS, () => axios.get(apiUrl)
    .then((response) => {
      const rockets = response.data;
      return rockets;
    }),
);

const rocketsSlice = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (_, action) => action.payload);
    builder.addCase(getRockets.rejected, (state) => {
      const newState = state; newState.status = 'failed';
    });
    builder.addCase(getRockets.pending, (_, action) => action.payload);
  },
});

export default rocketsSlice.reducer;
