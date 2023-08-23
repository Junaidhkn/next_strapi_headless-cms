import Tabs from '@/components/global/Tabs';
import Products from '@/components/global/Products';

const productsMen = async () => {
	const res = await fetch(
		'http://localhost:1337/api/items?populate=*&filters[gender]=male',
	);
	const products = await res.json();
	return products;
};

const MenProductsPage = async () => {
	const products = await productsMen();
	return (
		<main className='flex flex-col justify-center'>
			<Tabs />
			<Products products={products} />
		</main>
	);
};

export default MenProductsPage;
