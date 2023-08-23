'use client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer, { setItems } from '@/store/index';

const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export function Providers({ children }: { children: React.ReactNode }) {
	return <Provider store={store}>{children}</Provider>;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
