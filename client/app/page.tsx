import Image from 'next/image';
import Link from 'next/link';

import CoverImageMen from '@/assets/menCover.jpg';
import CoverImageWomen from '@/assets/womenCover.jpg';
import Marketing from '@/components/global/Marketing';
import Slider from '@/components/global/Slider';
import Products from '@/components/global/Products';

const topRatedProducts = async () => {
	const res = await fetch(
		'http://localhost:1337/api/items?populate=*&filters[category][$eq]=topRated&pagination[limit]=4',
	);
	const products = await res.json();
	return products;
};

const bestSellingProducts = async () => {
	const res = await fetch(
		'http://localhost:1337/api/items?populate=*&filters[category][$eq]=bestSellers',
	);
	const products = await res.json();
	return products;
};

const HomePage = async () => {
	const topRated = await topRatedProducts();
	const bestSellers = await bestSellingProducts();
	return (
		<main className=''>
			<Marketing />
			<div className='p-14 flex justify-center gap-8'>
				<Link
					href='/men'
					className='relative hover:opacity-90'>
					<Image
						className='imageStyle object-contain'
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
			<div className='max-w-[1250px] text-center mx-auto'>
				<Products products={topRated} />
			</div>
			<Slider products={bestSellers} />
		</main>
	);
};

export default HomePage;
