import { LayoutProps } from '../../models/index';
import React from 'react';
import Link from 'next/link';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';

export function AdminLayout({ children }: LayoutProps) {
	return (
		<div className='flex flex-col min-h-screen'>
			<div className='fixed top-0 left-0 right-0 zIndex-4 w-screen'>
				<div className='bg-white  shadow-b shadow-md'>
					<Header />
				</div>
				<div className='bg-white hidden lg:flex shadow-b shadow-md'>
					<Navbar />
				</div>
			</div>
			<div className='h-24 w-screen'></div>
			<div>{children}</div>
			<div className='mt-auto'>
				<Footer />
			</div>
		</div>
	);
}
