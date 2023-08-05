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
		<nav className='h-16 w-full bg-[#262828] flex justify-between text-white items-center px-11'>
			<div className='flex-grow'>
				<Link href='/'>
					<h1 className='text-3xl'>Logo/ title</h1>
				</Link>
			</div>
			<div className='flex'>
				<div>
					<Link href='/'></Link>
				</div>
				<div>
					<Link href='/'></Link>
				</div>
			</div>
			<div className='flex flex-grow text-gray-900'>
				<Input type='search' />
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</div>
			<div className='flex flex-grow text-2xl'>
				<FontAwesomeIcon icon={faCartShopping} />
				<Link href='/signin'>
					<FontAwesomeIcon icon={faUser} />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
