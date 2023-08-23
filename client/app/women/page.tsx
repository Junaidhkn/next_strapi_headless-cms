import Tabs from '@/components/global/Tabs';
import Products from '@/components/global/Products';

const productsWomen = async () => {
	const res = await fetch(
		'http://localhost:1337/api/items?populate=*&filters[gender]=female',
	);
	const products = await res.json();
	return products;
};

const WomenProductsPage = async () => {
	const products = await productsWomen();
	return (
		<main className='flex flex-col justify-center'>
			<Tabs />
			<Products products={products} />
		</main>
	);
};

export default WomenProductsPage;
