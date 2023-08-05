'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	return (
		<nav className='h-16 w-full bg-slate-900 flex justify-between text-white items-center px-11'>
			<Link href='/'>
				<h1 className='text-3xl'>Logo/ title</h1>
			</Link>
			<div className='flex text-2xl'>
				<Link href='/products'>
					<h3 className='px-5'>Products</h3>
				</Link>
				<div>
					<FontAwesomeIcon icon={faCartShopping} />
				</div>
				<Link href='/signin'>
					<h3 className='px-5'>Signin</h3>
				</Link>
				<Link href='/register'>
					<h3 className='px-5'>Register</h3>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
