'use client';

import { ImCross } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/store/Provider';
import { setIsCartOpen } from '@/store';
import Item from './Item';

const ShoppingCart = () => {
	const dispatch = useDispatch();

	const cart = useSelector((state: RootState) => {
		return state.cart.cart;
	});
	console.log(cart);
	const open = useSelector((state: RootState) => {
		return state.cart.isCartOpen;
	});

	const showCartHandler = () => {
		dispatch(setIsCartOpen());
	};

	return (
		<main className='absolute right-0 top-16 bottom-0 w-[470px] h-full z-50'>
			<div className='p-6 w-full flex flex-col bg-slate-300 max-h-[650px] '>
				<button
					onClick={showCartHandler}
					className='absolute w-8 p-2 text-lg top-4 left-5'>
					<ImCross />
				</button>
				<div className='flex flex-col mb-9 items-center'>
					<h1 className='mb-4 text-center text-3xl text-gray-800'>
						Shopping Cart
					</h1>
					<p className='font-light italic'>Total Items: 4</p>
					<span className=' w-64 h-[0.3px] bg-slate-400'></span>
				</div>
				<div className='max-h-[380px] overflow-y-scroll'>
					<div className='flex flex-col gap-7'>
						<Item />
					</div>
				</div>
				<div className='mt-11 flex flex-col items-center justify-center'>
					<h1 className='font-light italic text-2xl text-center'>
						Total Price: $500
					</h1>
					<button className='mt-8 px-6 py-3 bg-blue-500 text-yellow-100 rounded-lg'>
						Proceed to Checkout
					</button>
				</div>
			</div>
		</main>
	);
};

export default ShoppingCart;
