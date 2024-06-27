import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../slices/filtersSlice';
import questionnaireReducer from '../slices/questionnaireSlice';
import searchSystemReducer from '../slices/searchSystemSlice';

export default configureStore({
  reducer: {
    filters: filtersReducer,
    questionnaire: questionnaireReducer,
    searchSystem: searchSystemReducer,
  },
});
