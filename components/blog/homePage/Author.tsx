import truncate from "../../../utils/utils"
import Image from "next/image"
import Link from "next/link"

const Author = () => {
    const title='Xiaolei FansUnion'
    const jobTitle ='A technical partner who understands business.'
  return (
    <div className="h-[55px] grid grid-cols-6 w-full mb-[15px]">
      <div className="col-span-1 relative">
        <Link href="">
          <Image
            src="/chatgpt.png"
            alt="This is a photo"
            layout="fill"
            objectFit="cover"
            className="rounded-[50%]"
          />
        </Link>
        <div className="absolute right-0 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0c95ff"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="col-span-4 px-2 py-2  ">
          <div className="p-author" >
              <Link href=''>
                {truncate(title,20)}
               </Link>
          </div>
          <div className="text-[13px] text-[#999aaa]">{truncate(jobTitle,30)}</div>
      </div>
      <div className="col-span-1 text-[12px] text-[#4e4f52] flex-center ">
          <Link href=''>
             <span className=" border-[1px] border-[#ccccd8] p-1 rounded-[12px] hover:border-[#9a9a9b]">Github</span> 
          </Link>
      </div>
    </div>
  );
}

export default Author