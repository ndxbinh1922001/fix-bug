import Link from "next/link";
import { useState } from "react";
import { links } from "./Mylinks";


const NavLink = () => {
    const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div >
          <div className="px-3 text-left md:cursor-pointer hover:text-white  group">
            <h1
              className="py-7 flex justify-between items-center relative md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-[36px] z-[999] hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                  mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="text-black bg-white py-5 min-w-[150px] ">
                  <ul>
                    <li className="py-2 dropdown-li hover:text-black w-full">
                      <Link href=''>Blockchain</Link>
                    </li>
                    <li className="py-2 dropdown-li hover:text-black w-full">
                      <Link href=''>Account</Link>
                    </li>
                    <li className="py-2 dropdown-li hover:text-black w-full">
                      <Link href=''>Web3</Link>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default NavLink