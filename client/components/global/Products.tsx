import Image from 'next/image';

import CoverImage from '@/assets/florencia-simonini-PDZAMYvduVk-unsplash.jpeg';
import Link from 'next/link';

// async function getItems() {
// 	const res = await fetch('http://localhost:1337/api/items?populate=image');
// 	const data = await res.json();
// 	return data;
// }

const Products = async () => {
	// const data = await getItems();
	// console.log(data);
	return (
		<div className='p-11 grid gap-8 grid-cols-4'>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
				</div>
			</Link>
			<Link href={'men/asdasd'}>
				<div className='products-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to cart</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
					</div>
					L
				</div>
			</Link>
		</div>
	);
};

export default Products;
