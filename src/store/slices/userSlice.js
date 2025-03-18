import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    profile: null,
    preferences: {}
  },
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setPreferences: (state, action) => {
      state.preferences = action.payload;
    }
  }
});

export const { setProfile, setPreferences } = userSlice.actions;
export default userSlice.reducer;