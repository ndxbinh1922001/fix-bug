import truncate from "../../../utils/utils"
import Image from "next/image"
import Link from "next/link"


const BlogItem = () => {
  const image = true
  const sentence ='Compared with ChatGPT,the performance of Wenxin Yian is already the light of China'
  const sentence2 ='According to the numbers behind the bit field, we can preliminarily determine that the possible size is the sum of these arrays, and then convert it into bytes. After calculation, we can know that 47bin the memory 1B = 8b, if we want to store the 47 bits, 6 bytes should be enough, but why is the result 8?'
  return (
    <div className="w-full px-2 py-6  hover:bg-[#f5f6f7] hover:cursor-pointer border-b-[1px] border-b-[#f0f0f2] ">
      <div className="grid grid-cols-4 h-[100px]  ">
        {image && (
        <div className="relative col-span-1 ">
          <Link href="">
            <Image
              src="/chatgpt.png"
              alt="this is a photo"
              layout="fill"
              className="w-full h-full scale-95 hover:scale-100 transition duration-[1s] ease-in-out "
            />
          </Link>
        </div>
        )}
        <div className={`${image ? 'col-span-3':'col-span-4'}  pl-[10px] grid grid-rows-4 gap-y-1`}>
          {image ?(
            <>
             <h3 className="row-span-1 title  hover:underline">
             <Link href="">{truncate(sentence, 62)}</Link>
           </h3>
           <p className="row-span-2 text-p font-normal h-full ">
             {truncate(sentence2, 150)}
           </p>
           </>
          ):(
            <>
            <h3 className="row-span-1 title  hover:underline">
            <Link href="">{truncate(sentence, 75)}</Link>
          </h3>
          <p className="row-span-2 text-p font-normal h-full ">
            {truncate(sentence2, 200)}
          </p>
          </>
          )}
          
          <div className="row-span-1 flex items-center ">
            <div className="flex-center mr-7 cursor-pointer info hover:text-[#8d92b3] transition duration-[500ms]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                />
              </svg>
              <div className="font-light text-[14px] ml-1">11 Likes</div>
            </div>
            <div className="flex-center mr-7 cursor-pointer info hover:text-[#8d92b3] transition duration-[500ms]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                />
              </svg>

              <div className="font-light text-[14px] ml-1">11 DisLikes</div>
            </div>
            <div className="flex-center mr-7 font-light info hover:text-[#8d92b3] cursor-pointer transition duration-[500ms]">
              <Link href="">
                <span>Authors:</span>
                <span>NT Luong</span>
              </Link>
            </div>
            <div className="">
              <div className="group cursor-pointer relative ">
                <div>...</div>
                <div>
                  <div className="absolute top-[30px] left-[-125px] z-40 hidden group-hover:md:block hover:md:block h-[230px] w-[250px] bg-white">
                    <div className="py-4  ">
                      <div
                        className="w-4 h-4 left-1/2  absolute 
                  mt-[-20px] bg-white rotate-45"
                      ></div>
                      <div className="text-[14px] font-normal text-[#000] px-3">
                        Content Feedback
                      </div>
                      <div>
                        <li className="flex-center py-2 px-3  ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                            />
                          </svg>
                          <span className="text-p ml-1">
                            Repeat content recommend
                          </span>
                        </li>
                        <li className="flex-center py-2 px-3 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                            />
                          </svg>

                          <span className="text-p ml-1">
                            Low quanlity content
                          </span>
                        </li>
                        <li className="flex-center py-2 px-3 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>

                          <span className="text-p ml-1">
                            Exagerrated content
                          </span>
                        </li>
                      </div>
                      <div className="text-[14px] font-normal text-[#000] px-3">
                        Interest feedback
                      </div>
                      <div className=" flex-center py-2 px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                          />
                        </svg>
                        <span className="text-p ml-1">
                           Dont look at this author ...
                          </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem