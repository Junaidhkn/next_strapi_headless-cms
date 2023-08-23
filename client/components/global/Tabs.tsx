'use client';

import {
	ComponentProps,
	ComponentPropsWithRef,
	PropsWithRef,
	useState,
} from 'react';
import Products from './Products';

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

interface TabsProps {
	allProducts: ItemListProps;
	topRatedProducts: ItemListProps;
	newArrivalProducts: ItemListProps;
	bestSellingProducts: ItemListProps;
}

const Tabs: React.FC<TabsProps> = ({
	allProducts,
	topRatedProducts,
	newArrivalProducts,
	bestSellingProducts,
}) => {
	const [activeButton, setActiveButton] = useState(1);

	const logicHandler = (buttonId: number) => {
		setActiveButton(buttonId);
	};

	let products = allProducts;

	if (activeButton === 2) {
		products = topRatedProducts;
	}
	if (activeButton === 3) {
		products = newArrivalProducts;
	}
	if (activeButton === 4) {
		products = bestSellingProducts;
	}

	return (
		<>
			<div className=' flex justify-center items-center h-24 w-full bg-slate-300'>
				<div className='flex gap-6'>
					<button
						onClick={() => logicHandler(1)}
						className={
							activeButton === 1
								? 'px-5 py-2 rounded-lg bg-slate-700 text-white font-bold'
								: 'px-5 py-2 hover:rounded-lg hover:border border-gray-900'
						}>
						All
					</button>
					<span className='bg-slate-800 h-8 w-[0.5px]'></span>
					<button
						onClick={() => logicHandler(2)}
						className={
							activeButton === 2
								? 'px-5 py-2 rounded-lg bg-slate-700 text-white font-bold'
								: 'px-5 py-2 hover:rounded-lg hover:border border-gray-900'
						}>
						Top Rated
					</button>
					<span className='bg-slate-800 h-8 w-[0.5px]'></span>
					<button
						onClick={() => logicHandler(3)}
						className={
							activeButton === 3
								? 'px-5 py-2 rounded-lg bg-slate-700 text-white font-bold'
								: 'px-5 py-2 hover:rounded-lg hover:border border-gray-900'
						}>
						New Arrivals
					</button>
					<span className='bg-slate-800 h-8 w-[0.5px]'></span>
					<button
						onClick={() => logicHandler(4)}
						className={
							activeButton === 4
								? 'px-5 py-2 rounded-lg bg-slate-700 text-white font-bold'
								: 'px-5 py-2 hover:rounded-lg hover:border border-gray-900'
						}>
						Best Selling
					</button>
				</div>
			</div>
			<Products products={products} />
		</>
	);
};

export default Tabs;
