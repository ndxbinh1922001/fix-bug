import Link from 'next/link';
import { Avatar, Badge, Button, Tooltip } from 'flowbite-react';
import Image from 'next/image';

const ProfileSmallSize = () => {
	return (
		<div className='w-full h-min  bg-white mb-2 rounded-sm'>
			<div className='mx-2 2xl:mx-6 h-16 flex flex-inline justify-between'>
				<div className='flex flex-inline'>
					<div className='w-16 h-16 flex justify-center'>
						<Avatar
							alt='User settings'
							img='https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/289331309_1278670902539985_8333678012669563923_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=2dRwUqTFrkgAX_Wk5tf&_nc_ht=scontent.fhan14-1.fna&oh=00_AfCWaTBr0f6bR7zn_BSC9_g5lJkt6PVxd2qA1bggVl_Y8w&oe=642E4B68'
							rounded
							status='online'
						/>
					</div>
					<div className='flex flex-col justify-center'>
						<div className='block text-base font-medium'>
							Nguyễn Bình
						</div>
						<div className='block text-xs font-small italic'>
							5 years old
						</div>
					</div>
				</div>
				<div className='h-16  flex flex-row items-center justify-end'>
					<div className='h-8 w-8 relative'>
						<Image
							src='/static/images/cert_lecturer.png'
							alt='This is a photo'
							sizes=''
							layout='fill'
							objectFit='contain'
						/>
					</div>
					<div className='block text-base font-medium'>
						<Badge color='info' size='sm'>
							Lecturer
						</Badge>
					</div>
				</div>
			</div>
			<div className='flex flex-inline justify-center items-center text-center'>
				<div className='flex flex-col content-center justify-center mx-3'>
					<div className='font-medium'>1265</div>
					<div className='text-gray-500 text-xs'>Point</div>
				</div>
				<div id='divide' className='h-4 w-1 border-r'></div>
				<div className='flex flex-col content-center justify-center  mx-3'>
					<div className='font-medium'>1K</div>
					<div className='text-gray-500 text-xs'>Followers</div>
				</div>
				<div id='divide' className='h-4 w-1 border-r'></div>
				<div className='flex flex-col content-center justify-center mx-3'>
					<div className='font-medium'>1000</div>
					<div className='text-gray-500 text-xs'>Following</div>
				</div>
			</div>

			<div className='border-t mx-4 my-2'></div>

			<div className='flex flex-inline justify-center items-center text-center'>
				<div className='flex flex-col content-center justify-center mx-3'>
					<div className='font-medium'>200K</div>
					<div className='text-gray-500 text-xs'>View</div>
				</div>
				<div id='divide' className='h-4 w-1 border-r'></div>
				<div className='flex flex-col content-center justify-center  mx-3'>
					<div className='font-medium'>1K</div>
					<div className='text-gray-500 text-xs'>Likes</div>
				</div>
				<div id='divide' className='h-4 w-1 border-r'></div>
				<div className='flex flex-col content-center justify-center mx-3'>
					<div className='font-medium'>69K</div>
					<div className='text-gray-500 text-xs'>Comments</div>
				</div>
				<div id='divide' className='h-4 w-1 border-r'></div>
				<div className='flex flex-col content-center justify-center mx-3'>
					<div className='font-medium'>29</div>
					<div className='text-gray-500 text-xs'>Blogs</div>
				</div>
			</div>

			<div className='flex flex-wrap mx-6 2xl:mx-8 my-3'>
				<div>
					<Tooltip content='Tooltip content' placement='top'>
						<Avatar
							alt='User settings'
							img='/static/images/pull-shark-default.png'
							rounded
						/>
					</Tooltip>
				</div>
				<div>
					<Tooltip content='Tooltip content' placement='top'>
						<Avatar
							alt='User settings'
							img='/static/images/quickdraw-default.png'
							rounded
						/>
					</Tooltip>
				</div>
				<div>
					<Tooltip content='Tooltip content' placement='top'>
						<Avatar
							alt='User settings'
							img='/static/images/starstruck-default.png'
							rounded
						/>
					</Tooltip>
				</div>
				<div>
					<Tooltip content='Tooltip content' placement='top'>
						<Avatar
							alt='User settings'
							img='/static/images/yolo-default.png'
							rounded
						/>
					</Tooltip>
				</div>
			</div>

			<div className='flex flex-row justify-around my-3 mx-8 '>
				<Button size='sm' gradientDuoTone='purpleToBlue'>
					Follow
				</Button>

				<Button size='sm' gradientDuoTone='cyanToBlue'>
					Inbox
				</Button>
			</div>
		</div>
	);
};

export default ProfileSmallSize;
