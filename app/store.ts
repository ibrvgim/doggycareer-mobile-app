import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../slices/filtersSlice';
import questionnaireReducer from '../slices/questionnaireSlice';

export default configureStore({
  reducer: {
    filters: filtersReducer,
    questionnaire: questionnaireReducer,
  },
});
