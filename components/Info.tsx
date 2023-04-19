interface InfoProps {
    date:String,
    view:Number
}
const Info =(props: InfoProps)=> { 
    return (
          <div className='flex mt-3 text-neutral-500'>
              <div className=' flex text-xs'>
                  <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4'
                  >
                      <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
                      />
                  </svg>
                  <span className='ml-1'>31/12/2022{props.date}</span>
              </div>
              <div className='ml-2 flex items-center'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-4 h-4'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
					/>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
					/>
				</svg>
				<span className='ml-1 text-[12px]'>1.4K</span>
			</div>
		</div>
  );
}

export default Info
  