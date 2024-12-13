import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@components/statement/auth/authSlice';
import { genericReducer } from '@/components/statement/function/genericSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    fichePrix: genericReducer, // Utilisation du nom genericReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
