import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const Marketing = () => {
	return (
		<div className='flex flex-col w-full'>
			<div className='flex h-16'>
				<div className='pointer basis-[50%] h-full flex items-center justify-center bg-black text-white text-center'>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<div className='text-sm tracking-wide'>
									<p>UP TO 50% OFF EVERYTHING!*</p>
									<p>Discounts revealed at checkout</p>
									<p>
										With code:
										<span className='ml-2 uppercase font-extrabold'>
											BIGDEAL
										</span>
									</p>
								</div>
							</TooltipTrigger>
							<TooltipContent side='bottom'>
								<p className='text-sm max-w-xs'>
									*Enter code BIGDEAL at checkout to receive discount.
									Percentage discounts will vary depending upon the product
									purchased. Ends 8am UTC+1 on 14 August 2023.
								</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<div className='delivery flex items-center justify-center  basis-[50%] h-full bg-pink-600 text-center'>
					Free Worldwide delivery
				</div>
			</div>
			<div className='design flex flex-col justify-center items-center'>
				<h3 className='font-normal text-3xl'>UP TO</h3>
				<h1 className='my-2 font-bold font-mono text-3xl text-slate-900'>
					50% OFF ON EVERYTHING!
				</h1>
				<h4 className=' text-2xl'> Discounts revealed at checkout</h4>
				<h3 className='text-2xl my-4'>
					With code:
					<span className='ml-3 text-4xl text-orange-800'>[`BIGDEAL`]</span>
				</h3>
				<p className='my-2 font-light text-xs pl-24'>
					* Terms & Conditions Apply
				</p>
			</div>
		</div>
	);
};

export default Marketing;
