'use client';

import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import { BiShoppingBag } from 'react-icons/bi';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/Provider';
import { setIsCartOpen } from '@/store';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {
	const dispatch = useDispatch();
	const open = useSelector((state: RootState) => {
		return state.cart.isCartOpen;
	});

	const cartHandler = () => {
		dispatch(setIsCartOpen());
	};
	return (
		<>
			{open && <ShoppingCart />}
			<nav className='h-16 w-full bg-[#262828] flex justify-evenly items-center text-white'>
				<div className='flex basis-[20%]'>
					<div className='flex items-center mr-2 basis-[50%]'>
						<Link href='/'>
							<h1 className='text-3xl px-3 mr-1'>Ecom</h1>
						</Link>
						<div className='h-16 w-[0.1px] bg-white'></div>
					</div>
					<div className='flex items-center basis-[50%]'>
						<div className='basis-[50%]'>
							<Link
								className='px-7 py-5 hover:bg-neutral-600'
								href='/men'>
								MEN
							</Link>
						</div>
						<div className='basis-[50%]'>
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
					<AiOutlineSearch className='text-2xl font-extrabold cursor-pointer text-green-600 absolute right-0 top-0 bottom-0 m-auto mr-3' />
				</div>
				<div className='flex items-center justify-end basis-[20%] text-2xl'>
					<div
						onClick={cartHandler}
						className='relative p-3 mx-4 cursor-pointer rounded-xl hover:bg-slate-700 '>
						<BiShoppingBag />
						<p className='text-sm absolute top-1 -right-1 text-black bg-slate-100 rounded-full px-1'>
							2
						</p>
					</div>
					<div className='p-2 mx-4 cursor-pointer rounded-xl hover:bg-slate-700'>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<AiOutlineUser />
								</TooltipTrigger>
								<TooltipContent side='bottom'>
									<p className='text-sm max-w-xs'>
										*Auth has not been implement, as its a portfolio
										project,people are generally not interested in signing up.
									</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
