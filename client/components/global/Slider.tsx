'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';

import CoverImage from '@/assets/florencia-simonini-PDZAMYvduVk-unsplash.jpeg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Slider = () => {
	useEffect(() => {
		const productContainers = Array.from(
			document.querySelectorAll('.product-container'),
		) as HTMLElement[];
		const nxtBtn = Array.from(
			document.querySelectorAll('.nxt-btn'),
		) as HTMLElement[];
		const preBtn = Array.from(
			document.querySelectorAll('.pre-btn'),
		) as HTMLElement[];

		productContainers.forEach((item, i) => {
			let containerDimensions = item.getBoundingClientRect();
			let containerWidth = containerDimensions.width;

			nxtBtn[i].addEventListener('click', () => {
				item.scrollLeft += containerWidth;
			});

			preBtn[i].addEventListener('click', () => {
				item.scrollLeft -= containerWidth;
			});
		});
	}, []);

	return (
		<section className='product'>
			<Link href='/best-sellers'>
				<h2 className='product-category'>best selling</h2>
			</Link>
			<button className='pre-btn text-2xl'>
				<AiOutlineArrowRight />
			</button>
			<button className='nxt-btn text-2xl'>
				<AiOutlineArrowRight />
			</button>
			<div className='product-container'>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
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
						<span className='actual-price'>$40</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Slider;
