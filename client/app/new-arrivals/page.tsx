import Products from '@/components/global/Products';

const NewArrivals = async () => {
	const res = await fetch(
		'http://localhost:1337/api/items?populate=*&filters[category][$eq]=newArrivals',
	);
	const products = await res.json();
	return products;
};

const NewArrivalsPage = async () => {
	const products = await NewArrivals();
	return (
		<main className='flex flex-col justify-center'>
			<Products products={products} />
		</main>
	);
};

export default NewArrivalsPage;
