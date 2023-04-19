import Link from "next/link"

const Contact = () => {
  return (
    <div className="border-[1px] border-[#e8e8ed]   py-7 px-7">
      <div className="text-[#999aaa] text-[14px] mt-2  text-center">
        <div>Contact us (working hours :8:00 - 22:00)</div>
        <div className="text-[#999aaa] text-[14px]">
          <span>+8403686868 </span>
          <a className="ml-3 text-orange-500" href="mailto: abc@example.com">
            contact.w3l@gmail.com
          </a>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="flex justify-around  mt-4 bottom-li">
        <ul className="  ">
          <li className="hover:text-orange-500 transition duration-100 mb-2">
            <Link href="">Categories</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-100 mb-2">
            <Link href="">Courses</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-100 mb-2">
            <Link href="">About us</Link>
          </li>
        </ul>
        <ul className="">
          <li className="hover:text-orange-500 transition duration-100 mb-2">
            <Link href="">For Lecturers</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-100 mb-2">
            <Link href="">For Learners</Link>
          </li>
          <li className="hover:text-orange-500 transition duration-100 mb-2">
            <Link href="">For Marketers</Link>
          </li>
        </ul>
        <div className="flex-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
          English
        </div>
      </div>
      <hr className="mt-4" />
      <div className="text-center ">
        <div className="text-3d">
          W3L
        </div>
        <small className="bottom-li">Writing something about W3L, introduce e-learning software to everyone.</small>
      </div>
    </div>
  );
}

export default Contact
