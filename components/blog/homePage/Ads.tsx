import Image from "next/image"
import Link from "next/link"

const Ads = () => {
  return (
    <div className="w-full h-[350px] border-[1px] mb-[20px] flex-center justify-center">
       <div className="w-[91%] h-[91%] bg-slate-400 relative">
           <Link href=''>
               <Image src='/ads.jpeg'
                alt="This is a photo"
                layout="fill"
               />
           </Link>
       </div>
    </div>
  )
}

export default Ads