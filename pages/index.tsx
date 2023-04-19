import { MainLayout } from '../components/layout';
import { NextPageWithLayout } from '../models';
import Images from '../components/blog/Images';
import Navbar from '../components/blog/navBar/Navbar';
import HomePage from '../components/blog/homePage/HomePage';

const Home: NextPageWithLayout = () => {
	return (
		<div className='w-full  px-[124px] absolute top-[60px]'>
			<Images />
			<Navbar />
			<HomePage />
		</div>
	);
};

Home.Layout = MainLayout;

export default Home;
