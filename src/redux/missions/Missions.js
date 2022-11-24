import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_MISSIONS = 'space-travelers/src/redux/missions/fetchMissions';
const url = 'https://api.spacexdata.com/v3/missions/';
export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS, async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newData = Object.keys(data).map((id) => ({
      id: data[id].mission_id,
      missionName: data[id].mission_name,
      missionDescription: data[id].description,
      reserved: false,
    }));
    return newData;
  },
);
const initialState = [];
const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMissions(state, action) {
      const newState = state.map((index) => {
        if (action.payload !== index.id) {
          return { ...index };
        }
        return { ...index, reserved: true };
      });
      return newState;
    },
    leaveMissions(state, action) {
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
    builder.addCase(fetchMissions.fulfilled, (_, action) => action.payload);
  },
});
export const { joinMissions, leaveMissions } = missionSlice.actions;
export default missionSlice.reducer;
