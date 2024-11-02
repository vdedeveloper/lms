import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Use named import
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
