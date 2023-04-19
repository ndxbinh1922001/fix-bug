import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';

const BlogSearch = () => {
	return (
		<div className='w-full h-min bg-white mb-2 rounded-sm'>
			<div className='px-4 py-2 m-2 border border-gray-400 rounded-xl text-gray-400 font-light text-sm hidden md:flex relative'>
			<input
						className='border-none focus:outline-none'
						placeholder='Search'
					></input>
				<button className='cursor-pointer absolute right-2'>
					<CiSearch className='text-[22px] ' />
				</button>
			</div>
		</div>
	);
};

export default BlogSearch;
