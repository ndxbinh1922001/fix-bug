import { LayoutProps } from '../../models/index';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';

export function MainLayout({ children }: LayoutProps) {
	useEffect(() => {
		console.log('MainLayout mounting');
		return () => console.log('MainLayout unmounting');
	}, []);

	return (
		<div className='flex flex-col bg-black bg-[url("/static/images/background.gif")] bg-no-repeat bg-cover w-full'>
			<div className='overflow-x-hidden w-full relative'>
				<div className='h-[60px] w-full mb-[30px] fixed z-50 bg-white '>
					<Header />
				</div>
			</div>
			<div>{children}</div>
		</div>
	);
}
