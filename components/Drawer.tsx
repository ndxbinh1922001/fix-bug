import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
interface IDrawerProps {
	isDisplay: boolean;
	setIsDisplay: Dispatch<SetStateAction<boolean>>;
}
const Drawer = (props: IDrawerProps) => {
	return (
		<div
			className={`layer fixed top-0 right-0 h-screen lg:hidden md:hidden flex justify-between ${
				props.isDisplay ? 'sidebar-active' : 'sidebar'
			}`}
		>
			<div className='w-3/4 h-full bg-[#ffffff] pt-[30px] '>
				<form className='px-[30px]'>
					<label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
						Search
					</label>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
							<svg
								aria-hidden='true'
								className='w-5 h-5 text-gray-500 dark:text-gray-400'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
								></path>
							</svg>
						</div>
						<input
							type='search'
							id='search'
							className='block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50  '
							placeholder='Search'
							required
						/>
						<button
							type='submit'
							className='text-gray-500 absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 '
						></button>
					</div>
				</form>
				<div className='w-full h-[1px] bg-slate-300 mt-8'></div>
				<ul className='p-[30px] text-lg font-bold'>
					<Link href=''>
						<li className='mb-4 hover:text-yellow-800'>
							Categories
						</li>
					</Link>
					<Link href=''>
						<li className='mb-4 hover:text-yellow-800'>For Blog</li>
					</Link>
					<Link href=''>
						<li className='mb-4 hover:text-yellow-800'>
							For Intructors
						</li>
					</Link>
					<Link href=''>
						<li className='mb-4 hover:text-yellow-800'>
							For Learner
						</li>
					</Link>
					<Link href=''>
						<li className='mb-4 hover:text-yellow-800'>Logout</li>
					</Link>
				</ul>
			</div>
			<div onClick={() => props.setIsDisplay(false)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-7 h-7 text-white cursor-pointer mt-3 mr-3 '
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</div>
		</div>
	);
};

export default Drawer;
