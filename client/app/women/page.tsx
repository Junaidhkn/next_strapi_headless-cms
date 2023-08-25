import Products from '@/components/global/Products';

const url = process.env.NEXT_PUBLIC_ACTIVE_URI;

const productsWomen = async () => {
	const res = await fetch(`${url}/api/items?populate=*&filters[gender]=female`);
	const products = await res.json();
	return products;
};

const WomenProductsPage = async () => {
	const products = await productsWomen();
	return (
		<main className='flex flex-col justify-center'>
			<Products products={products} />
		</main>
	);
};

export default WomenProductsPage;
