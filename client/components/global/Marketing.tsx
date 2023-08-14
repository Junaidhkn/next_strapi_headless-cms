const Marketing = () => {
	return (
		<div className='flex flex-col w-full'>
			<div className='flex h-16'>
				<div className='basis-[50%] h-full flex items-center justify-center bg-black text-white text-center'>
					<p className='text-sm tracking-wide'>
						<p>UP TO 50% OFF EVERYTHING!*</p>
						<p>Discounts revealed at checkout</p>
						<p>
							With code:
							<span className='ml-2 uppercase font-extrabold'>BIGDEAL</span>
						</p>
					</p>
				</div>
				<div className='delivery flex items-center justify-center  basis-[50%] h-full bg-pink-600 text-center'>
					Free Worldwide delivery
				</div>
			</div>
			<div className='flex flex-col text-center'></div>
		</div>
	);
};

export default Marketing;
