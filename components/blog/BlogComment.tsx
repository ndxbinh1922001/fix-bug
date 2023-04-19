import { Avatar } from 'flowbite-react';
import Link from 'next/link';
import { CiRead, CiPaperplane } from 'react-icons/ci';
const BlogComment = () => {
	return (
		<div className='w-full h-min bg-white mb-2 rounded-sm flex flex-col'>
			<div className='m-2 font-medium text-base border-b border-slate-400 pb-1'>
				Latest Comments
			</div>
			<div className='mb-2 mx-4 flex flex-col text-xs'>
				<div className='px-4 py-2 m-2 border border-gray-400 rounded-xl text-gray-400 font-light text-sm hidden md:flex relative'>
					<input
						className='border-none focus:outline-none'
						placeholder='Write a comment...'
					></input>
					<button className='cursor-pointer absolute right-2'>
						<CiPaperplane className='text-[22px] hover:text-blue-700 ' />
					</button>
				</div>
				<div className='flex flex-col justify-items-stretch items-center  my-1 w-full'>
					<div className='flex flex-inline'>
						<div className='w-16 h-16 flex justify-center'>
							<Avatar
								alt='User settings'
								img='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289331309_1278670902539985_8333678012669563923_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2dRwUqTFrkgAX_Wk5tf&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCWaTBr0f6bR7zn_BSC9_g5lJkt6PVxd2qA1bggVl_Y8w&oe=642E4B68'
								rounded
								status='online'
								size='sm'
							/>
						</div>
						<div className='flex flex-col justify-center'>
							<div className='block text-sm font-medium hover:text-orange-600 cursor-pointer'>
								Nguyễn Bình
							</div>
							<div className='block text-xs font-small'>
								Bài blog vô cùng tuyệt vời và bổ ích. 
							</div>
						</div>
					</div>
					<div className='flex flex-inline'>
						<div className='w-16 h-16 flex justify-center'>
							<Avatar
								alt='User settings'
								img='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289331309_1278670902539985_8333678012669563923_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2dRwUqTFrkgAX_Wk5tf&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCWaTBr0f6bR7zn_BSC9_g5lJkt6PVxd2qA1bggVl_Y8w&oe=642E4B68'
								rounded
								status='online'
								size='sm'
							/>
						</div>
						<div className='flex flex-col justify-center'>
							<div className='block text-sm font-medium hover:text-orange-600 cursor-pointer'>
								Nguyễn Bình
							</div>
							<div className='block text-xs font-small'>
								Bài blog vô cùng tuyệt vời và bổ ích. 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogComment;
