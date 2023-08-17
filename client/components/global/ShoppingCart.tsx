'use client';

import Image from 'next/image';

import CoverImage from '@/assets/florencia-simonini-PDZAMYvduVk-unsplash.jpeg';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

const ShoppingCart = () => {
	return (
		<main className='relative w-full h-screen bg-slate-800/75 overflow-y-scroll '>
			<div className='p-8 absolute w-[370px] border border-red-800 flex flex-col bg-slate-300'>
				<button className='absolute w-8 p-2 text-lg top-2 right-5'>
					<ImCross />
				</button>
				<div className='flex flex-col mb-9 items-center'>
					<h1 className='mb-4 text-center text-3xl text-gray-800'>
						Shopping Cart
					</h1>
					<p className='font-light italic'>Total Items: 4</p>
					<span className=' w-64 h-[0.3px] bg-slate-400'></span>
				</div>
				<div className='flex justify-evenly'>
					<div className='flex flex-col'>
						<h3 className=''>Product Name</h3>
						<p className=''>Price</p>
						<p className=''>Quantity</p>
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
					<div className='flex'>
						<button className=''>
							<AiOutlinePlus />
						</button>
						<p className=''>Quantity</p>
						<button className=''>
							<AiOutlineMinus />
						</button>
					</div>
				</div>
				<div className=''>
					<h3 className=''>Product Name</h3>
					<p className=''>Price</p>
					<p className=''>Quantity</p>
					<div className=''>
						<Image
							className=''
							src={CoverImage}
							width={200}
							height={200}
							alt='asdasdasd asdasd'
						/>
					</div>
					<div className=''>
						<button className=''>
							<AiOutlinePlus />
						</button>
						<p className=''>Quantity</p>
						<button className=''>
							<AiOutlineMinus />
						</button>
					</div>
				</div>
				<div className=''>
					<h3 className=''>Product Name</h3>
					<p className=''>Price</p>
					<p className=''>Quantity</p>
					<div className=''>
						<Image
							className=''
							src={CoverImage}
							width={200}
							height={200}
							alt='asdasdasd asdasd'
						/>
					</div>
					<div className=''>
						<button className=''>
							<AiOutlinePlus />
						</button>
						<p className=''>Quantity</p>
						<button className=''>
							<AiOutlineMinus />
						</button>
					</div>
				</div>
				<div className=''>
					<button className=''>CheckOut</button>
				</div>
			</div>
		</main>
	);
};

export default ShoppingCart;
