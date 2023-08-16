'use client';

import Image from 'next/image';

import CoverImage from '@/assets/florencia-simonini-PDZAMYvduVk-unsplash.jpeg';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ShoppingCart = () => {
	return (
		<main className=''>
			<div>
				<h1 className=''>Shopping Cart</h1>
				<p>Total Items: 4</p>
			</div>
			<div className=''>
				<h3>Product Name</h3>
				<p>Price</p>
				<p>Quantity</p>
				<div className=''>
					<Image
						className=''
						src={CoverImage}
						width={200}
						height={200}
						alt='asdasdasd asdasd'
					/>
				</div>
				<div>
					<button className=''>
						<AiOutlinePlus />
					</button>
					<p>Quantity</p>
					<button className=''>
						<AiOutlineMinus />
					</button>
				</div>
			</div>
			<div className=''>
				<h3>Product Name</h3>
				<p>Price</p>
				<p>Quantity</p>
				<div className=''>
					<Image
						className=''
						src={CoverImage}
						width={200}
						height={200}
						alt='asdasdasd asdasd'
					/>
				</div>
				<div>
					<button className=''>
						<AiOutlinePlus />
					</button>
					<p>Quantity</p>
					<button className=''>
						<AiOutlineMinus />
					</button>
				</div>
			</div>
			<div className=''>
				<h3>Product Name</h3>
				<p>Price</p>
				<p>Quantity</p>
				<div className=''>
					<Image
						className=''
						src={CoverImage}
						width={200}
						height={200}
						alt='asdasdasd asdasd'
					/>
				</div>
				<div>
					<button className=''>
						<AiOutlinePlus />
					</button>
					<p>Quantity</p>
					<button className=''>
						<AiOutlineMinus />
					</button>
				</div>
			</div>
			<div className=''>
				<button>CheckOut</button>
			</div>
		</main>
	);
};

export default ShoppingCart;
