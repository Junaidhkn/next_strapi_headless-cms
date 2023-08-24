import Products from '@/components/global/Products';

const topRated = async () => {
	const res = await fetch(
		'http://localhost:1337/api/items?populate=*&filters[category][$eq]=topRated',
	);
	const products = await res.json();
	return products;
};

const TopRatedPage = async () => {
	const products = await topRated();
	return (
		<main className='flex flex-col justify-center'>
			<Products products={products} />
		</main>
	);
};

export default TopRatedPage;
