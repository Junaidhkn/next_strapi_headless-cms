import Image from 'next/image';

import CoverImage from '../assets/coverImg.jpg';
import ArrowImage from '@assets/arrow.png';

const Slider = () => {
	return (
		<section className='product'>
			<h2 className='product-category'>best selling</h2>
			<button className='pre-btn'>
				<Image
					src={ArrowImage}
					alt=''
					width={40}
					height={40}
				/>
			</button>
			<button className='nxt-btn'>
				<Image
					src={ArrowImage}
					alt=''
					width={40}
					height={40}
				/>
			</button>
			<div className='product-container'>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
				<div className='product-card'>
					<div className='product-image'>
						<span className='discount-tag'>50% off</span>
						<Image
							src={CoverImage}
							alt='Cover Image'
							width={800}
							height={800}
						/>
						<button className='card-btn'>add to wishlist</button>
					</div>
					<div className='product-info'>
						<h2 className='product-brand'>brand</h2>
						<p className='product-short-description'>
							a short line about the cloth..
						</p>
						<span className='price'>$20</span>
						<span className='actual-price'>$40</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Slider;
