'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCartShopping,
	faMagnifyingGlass,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Input } from '@/components/ui/input';

const Navbar = () => {
	return (
		<nav className='h-16 w-full bg-[#262828] flex flex-grow basis-auto justify-between text-white items-center'>
			<div className='flex justify-around items-center'>
				<div className='flex items-center'>
					<Link href='/'>
						<h1 className='text-3xl mr-1'>Ecom Things</h1>
					</Link>
					<div className='h-16 w-[0.1px] bg-white'></div>
				</div>
				<div className='flex justify-around ml-0 h-16 border border-white items-center'>
					<div className=' h-full w-7'>
						<Link href='/men'>MEN</Link>
					</div>
					<div>
						<Link href='/women'>WOMEN</Link>
					</div>
				</div>
				<div className='flex text-gray-900 relative'>
					<Input
						type='search'
						className='py-3 px-9 text-lg'
						placeholder='Search for products'
					/>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						className=' font-extrabold cursor-pointer text-green-600 absolute right-0 top-0 bottom-0 m-auto mr-3'
					/>
				</div>
			</div>
			<div className='flex flex-grow basis-auto text-2xl'>
				<FontAwesomeIcon icon={faCartShopping} />
				<Link href='/signin'>
					<FontAwesomeIcon icon={faUser} />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
