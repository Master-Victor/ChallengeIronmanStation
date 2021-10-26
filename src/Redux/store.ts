import { configureStore } from '@reduxjs/toolkit';
import evaluationReducer from './Reducers/evaluationsReducer'

export default configureStore({
  reducer: {
    evaluations: evaluationReducer,
  },
});
