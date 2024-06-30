import { QuestionnaireType } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: QuestionnaireType = {
  jobType: '',
  officeType: '',
  location: [],
  industry: [],
  email: '',
};

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setJobType: (state, action) => {
      if (state.jobType === action.payload) state.jobType = '';
      else state.jobType = action.payload;
    },

    setOfficeType: (state, action) => {
      if (state.officeType === action.payload) state.officeType = '';
      else state.officeType = action.payload;
    },

    setLocation: (state, action) => {
      if (state.location.includes(action.payload))
        state.location = state.location.filter(
          (item) => item !== action.payload
        );
      else state.location.push(action.payload);
    },

    setIndustry: (state, action) => {
      if (state.industry.includes(action.payload))
        state.industry = state.industry.filter(
          (item) => item !== action.payload
        );
      else state.industry.push(action.payload);
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setClearAll: () => initialState,
  },
});

export const {
  setJobType,
  setOfficeType,
  setLocation,
  setIndustry,
  setEmail,
  setClearAll,
} = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
