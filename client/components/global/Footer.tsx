import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='fixed bottom-0 bg-slate-400 text-gray-700 flex w-full h-40'>
			<div className=''>
				<h1 className=''>Ecom</h1>
			</div>
			<ul className='flex'>
				<Link href='/men'>
					<li className=''>Men</li>
				</Link>
				<Link href='/women'>
					<li className=''>Women</li>
				</Link>
				<Link href='/best-sellers'>
					<li className=''>Best Sellers</li>
				</Link>
				<Link href='/new-arrivals'>
					<li className=''>New Arrivals</li>
				</Link>
				<Link href='/top-rated'>
					<li className=''>Top Rated</li>
				</Link>
			</ul>
		</footer>
	);
};

export default Footer;
