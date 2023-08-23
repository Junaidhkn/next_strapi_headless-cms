import Image from 'next/image';
import Link from 'next/link';

interface ItemAttributes {
	name: string;
	shortDescription: string;
	longDescription: string;
	price: number;
	category: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	gender: string;
	image: any; // You can replace 'any' with an appropriate image interface
}

interface Item {
	id: number;
	attributes: ItemAttributes;
}

interface ItemListProps {
	products: {
		data: Item[];
	};
}

const Products = ({ products }: ItemListProps) => {
	if (products.data.length === 0)
		return (
			<h1 className='text-red-600 font-extrabold text-center m-8'>
				No products found!
			</h1>
		);
	return (
		<div className='p-11 grid gap-8 grid-cols-4'>
			{products.data.map((product) => {
				return (
					<Link
						href={'men/asdasd'}
						className='w-[250px]'
						key={product.id}>
						<div className='products-card'>
							<div className='product-image'>
								<span className='discount-tag'>50% off</span>
								<Image
									src={`http://localhost:1337${product.attributes.image.data.attributes.formats.medium.url}`}
									alt='Cover Image'
									width={800}
									height={800}
								/>
								<button className='card-btn'>add to cart</button>
							</div>
							<div className='product-info'>
								<h2 className='product-brand'>{product.attributes.name}</h2>
								<p className='product-short-description'>
									{product.attributes.shortDescription.slice(0, 30)}...
								</p>
								<span className='price'>${product.attributes.price}</span>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Products;
