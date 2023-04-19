import dynamic from 'next/dynamic';

const SimpleMdeReact = dynamic(() => import('react-simplemde-editor'), {
	ssr: false,
});
import { useMemo, useState } from 'react';
import { Options } from 'easymde';
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
type ImageUploadType = {
	(
		image: File,
		onSuccess: (url: string) => void,
		onError: (errorMessage: string) => void
	): void;
};

export const MarkdownEditor = () => {
	const router = useRouter();
	const [value, setValue] = useState('');

	const imageUpload: ImageUploadType = async (image, onSuccess, onError) => {
		try {
			console.log('Da vao imageUpload');
			const data = new FormData();
			data.append('file', image);
			data.append('upload_preset', 'igtpzjq7');
			const res = await axios.post(
				'https://api.cloudinary.com/v1_1/dvxrsopw3/image/upload',
				data
			);
			const { secure_url } = res.data;
			onSuccess(secure_url);
		} catch (error) {
			console.error(error);
		}
	};

	const [options, setOptions] = useState<Options>({
		maxHeight: '60vh',
		spellChecker: false,
		showIcons: ['strikethrough', 'table', 'code', 'upload-image'],
		hideIcons: ['image', 'side-by-side', 'fullscreen'],
		uploadImage: true,
		imageUploadFunction: imageUpload,
	});
	const newOptions = useMemo(() => {
		return {
			spellChecker: false,
			showIcons: ['strikethrough', 'table', 'code', 'upload-image'],
			hideIcons: ['image'],
			uploadImage: true,
			imageUploadFunction: imageUpload,
		};
	}, []);

	return (
		<div className='flex flex-col justify-center content-center px-16 py-4'>
			<h2 className='text-4xl font-extrabold dark:text-black mb-4'>
				Create new blog
			</h2>
			<div className='flex flex-inline'>
				<div className='text-2xl font-medium text-slate-500 italic'>
					Title :{' '}
				</div>
				<input
					placeholder='Enter blog title...'
					className='mb-4 ml-2 placeholder:italic placeholder:text-xl placeholder:text-slate-300 outline-none focus:outline-none text-2xl font-medium text-slate-700'
				></input>
			</div>
			<SimpleMdeReact
				id='editor'
				options={options}
				onChange={setValue}
				value={value}
			/>
			<div className='flex flex-row justify-end content-center space-x-4'>
				<button
					onClick={() => router.back()}
					className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'
				>
					Cancel
				</button>
				<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded'>
					Save
				</button>
			</div>
		</div>
	);
};
