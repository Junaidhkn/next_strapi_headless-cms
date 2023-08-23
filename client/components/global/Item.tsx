import Image from 'next/image';

import CoverImage from '@/assets/florencia-simonini-PDZAMYvduVk-unsplash.jpeg';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';

const Item = () => {
	return (
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
	);
};

export default Item;
