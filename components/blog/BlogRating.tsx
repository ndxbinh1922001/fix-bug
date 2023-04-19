import { Rating } from 'flowbite-react';
import Link from 'next/link';
const BlogRating = () => {
	return (
		<div className='w-full h-min bg-white rounded-sm'>
			<div className='m-2 font-medium text-base border-b border-slate-400 pb-1'>
				Rating
			</div>
			<div className='flex flex-col justify-center gap-4 m-2'>
				<Rating>
					<Rating.Star />
					<Rating.Star />
					<Rating.Star />
					<Rating.Star />
					<Rating.Star filled={false} />
					<p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
						4.95 out of 5
					</p>
				</Rating>
				<p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
					1,745 global ratings
				</p>
				<Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
				<Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
				<Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
				<Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
				<Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
			</div>
		</div>
	);
};

export default BlogRating;
