import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	count: number;
}

interface CartState {
	isCartOpen: boolean;
	cart: CartItem[];
	items: any[]; // You might want to replace 'any' with a proper type
}

const initialState: CartState = {
	isCartOpen: false,
	cart: [],
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItems: (state, action: PayloadAction<any[]>) => {
			state.items = action.payload;
		},
		addToCart: (state, action: PayloadAction<{ item: CartItem }>) => {
			state.cart = [...state.cart, action.payload.item];
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload.id);
		},
		increaseCount: (state, action: PayloadAction<{ id: number }>) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload.id) {
					item.count++;
				}
				return item;
			});
		},
		decreaseCount: (state, action: PayloadAction<{ id: number }>) => {
			state.cart = state.cart.map((item) => {
				if (item.id === action.payload.id && item.count > 1) {
					item.count--;
				}
				return item;
			});
		},
		setIsCartOpen: (state) => {
			state.isCartOpen = !state.isCartOpen;
		},
	},
});

export const {
	setItems,
	addToCart,
	removeFromCart,
	increaseCount,
	decreaseCount,
	setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
