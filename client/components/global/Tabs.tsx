'use client';

const Tabs = ({ children }: { children: React.ReactNode }) => {
	// let classes = `px-5 py-2 hover:rounded-lg hover:border border-gray-900`;
	// const logicHandler = () => {
	// 	classes = `px-5 py-2 rounded-lg bg-slate-700 text-white font-bold`;
	// };
	return (
		<>
			<div className=' flex justify-center items-center h-24 w-full bg-slate-300'>
				<div className='flex gap-6'>
					<button className='px-5 py-2 hover:rounded-lg hover:border border-gray-900'>
						Top Rated
					</button>
					<span className='bg-slate-800 h-8 w-[0.5px]'></span>
					<button className='px-5 py-2 hover:rounded-lg hover:border border-gray-900 '>
						New Arrivals
					</button>
					<span className='bg-slate-800 h-8 w-[0.5px]'></span>
					<button className='px-5 py-2 hover:rounded-lg hover:border border-gray-900'>
						Best Selling
					</button>
				</div>
			</div>
			{children}
		</>
	);
};

export default Tabs;
