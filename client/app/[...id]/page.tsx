'use client';

import Image from 'next/image';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { addToCart, decreaseCount, increaseCount } from '@/store';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const url = process.env.NEXT_PUBLIC_ACTIVE_URI;

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
	product: Item;
}

const ItemDetailPage = ({ params }: { params: { id: string } }) => {
	const [count, setCount] = useState(1);
	const [product, setProduct] = useState<ItemListProps['product'] | null>(null);
	const [items, setItems] = useState([]);
	const itemId = params.id[0];
	const dispatch = useDispatch();

	async function getItem() {
		const item = await fetch(`${url}/api/items/${itemId}?populate=image`, {
			method: 'GET',
		});
		const itemJson = await item.json();
		setProduct(itemJson.data);
	}

	async function getItems() {
		const items = await fetch(`${url}/api/items?populate=image`, {
			method: 'GET',
		});
		const itemsJson = await items.json();
		setItems(itemsJson.data);
	}

	useEffect(() => {
		getItem();
		getItems();
	}, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

	if (!product) return <h1>Loading...</h1>;

	const handleClick = () => {
		dispatch(decreaseCount({ id: product?.id }));
		if (count > 1) {
			setCount((prev) => prev - 1);
		}
	};

	return (
		<main>
			<div className='flex my-20 max-w-[1000px] mx-auto gap-16'>
				<div className='w-[2200px]'>
					<Image
						src={`${url}${product?.attributes.image.data.attributes.formats.medium.url}`}
						alt='Product image'
						className='w-full h-full'
						width={500}
						height={800}
					/>
				</div>
				<div className='p-9'>
					<h3 className='text-2xl'>{product?.attributes?.name}</h3>
					<p className='p-1 font-light italic mt-4'>
						short description: {product?.attributes?.shortDescription}
					</p>
					<h3 className=' my-6 text-xl font-bold italic'>
						${product?.attributes?.price}
					</h3>
					<h4 className='my-4 capitalize font-light italic'>
						Category: {product.attributes?.category}
					</h4>
					<div className='flex mb-7'>
						<button
							onClick={() => {
								dispatch(increaseCount({ id: product?.id }));
								setCount((prev) => prev + 1);
							}}
							className='p-2 bg-slate-700 text-yellow-50'>
							<AiOutlinePlus />
						</button>
						<p className=' p-3'>{count}</p>
						<button
							onClick={handleClick}
							className='p-2 bg-slate-700 text-yellow-50'>
							<AiOutlineMinus />
						</button>
					</div>
					<button
						onClick={() => {
							dispatch(addToCart({ item: { ...product, count } }));
						}}
						className='my-8 capitalize px-16 py-3 text-white bg-green-600 hover:bg-green-700'>
						Add to Cart
					</button>
				</div>
			</div>
			<div className='p-10 mx-auto max-w-[1200px] '>
				<h3 className='text-lg font-extrabold'>Product Description :</h3>
				<p className='my-4 p-5 font-thin'>
					{product.attributes?.longDescription}
				</p>
			</div>
		</main>
	);
};

export default ItemDetailPage;
