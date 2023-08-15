import Link from 'next/link';

const Footer = () => {
	return (
		<>
			<div className='flex justify-center gap-8 items-center h-14 bg-slate-600'>
				<div className='bg-white'>Social Icons</div>
				<span className='bg-slate-800 h-8 w-[0.5px]'></span>
				<div className='bg-rose-800'>card icon</div>
			</div>
			<div className='flex flex-col'>
				<div className='flex bg-slate-400 text-gray-700 w-full h-16'>
					<div className='flex basis-[30%] items-center'>
						<h1 className='text-3xl px-3 mr-1 h-full bg-slate-900 flex items-center'>
							Ecom
						</h1>
					</div>
					<div className='basis-[70%]'>
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
					</div>
				</div>
				<footer className=' flex w-full h-6 bg-black/50'>
					<p className=''>copyrights</p>
					<p className=''></p>
				</footer>
			</div>
		</>
	);
};

export default Footer;
