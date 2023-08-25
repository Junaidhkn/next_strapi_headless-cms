import Tabs from '@/components/global/Tabs';

const url = process.env.NEXT_PUBLIC_ACTIVE_URI;

const productsMenAll = async () => {
	const res = await fetch(`${url}/api/items?populate=*&filters[gender]=male`);
	const products = await res.json();
	return products;
};

const productsMenTopRated = async () => {
	const res = await fetch(
		`${url}/api/items?populate=*&filters[gender][$eq]=male&filters[category]=topRated`,
	);
	const products = await res.json();
	return products;
};

const productsMenNewArrivals = async () => {
	const res = await fetch(
		`${url}/api/items?populate=*&filters[gender][$eq]=male&filters[category]=newArrivals`,
	);
	const products = await res.json();
	return products;
};

const productsMenBestSelling = async () => {
	const res = await fetch(
		`${url}/api/items?populate=*&filters[gender][$eq]=male&filters[category]=bestSelling`,
	);
	const products = await res.json();
	return products;
};

const MenProductsPage = async () => {
	const allProducts = await productsMenAll();
	const topRatedProducts = await productsMenTopRated();
	const newArrivalProducts = await productsMenNewArrivals();
	const bestSellingProducts = await productsMenBestSelling();
	return (
		<main className='flex flex-col justify-center'>
			<Tabs
				allProducts={allProducts}
				topRatedProducts={topRatedProducts}
				newArrivalProducts={newArrivalProducts}
				bestSellingProducts={bestSellingProducts}
			/>
		</main>
	);
};

export default MenProductsPage;
