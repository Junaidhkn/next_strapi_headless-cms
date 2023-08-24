'use client';

import { ImCross } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';

import CoverImage from '@/assets/florencia-simonini-PDZAMYvduVk-unsplash.jpeg';

import { RootState } from '@/store/Provider';
import {
	decreaseCount,
	increaseCount,
	removeFromCart,
	setIsCartOpen,
} from '@/store';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBinFill, RiH1 } from 'react-icons/ri';
import Image from 'next/image';

const ShoppingCart = () => {
	const dispatch = useDispatch();

	const cart = useSelector((state: RootState) => {
		return state.cart.cart;
	});

	const totalPrice = cart.reduce((total, item) => {
		return total + item.count * item.attributes.price;
	}, 0);

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
					<p className='font-light italic'>Total Items: {cart.length}</p>
					<span className=' w-64 h-[0.3px] bg-slate-400'></span>
				</div>
				<div className='max-h-[380px] overflow-y-scroll'>
					{cart.length === 0 && (
						<h1 className='text-red-700 font-extrabold text-center'>
							No Products in the Cart!!!
						</h1>
					)}
					{cart.map((item) => {
						return (
							<div
								key={item.id}
								className='flex flex-col gap-7'>
								<div className='flex justify-evenly gap-6 border bottom-1 p-2'>
									<div className='flex flex-col'>
										<h3 className='mb-4'>{item.attributes.name}</h3>
										<p className='mb-4 italic font-extrabold'>
											$ {item.attributes.price}
										</p>
										<div className='flex mb-7'>
											<button
												onClick={() => dispatch(increaseCount({ id: item.id }))}
												className='p-2 bg-slate-700 text-yellow-50'>
												<AiOutlinePlus />
											</button>
											<p className=' p-3'>{item.count}</p>
											<button
												onClick={() => dispatch(decreaseCount({ id: item.id }))}
												className='p-2 bg-slate-700 text-yellow-50'>
												<AiOutlineMinus />
											</button>
										</div>
										<button
											onClick={() => dispatch(removeFromCart({ id: item.id }))}
											className='bg-red-300 text-red-950 rounded-xl px-4 py-2 flex items-center justify-evenly'>
											Delete
											<RiDeleteBinFill />
										</button>
									</div>
									<div className='order-1'>
										<Image
											className=' h-52'
											src={`http://localhost:1337${item.attributes.image.data.attributes.formats.small.url}`}
											priority={true}
											width={150}
											height={150}
											alt='asdasdasd asdasd'
										/>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className='mt-11 flex flex-col items-center justify-center'>
					<h1 className='font-light italic text-2xl text-center'>
						Total Price: ${totalPrice}
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
