import Tabs from '@/components/global/Tabs';
import Products from '@/components/global/Products';

const MenProductsPage = () => {
	return (
		<main className='flex flex-col justify-center'>
			<Tabs>
				<Products />
			</Tabs>
		</main>
	);
};

export default MenProductsPage;
