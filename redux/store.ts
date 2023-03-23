import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';
import userReducer from '../redux/slices/userSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
    devTools: true,
  });

const wrapper = createWrapper(makeStore);

export default wrapper;