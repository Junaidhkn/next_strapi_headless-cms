import Image from 'next/image';
import Link from 'next/link';

import CoverImage from '../assets/coverImg.jpg';
import Marketing from '@/components/global/Marketing';

const HomePage = () => {
	return (
		<main>
			<Marketing />
			<div>
				<Link href='/men'>
					<Image
						src={CoverImage}
						alt='Cover Image'
						width={800}
						height={800}
					/>
				</Link>
			</div>
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
			<div className='featured'>
				<h1>Featured Products</h1>
				<div>
					<Image
						src={CoverImage}
						alt='Cover Image'
						width={800}
						height={800}
					/>
				</div>
				<div>
					<Image
						src={CoverImage}
						alt='Cover Image'
						width={800}
						height={800}
					/>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
