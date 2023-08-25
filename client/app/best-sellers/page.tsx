import Products from '@/components/global/Products';

const url = process.env.NEXT_PUBLIC_ACTIVE_URI;

const BestSellers = async () => {
	const res = await fetch(
		`${url}/api/items?populate=*&filters[category][$eq]=bestSellers`,
	);
	const products = await res.json();
	return products;
};

const BestSellersPage = async () => {
	const products = await BestSellers();
	return (
		<main className='flex flex-col justify-center'>
			<Products products={products} />
		</main>
	);
};

export default BestSellersPage;
