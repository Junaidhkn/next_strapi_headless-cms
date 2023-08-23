import Tabs from '@/components/global/Tabs';
import Products from '@/components/global/Products';

const products = {};

const MenProductsPage = async () => {
	return (
		<main className='flex flex-col justify-center'>
			<Tabs />
			<Products products={products} />
		</main>
	);
};

export default MenProductsPage;
