import Image from 'next/image';
import Link from 'next/link';

import CoverImage from '../assets/coverImg.jpg';
import Marketing from '@/components/global/Marketing';

const HomePage = () => {
	return (
		<main>
			<Marketing />
			<div className='p-14 flex gap-5'>
				<Link href='/men'>
					<Image
						src={CoverImage}
						alt='Cover Image'
						width={800}
						height={800}
					/>
				</Link>
				<Link href='/women'>
					<Image
						src={CoverImage}
						alt='Cover Image'
						width={800}
						height={800}
					/>
				</Link>
			</div>
			<Link href='/top-rated'>
				<h3 className='font-bold text-3xl text-center text-slate-800'>
					Top Rated Products
				</h3>
			</Link>
			<div className='grid display_products p-5'>
				<div className='bg-black pointer '>
					<Image
						src={CoverImage}
						alt='Cover Image'
						width={800}
						height={800}
					/>
				</div>
				<div className='bg-black'>product</div>
				<div className='bg-black'>product</div>
			</div>
			<Link href='/best-sellers'>
				<h3 className='font-bold text-3xl text-center text-slate-800'>
					Best Selling Products
				</h3>
			</Link>
			<div className='grid display_products p-5'>
				<div className='bg-black pointer '>
					<Image
						src={CoverImage}
						alt='Cover Image'
						width={800}
						height={800}
					/>
				</div>
				<div className='bg-black'>product</div>
				<div className='bg-black'>product</div>
			</div>
		</main>
	);
};

export default HomePage;
