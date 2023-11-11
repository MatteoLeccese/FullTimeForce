import { combineReducers } from '@reduxjs/toolkit';
import commitHistorySlice from './commitHistorySlice';
import repositorySearchSlice from './repositorySearchSlice';

const rootReducer = combineReducers({ 
  commitHistory: commitHistorySlice.reducer,
  repositorySearch: repositorySearchSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
