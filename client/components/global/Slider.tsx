'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

import CoverImage from '@/assets/florencia-simonini-PDZAMYvduVk-unsplash.jpeg';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Slider: React.FC = () => {
	const productContainersRef = useRef<HTMLElement[]>([]);
	const nxtBtnRefs = useRef<HTMLElement[]>([]);
	const preBtnRefs = useRef<HTMLElement[]>([]);

	useEffect(() => {
		productContainersRef.current = Array.from(
			document.querySelectorAll('.product-container'),
		) as HTMLElement[];
		nxtBtnRefs.current = Array.from(
			document.querySelectorAll('.nxt-btn'),
		) as HTMLElement[];
		preBtnRefs.current = Array.from(
			document.querySelectorAll('.pre-btn'),
		) as HTMLElement[];

		const handleClick = (index: number, scrollOffset: number) => {
			const item = productContainersRef.current[index];
			if (item) {
				item.scrollLeft += scrollOffset;
			}
		};

		nxtBtnRefs.current.forEach((nxtBtn, i) => {
			nxtBtn.addEventListener('click', () =>
				handleClick(i, nxtBtn.offsetWidth),
			);
		});

		preBtnRefs.current.forEach((preBtn, i) => {
			preBtn.addEventListener('click', () =>
				handleClick(i, -preBtn.offsetWidth),
			);
		});

		return () => {
			nxtBtnRefs.current.forEach((nxtBtn) => {
				nxtBtn.removeEventListener('click', () => handleClick);
			});

			preBtnRefs.current.forEach((preBtn) => {
				preBtn.removeEventListener('click', () => handleClick);
			});
		};
	}, []);

	return (
		<section className='product'>
			<Link href='/best-sellers'>
				<h2 className='mb-8 font-bold text-3xl text-center text-slate-800'>
					Best Selling Products
				</h2>
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
