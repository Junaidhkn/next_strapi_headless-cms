'use client';

import Image from 'next/image';

import CoverImage from '@/assets/florencia-simonini-PDZAMYvduVk-unsplash.jpeg';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { RiDeleteBinFill } from 'react-icons/ri';

const ShoppingCart = () => {
	return (
		<main className='fixed right-0 top-16 bottom-0 w-[470px] h-full'>
			<div className='p-6 w-full flex flex-col bg-slate-300 max-h-[550px] overflow-y-scroll'>
				<button className='absolute w-8 p-2 text-lg top-4 left-5'>
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
						<div className='flex justify-evenly gap-6 border bottom-1 p-2'>
							<div className='flex flex-col'>
								<h3 className='mb-4'>Product Name</h3>
								<p className='mb-4'>Price</p>
								<div className='flex mb-7'>
									<button className='p-2 bg-slate-700 text-yellow-50'>
										<AiOutlinePlus />
									</button>
									<p className=' p-3'>Quantity</p>
									<button className='p-2 bg-slate-700 text-yellow-50'>
										<AiOutlineMinus />
									</button>
								</div>
								<button className='bg-red-300 text-red-950 rounded-xl px-4 py-2 flex items-center justify-evenly'>
									Delete
									<RiDeleteBinFill />
								</button>
							</div>
							<div className='order-1'>
								<Image
									className=' h-52'
									src={CoverImage}
									priority={true}
									width={150}
									height={150}
									alt='asdasdasd asdasd'
								/>
							</div>
						</div>
						<div className='flex justify-evenly gap-6  border bottom-1 p-2'>
							<div className='flex flex-col'>
								<h3 className='mb-4'>Product Name</h3>
								<p className='mb-4'>Price</p>
								<div className='flex mb-7'>
									<button className='p-2 bg-slate-700 text-yellow-50'>
										<AiOutlinePlus />
									</button>
									<p className=' p-3'>Quantity</p>
									<button className='p-2 bg-slate-700 text-yellow-50'>
										<AiOutlineMinus />
									</button>
								</div>
								<button className='bg-red-300 text-red-950 rounded-xl px-4 py-2 flex items-center justify-center'>
									Delete
									<RiDeleteBinFill />
								</button>
							</div>
							<div className='order-1'>
								<Image
									className=' h-52'
									src={CoverImage}
									priority={true}
									width={150}
									height={150}
									alt='asdasdasd asdasd'
								/>
							</div>
						</div>
						<div className='flex justify-evenly gap-6  border bottom-1 p-2'>
							<div className='flex flex-col'>
								<h3 className='mb-4'>Product Name</h3>
								<p className='mb-4'>Price</p>
								<div className='flex mb-7'>
									<button className='p-2 bg-slate-700 text-yellow-50'>
										<AiOutlinePlus />
									</button>
									<p className=' p-3'>Quantity</p>
									<button className='p-2 bg-slate-700 text-yellow-50'>
										<AiOutlineMinus />
									</button>
								</div>
								<button className='bg-red-300 text-red-950 rounded-xl px-4 py-2 flex items-center justify-center'>
									Delete
									<RiDeleteBinFill />
								</button>
							</div>
							<div className='order-1'>
								<Image
									className=' h-52'
									src={CoverImage}
									priority={true}
									width={150}
									height={150}
									alt='asdasdasd asdasd'
								/>
							</div>
						</div>
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
