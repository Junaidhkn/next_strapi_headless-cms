import Link from 'next/link';

import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoMastercard, BiLogoPaypal, BiLogoVisa } from 'react-icons/bi';
import { BsSnapchat } from 'react-icons/bs';

const Footer = () => {
	return (
		<>
			<div className='my-20 flex justify-center gap-16 items-center h-14 bg-slate-50'>
				<div className='flex text-6xl gap-10'>
					<div className='text-pink-600'>
						<AiFillInstagram />
					</div>
					<div className='text-blue-500'>
						<AiOutlineTwitter />
					</div>
					<div className='text-yellow-500'>
						<BsSnapchat />
					</div>
				</div>
				<span className='bg-slate-800 h-8 w-[0.5px]'></span>
				<div className='flex text-6xl gap-10'>
					<div className='text-red-300'>
						<BiLogoVisa />
					</div>
					<div className='text-blue-800'>
						<BiLogoPaypal />
					</div>
					<div className='text-red-500'>
						<BiLogoMastercard />
					</div>
				</div>
			</div>
			<div className='flex flex-col'>
				<div className='flex items-center bg-slate-300 text-gray-700 w-full h-16'>
					<div className='flex basis-[10%] items-center'>
						<Link href='/'>
							<h1 className='text-3xl px-3 mr-1 h-16 bg-slate-900 flex items-center'>
								Ecom
							</h1>
						</Link>
					</div>
					<div className='flex justify-between basis-[90%]'>
						<div className='flex gap-36 items-center'>
							<ul className='flex justify-start gap-4'>
								<Link href='/men'>
									<li className='px-5'>Men</li>
								</Link>
								<Link href='/women'>
									<li className='px-5'>Women</li>
								</Link>
							</ul>
							<span className='bg-slate-800 h-8 w-[0.5px]'></span>
							<ul className='flex gap-6'>
								<Link href='/best-sellers'>
									<li className='px-5'>Best Sellers</li>
								</Link>
								<Link href='/top-rated'>
									<li className='px-5'>Top Rated</li>
								</Link>
								<Link href='/new-arrivals'>
									<li className='px-5'>New Arrivals</li>
								</Link>
							</ul>
						</div>
					</div>
				</div>
				<footer className='flex justify-evenly items-center w-full h-12 bg-orange-200'>
					<p className=''>&copy; 2023-26 ECOM. All rights reserved</p>
					<p className=''>Made with ❤️ by Junaid Hassan Khan</p>
				</footer>
			</div>
		</>
	);
};

export default Footer;
