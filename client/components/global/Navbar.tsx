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
		<nav className='h-16 w-full bg-[#262828] flex justify-evenly items-center text-white items-center'>
			<div className='flex basis-[20%]'>
				<div className='flex items-center mr-2'>
					<Link href='/'>
						<h1 className='text-3xl px-3 mr-1'>Ecom</h1>
					</Link>
					<div className='h-16 w-[0.1px] bg-white'></div>
				</div>
				<div className='flex items-center'>
					<div>
						<Link
							className='px-3 py-5 hover:bg-neutral-600'
							href='/men'>
							MEN
						</Link>
					</div>
					<div>
						<Link
							className='px-3 py-5 hover:bg-neutral-600'
							href='/women'>
							WOMEN
						</Link>
					</div>
				</div>
			</div>
			<div className='flex basis-[40%] text-gray-900 relative'>
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
			<div className='flex items-center justify-end basis-[20%] text-2xl'>
				<div className='px-3 mx-4 cursor-pointer'>
					<FontAwesomeIcon icon={faCartShopping} />
				</div>
				<Link
					className='px-3'
					href='/signin'>
					<FontAwesomeIcon icon={faUser} />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
