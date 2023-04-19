'use client';
import React from 'react';
import { Dropdown, Avatar, Flowbite } from 'flowbite-react';
import Link from 'next/link';
import { authApi } from '../api-client';
import { logout } from '../stores/walletSlice';
import { useAppSelector } from '../stores/store';
import { selectWallet } from '../stores/walletSlice';

export default function UserDropdown() {
	const wallet = useAppSelector(selectWallet);
	const logout = async () => {
		await wallet?.signOut;
		await window.localStorage.clear;
		await authApi.logout;
	};
	return (
		<div>
			<div className='px-3 text-left md:cursor-pointer   group'>
				<div className=' flex items-center px-3 py-2 mr-14 rounded-2xl text-black justify-center relative border-[1px] border-orange-500 md:pr-0 pr-5 group'>
					example.near.testnet
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-4 h-4 mr-2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M19.5 8.25l-7.5 7.5-7.5-7.5'
						/>
					</svg>
				</div>
				<div>
					<div className='absolute top-[26px] z-[999] hidden group-hover:md:block hover:md:block'>
						<div className='py-3'>
							<div
								className='w-4 h-4 left-[50%] absolute 
                  mt-1 bg-white rotate-45'
							></div>
						</div>
						<div className='text-black bg-white py-5 w-[182px] '>
							<ul>
								<li className='py-2 dropdown-li hover:text-black w-full'>
									<Link href=''>My Blogs</Link>
								</li>
								<li className='py-2 dropdown-li hover:text-black w-full'>
									<Link href=''>Setting</Link>
								</li>
								<li className='py-2 dropdown-li hover:text-black w-full'>
									<Link href='/' onClick={logout}>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
