import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
const Images = () => {
	return (
		<div className='mt-3 w-full h-[80px] bg-slate-400 relative'>
			<Image
				src='/star-falling.gif'
				alt='Picture of the author'
				layout='fill'
				className='w-full h-full imageIndex'
			/>
			<div className='absolute text-white text-[30px] top-[50%] translate-y-[-50%] left-[50%] whitespace-nowrap translate-x-[-50%]'>
				<Typewriter
					words={[
						'BLOCKCHAIN - THE FUTURE OF THE WEB3',
						'TRUST',
						'SECURE',
						'TRANSPARENCY',
					]}
					loop={150}
					cursor
					cursorStyle='_'
					typeSpeed={70}
					deleteSpeed={50}
					delaySpeed={1000}
				/>
			</div>
		</div>
	);
};

export default Images;
