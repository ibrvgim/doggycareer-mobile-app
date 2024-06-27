import { createSlice } from '@reduxjs/toolkit';

const initialState: { title: string; region: string } = {
  title: '',
  region: '',
};

export const searchSystemSlice = createSlice({
  name: 'searchSystem',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },

    setRegion: (state, action) => {
      state.region = action.payload;
    },

    setClear: (state) => {
      state.title = '';
      state.region = '';
    },
  },
});

export const { setTitle, setRegion, setClear } = searchSystemSlice.actions;
export default searchSystemSlice.reducer;
