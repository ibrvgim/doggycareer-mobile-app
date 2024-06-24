import { QuestionnaireType } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: QuestionnaireType = {
  jobType: '',
  location: [],
  industry: [],
  email: '',
};

export const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    setJobType: (state, action) => {
      state.jobType = action.payload;
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
  },
});

export const { setJobType, setLocation, setIndustry, setEmail } =
  questionnaireSlice.actions;
export default questionnaireSlice.reducer;
