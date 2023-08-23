import Image from 'next/image';
import Link from 'next/link';

import CoverImageMen from '@/assets/menCover.jpg';
import CoverImageWomen from '@/assets/womenCover.jpg';
import Marketing from '@/components/global/Marketing';
import Slider from '@/components/global/Slider';

const HomePage = async () => {
	return (
		<main className=''>
			<Marketing />
			<div className='p-14 flex justify-center gap-8'>
				<Link
					href='/men'
					className='relative hover:opacity-90'>
					<Image
						className='imageStyle'
						src={CoverImageMen}
						alt='Cover Image'
						width={500}
						height={700}
					/>
					<button className='px-7 py-3 absolute bg-red-500 top-[50%] left-[40%] opacity-7'>
						Men
					</button>
				</Link>
				<Link
					href='/women'
					className='relative hover:opacity-90'>
					<Image
						className='imageStyle'
						src={CoverImageWomen}
						alt='Cover Image'
						width={500}
						height={700}
					/>
					<button className='px-7 py-3 absolute bg-red-500 top-[50%] left-[40%] opacity-7'>
						Women
					</button>
				</Link>
			</div>
			<Link href='/top-rated'>
				<h3 className='font-bold text-3xl text-center text-slate-800'>
					Top Rated Products
				</h3>
			</Link>
			<div className='grid display_products p-5'>
				{/* <div className='bg-black pointer '>
					<Image
						src={CoverImageMen}
						alt='Cover Image'
						width={800}
						height={800}
					/>
				</div>
				<div className='bg-black'>product</div>
				<div className='bg-black'>product</div> */}
			</div>
			<Slider />
		</main>
	);
};

export default HomePage;
