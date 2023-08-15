import Image from 'next/image';

import ProductImage from '@/assets/isaac-ramirez-EQgNKdk-Luk-unsplash.jpg';

const itemDetailPage = () => {
	return (
		<main>
			<div className='flex my-20 max-w-[1000px] mx-auto gap-16'>
				<div>
					<Image
						src={ProductImage}
						alt='Product image'
						width={500}
						height={800}
					/>
				</div>
				<div className='p-9'>
					<h3 className='text-2xl'>Name of Product</h3>
					<p className='p-1 font-light italic mt-4'>
						short description: New Look worldwide print t-shirt in mid-blue
					</p>
					<h3 className=' my-6 text-xl font-bold italic'>$15.00</h3>
					<h4>Category: {}</h4>
					<button className='my-8 capitalize px-16 py-3 text-white bg-green-600 hover:bg-green-700'>
						Add to Cart
					</button>
				</div>
			</div>
			<div className='p-10 mx-auto  '>
				<h3 className='text-lg font-extrabold'>Product Description :</h3>
				<p className='my-4 p-5 font-thin'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, at
					enim. Odit aperiam dignissimos sapiente ipsum earum ipsa dolor! Nulla
					enim debitis similique voluptates, culpa et asperiores quas recusandae
					at?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
					exercitationem debitis ea recusandae magnam, veniam unde ullam.
					Dignissimos ducimus fugiat voluptates. Expedita quis cum dolorem
					blanditiis voluptates quos impedit dolor.loremVero exercitationem
					debitis ea recusandae magnam, veniam unde ullam. Dignissimos ducimus
					fugiat voluptates. Expedita quis cum dolorem blanditiis voluptates
					quos impedit dolor.lorem Vero exercitationem debitis ea recusandae
					magnam, veniam unde ullam. Dignissimos ducimus fugiat voluptates.
					Expedita quis cum dolorem blanditiis voluptates quos impedit
					dolor.lorem Vero exercitationem debitis ea recusandae magnam, veniam
					unde ullam. Dignissimos ducimus fugiat voluptates. Expedita quis cum
					dolorem blanditiis voluptates quos impedit dolor.lorem
				</p>
			</div>
		</main>
	);
};

export default itemDetailPage;
