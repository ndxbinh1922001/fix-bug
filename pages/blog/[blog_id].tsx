import { useRouter } from 'next/router';
import React from 'react';
import BlogComment from '../../components/blog/BlogComment';
import BlogLatest from '../../components/blog/BlogLatest';
import BlogPopular from '../../components/blog/BlogPopular';
import BlogRating from '../../components/blog/BlogRating';
import BlogSearch from '../../components/blog/BlogSearch';
import ProfileSmallSize from '../../components/blog/ProfileSmallSize';
import { MainLayout } from '../../components/layout';
import { marked } from 'marked';
import Image from 'next/image';
import { Badge, Button } from 'flowbite-react';
import {
	AiFillLike,
	AiFillEye,
	AiTwotoneEdit,
	AiOutlineUser,
} from 'react-icons/ai';

export interface BlogDetailPageProps {}
export default function BlogDetail() {
	const router = useRouter();
	const { blog_id } = router.query;
	console.log('blog_id', blog_id);
	return (
		<div className='bg-[url("/static/images/background.gif")] bg-no-repeat bg-cover w-full px-[124px] absolute top-[60px] h-min flex flex-row'>
			<div className='mt-4 w-1/4 2xl:w-1/5 mx-1 flex flex-col'>
				<ProfileSmallSize />
				<BlogSearch />
				<BlogPopular />
				<BlogLatest />
				<BlogComment />
				<BlogRating />
			</div>
			<div className='mt-4 w-3/4 2xl:w-4/5 h-min bg-white mx-1'>
				<div className='m-4 '>
					<div className='font-bold text-2xl w-full my-4'>
						Thị trường dậy sóng với tin đồn FTX hồi sinh
					</div>
					<div className='w-full flex flex-row bg-slate-100 h-min border-l-8 border-slate-300'>
						<Image
							src='/static/images/hot-icon.gif'
							alt=''
							width='60'
							height='60'
							className='flex-none'
						/>
						<div className='flex flex-col flex-auto text-slate-500'>
							<div className='flex flex-row '>
								<div className='mr-4 flex flex-inline'>
									<AiOutlineUser className='mt-1 mr-1' />{' '}
									Author:
									<div className='mx-1'>
										<Badge color='info' size='sm'>
											Nguyễn Bình
										</Badge>
									</div>
								</div>
								<div className='mr-4 flex flex-inline'>
									<AiTwotoneEdit className='mt-1 mr-1' />
									Revised in:
									<div className='mx-1'>
										<Badge color='info' size='sm'>
											2023-04-06 10:02:46
										</Badge>
									</div>
								</div>
								<div className='mr-4 flex flex-inline'>
									<AiFillEye className='mt-1 mr-1' /> Views:
									<div className='mx-1'>
										<Badge color='info' size='sm'>
											800K
										</Badge>
									</div>
								</div>
							</div>
							<div className='flex flex-row '>
								<div className='mr-4 flex flex-inline'>
									Catagory:{' '}
									<div className='mx-1'>
										<Badge color='info' size='sm'>
											Blockchain
										</Badge>
									</div>
								</div>
								<div className='mr-4 flex flex-inline'>
									Tag:{' '}
									<div className='ml-2 flex flex-row '>
										<div className='mx-1'>
											<Badge color='info' size='sm'>
												Token
											</Badge>
										</div>
										<div className='mx-1'>
											<Badge color='info' size='sm'>
												Coin
											</Badge>
										</div>
										<div className='mx-1'>
											<Badge color='info' size='sm'>
												Smart Contract
											</Badge>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='m-2'>
							<Button gradientDuoTone='greenToBlue'>
								<AiFillLike />
								Like
							</Button>
						</div>
					</div>
					<div
						className='w-full h-min my-4'
						dangerouslySetInnerHTML={{
							__html: marked('**Nguyễn Đoàn Xuân Bình**'),
						}}
					></div>
				</div>
			</div>
		</div>
	);
}
BlogDetail.Layout = MainLayout;
