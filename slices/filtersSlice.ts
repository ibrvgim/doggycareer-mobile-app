import { FiltersType } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: FiltersType = {
  sortBy: '',
  publicationDate: '',
  jobType: '',
  officeType: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      if (state.sortBy === action.payload) state.sortBy = '';
      else state.sortBy = action.payload;
    },
    setPublicationDate: (state, action) => {
      if (state.publicationDate === action.payload) state.publicationDate = '';
      else state.publicationDate = action.payload;
    },

    setJobType: (state, action) => {
      if (state.jobType === action.payload) state.jobType = '';
      else state.jobType = action.payload;
    },

    setOfficeType: (state, action) => {
      if (state.officeType === action.payload) state.officeType = '';
      else state.officeType = action.payload;
    },
  },
});

export const { setSortBy, setPublicationDate, setJobType, setOfficeType } =
  filtersSlice.actions;
export default filtersSlice.reducer;
