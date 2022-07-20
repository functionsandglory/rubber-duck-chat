import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import messagesSliceReducer from './messages-slice';

const store = configureStore({
    reducer: {
        messages: messagesSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store