import Tabs from '@/components/global/Tabs';
import Products from '@/components/global/Products';

const MenProductsPage = async () => {
	return (
		<main className='flex flex-col justify-center'>
			<Tabs />
			<Products />
		</main>
	);
};

export default MenProductsPage;
