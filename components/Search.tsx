import React from 'react';
import Link from 'next/link';

export default function Search() {
	return (
		<div className='flex items-center justify-between pb-4'>
			<label htmlFor='table-search' className='sr-only'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
					<svg
						className='w-5 h-5 text-gray-500 white:text-gray-400'
						aria-hidden='true'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
							clip-rule='evenodd'
						></path>
					</svg>
				</div>
				<input
					type='text'
					id='table-search'
					className='block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-white white:focus:ring-blue-500 white:focus:border-blue-500'
					placeholder='Search for items'
				/>
			</div>

			<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
				<Link href='/blog/create'>
					<p className='pb-1'>
						<span className='text-xl'> + </span> Create new blog
					</p>
				</Link>
			</button>
		</div>
	);
}
