import Link from 'next/link';

const Footer = () => {
	return (
		<div className='h-[200px] lg:bg-footer lg:flex  px-[30px] lg:text-black lg:px-[124px] lg:pt-10 lg:justify-between'>
			<div className='  text-6xl'>Crusader Chain </div>
			<div className='flex  justify-around px-[30px] mt-6 lg:grid-cols-3 lg:grid'>
				<ul className='text-sm text-black-100 '>
					<li className='hover:text-red-600'>
						<Link href=''>Catergories</Link>
					</li>
					<li className='hover:text-red-600'>
						<Link href=''>Coures</Link>
					</li>
					<li className='hover:text-red-600'>
						<Link href=''>About us</Link>
					</li>
				</ul>
				<ul className='text-sm text-black-100'>
					<li className='hover:text-red-600'>
						<Link href=''>For Lecturers</Link>
					</li>
					<li className='hover:text-red-600'>
						<Link href=''>For Learners</Link>
					</li>
					<li className='hover:text-red-600'>
						<Link href=''>For Guest</Link>
					</li>
				</ul>
				<ul className='text-sm text-black-100'>
					<li className='hover:text-red-600'>
						<Link href=''>Any Question ?</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
