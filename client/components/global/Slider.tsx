'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart, setItems } from '@/store';

interface ItemAttributes {
	name: string;
	shortDescription: string;
	longDescription: string;
	price: number;
	category: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	gender: string;
	image: any; // You can replace 'any' with an appropriate image interface
}

interface Item {
	id: number;
	attributes: ItemAttributes;
}

interface ItemListProps {
	products: {
		data: Item[];
	};
}

const url = process.env.NEXT_PUBLIC_ACTIVE_URI;

const Slider: React.FC<ItemListProps> = ({ products }) => {
	const [count, setCount] = useState(1);
	const dispatch = useDispatch();

	const productContainersRef = useRef<HTMLElement[]>([]);
	const nxtBtnRefs = useRef<HTMLElement[]>([]);
	const preBtnRefs = useRef<HTMLElement[]>([]);

	const getItems = async () => {
		const res = await fetch(`${url}/api/items?populate=image`);
		const items = await await res.json();
		dispatch(setItems(items.data));
	};

	useEffect(() => {
		getItems();
	}, []);

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
				{products.data.map((product) => {
					return (
						<div
							key={product.id}
							className='product-card'>
							<div className='product-image'>
								<span className='discount-tag'>50% off</span>
								<Link href={`${product.id}`}>
									<Image
										src={`${url}${product.attributes.image.data.attributes.formats.medium.url}`}
										alt='Cover Image'
										width={800}
										height={800}
									/>
								</Link>
								<button
									onClick={() => {
										dispatch(addToCart({ item: { ...product, count } }));
									}}
									className='card-btn'>
									add to cart
								</button>
							</div>
							<div className='product-info'>
								<h2 className='product-brand'>{product.attributes.name}</h2>
								<p className='product-short-description'>
									{product.attributes.shortDescription.slice(0, 30)}...
								</p>
								<span className='price'>${product.attributes.price}</span>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Slider;
