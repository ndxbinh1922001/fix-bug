import Link from 'next/link';
import { CiRead } from 'react-icons/ci';
const BlogLatest = () => {
	return (
		<div className='w-full h-min bg-white mb-2 rounded-sm flex flex-col'>
			<div className='m-2 font-medium text-base border-b border-slate-400 pb-1'>
				Latest Blogs
			</div>
			<div className='mb-2 mx-4 flex flex-col text-xs'>
				<div className='flex flex-row justify-items-stretch items-center hover:text-orange-600 my-1 w-full'>
					<Link href='' className='mr-2'>
						AMA Recap: Tương lai của lưu trữ dữ liệu phi tập trung
					</Link>
					<CiRead className='h-4 w-4' />
					<div className=''>2.6K</div>
				</div>
				<div className='flex flex-row  items-center hover:text-orange-600 my-1 w-full'>
					<Link href='' className='mr-2'>
						Launchpad là gì? Top 5 nền tảng Launchpad lớn nhất hiện
						nay?
					</Link>
					<CiRead className='h-4 w-4' />
					<div className=''>6.9K</div>
				</div>
				<div className='flex flex-row items-center hover:text-orange-600 my-1 '>
					<Link href='' className='mr-2'>
						Tổng quan dự án Increment Finance
					</Link>
					<CiRead className='h-4 w-4' />
					<div className=''>201</div>
				</div>
				<div className='flex flex-row items-center hover:text-orange-600 my-1 '>
					<Link href='' className='mr-2'>
						Bảo vệ quyền riêng tư trong thời đại làm việc từ xa
					</Link>
					<CiRead className='h-4 w-4' />
					<div className=''>101</div>
				</div>
			</div>
		</div>
	);
};

export default BlogLatest;
