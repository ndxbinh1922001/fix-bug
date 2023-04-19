import React from 'react';
import { MdMode, MdPreview, MdDelete } from 'react-icons/md';

export default function BlogTable() {
	return (
		<table className='w-full text-sm text-left text-gray-500 white:text-gray-400 border-2'>
			<thead className='text-xs text-gray-700 uppercase bg-gray-50 white:bg-gray-700 white:text-gray-400 border-b-2'>
				<tr>
					<th scope='col' className='p-4 '>
						<div className='flex items-center'>
							<input
								id='checkbox-all-search'
								type='checkbox'
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 white:focus:ring-blue-600 white:ring-offset-gray-800 white:focus:ring-offset-gray-800 focus:ring-2 white:bg-gray-700 white:border-gray-600'
							/>
							<label
								htmlFor='checkbox-all-search'
								className='sr-only'
							>
								checkbox
							</label>
						</div>
					</th>
					<th scope='col' className='px-6 py-3 border-l-2'>
						Title
					</th>
					<th scope='col' className='px-6 py-3 border-l-2'>
						Author
					</th>
					<th scope='col' className='px-6 py-3 border-l-2'>
						Category
					</th>
					<th scope='col' className='px-6 py-3 border-l-2'>
						Created At
					</th>
					<th scope='col' className='px-6 py-3 border-l-2'>
						Status
					</th>
					<th scope='col' className='px-6 py-3 border-l-2'>
						Action
					</th>
					<th scope='col' className='px-6 py-3 border-l-2'></th>
				</tr>
			</thead>
			<tbody>
				<tr className='bg-white border-b white:bg-gray-800 white:border-gray-700 hover:bg-gray-50 white:hover:bg-gray-600'>
					<td className='w-4 p-4'>
						<div className='flex items-center'>
							<input
								id='checkbox-table-search-3'
								type='checkbox'
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 white:focus:ring-blue-600 white:ring-offset-gray-800 white:focus:ring-offset-gray-800 focus:ring-2 white:bg-gray-700 white:border-gray-600'
							/>
							<label
								htmlFor='checkbox-table-search-3'
								className='sr-only'
							>
								checkbox
							</label>
						</div>
					</td>
					<th
						scope='row'
						className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap white:text-white border-l-2'
					>
						Kết quả sự kiện AMA, Online Meetup và Blockchain
						Insights trong tháng 3/2023
					</th>
					<td className='px-6 py-4 border-l-2'>Binh Xuan Doan</td>
					<td className='px-6 py-4 border-l-2'>Tin noi bat</td>
					<td className='px-6 py-4 border-l-2'>30/03/2023</td>
					<td className='px-6 py-4border-l-2 border-l-2'>
						<span className='inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full white:bg-green-900 white:text-green-300'>
							<span className='w-2 h-2 mr-1 bg-green-500 rounded-full'></span>
							Publish
						</span>
					</td>
					<td className='px-6 py-4 border-l-2'>
						<div className='flex flex-row space-x-4 '>
							<a
								href='#'
								className='font-medium text-blue-600 white:text-blue-500 hover:underline'
								data-te-toggle='tooltip'
								title='Edit blog'
							>
								<MdMode className='text-2xl' />
							</a>

							<a
								href='#'
								className='font-medium text-blue-600 white:text-blue-500 hover:underline'
								data-te-toggle='tooltip'
								title='Preview blog'
							>
								<MdPreview className='text-2xl' />
							</a>
							<a
								href='#'
								className='font-medium text-blue-600 white:text-blue-500 hover:underline'
								data-te-toggle='tooltip'
								title='Delete blog'
							>
								<MdDelete className='text-2xl' />
							</a>
						</div>
					</td>
					<td className='px-6 py-4 border-l-2'>
						<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded'>
							Public
						</button>
					</td>
				</tr>
				<tr className='bg-white border-b white:bg-gray-800 white:border-gray-700 hover:bg-gray-50 white:hover:bg-gray-600'>
					<td className='w-4 p-4'>
						<div className='flex items-center'>
							<input
								id='checkbox-table-search-3'
								type='checkbox'
								className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 white:focus:ring-blue-600 white:ring-offset-gray-800 white:focus:ring-offset-gray-800 focus:ring-2 white:bg-gray-700 white:border-gray-600'
							/>
							<label
								htmlFor='checkbox-table-search-3'
								className='sr-only'
							>
								checkbox
							</label>
						</div>
					</td>
					<th
						scope='row'
						className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap white:text-white border-l-2'
					>
						Kết quả sự kiện AMA, Online Meetup và Blockchain
						Insights trong tháng 3/2023
					</th>
					<td className='px-6 py-4 border-l-2'>Binh Xuan Doan</td>
					<td className='px-6 py-4 border-l-2'>Tin noi bat</td>
					<td className='px-6 py-4 border-l-2'>30/03/2023</td>
					<td className='px-6 py-4 border-l-2'>
						<span className='inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full white:bg-red-900 white:text-red-300'>
							<span className='w-2 h-2 mr-1 bg-red-500 rounded-full'></span>
							Processing
						</span>
					</td>
					<td className='px-6 py-4 border-l-2'>
						<div className='flex flex-row space-x-4'>
							<a
								href='#'
								className='font-medium text-blue-600 white:text-blue-500 hover:underline'
								data-te-toggle='tooltip'
								title='Edit blog'
							>
								<MdMode className='text-2xl' />
							</a>

							<a
								href='#'
								className='font-medium text-blue-600 white:text-blue-500 hover:underline'
								data-te-toggle='tooltip'
								title='Preview blog'
							>
								<MdPreview className='text-2xl' />
							</a>
							<a
								href='#'
								className='font-medium text-blue-600 white:text-blue-500 hover:underline'
								data-te-toggle='tooltip'
								title='Delete blog'
							>
								<MdDelete className='text-2xl' />
							</a>
						</div>
					</td>
					<td className='px-6 py-4 border-l-2'>
						<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded'>
							Public
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
