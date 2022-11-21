import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_MISSIONS = 'space-travelers/src/redux/missions/fetchMissions';
const url = 'https://api.spacexdata.com/v3/missions/';

export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, () => axios.get(url)
  .then((response) => {
    const missions = response.data;
    return missions;
  }));

const initialState = [];

const rocketsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (_, action) => action.payload);
  },
});

export default rocketsSlice.reducer;
