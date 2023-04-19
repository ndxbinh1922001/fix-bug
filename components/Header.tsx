import Link from "next/link";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../stores/store";
import { initWallet } from "../stores/walletSlice";
import ConnectButton from "./ConnectButton";
function Header() {
    const[number,setNumber] = useState<number>(0)
    const dispatch = useAppDispatch();
    const words =["Blockchain","Learn + web3","Near protocol","Crusader chain"]
        useEffect(()=>{
            const inter = setInterval(()=>{
                setNumber(Math.floor(Math.random()*3) +1)
            },8000)
            return ()=>clearInterval(inter)
        })
        useEffect(() => {
          dispatch(
            initWallet({
              contractId: process.env.NEXT_PUBLIC_CONTRACT_NAME,
              network: 'testnet',
            })
          );
        }, []);
      
        
  return (
    <header >
      <div className="flex-center justify-between  px-5 h-[60px] border-[1px] border-b-gray-200 ">
        <div className="flex-center w-1/3 h-full ">
          <Link href="/">
            <h1 className="">CRUSADER </h1>
          </Link>
          <ul className="ml-4 h-full flex">
            {[1, 2, 3, 4, 5].map((index) => (
              <li key={index} className=" px-3 hover:bg-slate-300 flex-center h-full ">
                <Link href="/">Home</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 flex justify-evenly ">
          <form className=" flex justify-end w-5/6 rounded-2xl h-[40px]  ">
            <input
              className="w-1/2 focus:w-3/4 placeholder:text-[#777888] bg-[#f5f6f7] h-full  rounded-l-2xl border-[#e8e8ed] focus:rounded-l-2xl transition-input outline-none focus:outline-none pl-[10px]"
              placeholder={words[number]}
            />
            <button className="flex-center w-1/4 pl-2 transition-color text-white hover:bg-red-600 bg-orange-500 h-full rounded-r-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Search
            </button>
          </form>
        </div>
        <div className="w-1/3 ">
          <ul className="w-full justify-end flex ">
            <ConnectButton />
            <li className=" px-3 py-2 rounded-2xl text-white bg-orange-500">
              <Link href="">
                <button className="flex-center">
                  Writing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </header>
  );
}

export default Header