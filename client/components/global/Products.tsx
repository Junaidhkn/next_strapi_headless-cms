'use client';

import { addToCart } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

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

const Products = ({ products }: ItemListProps) => {
	const [count, setCount] = useState(1);
	const dispatch = useDispatch();
	if (products.data.length === 0)
		return (
			<h1 className='text-red-600 font-extrabold text-center m-8'>
				No products found!
			</h1>
		);
	return (
		<div className='max-w-[1350px] mx-auto p-11 grid gap-8 grid-cols-4'>
			{products.data.map((product) => {
				return (
					<div
						key={product.id}
						className='product-card'>
						<div className='product-image'>
							<Link
								href={`/${product.id}`}
								className='w-[250px]'>
								<Image
									src={`${url}${product?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
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
	);
};

export default Products;
