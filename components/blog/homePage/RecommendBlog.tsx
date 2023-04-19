import truncate from '../../../utils/utils';
import Image from 'next/image'
import Link from 'next/link';
const RecommendBlog = () => {
  const content ='查询性能：TDengine 最高达到了 InfluxDB 的 37 倍'
  return (
    <div className="border-[1px] border-[#e8e8ed] mt-6 mb-[20px]">
      <div className="h-[40px] title flex-center border-b-[1px] border-[#e8e8ed] px-7">
        {" "}
        Popular Recommendation
      </div>
      <div className='px-7 py-7'>
        {[1,2,3].map(()=>(
      <Link href='/'>
        <div className="grid grid-cols-5 mb-[15px] ">
          <div className="col-span-2 relative h-[80px]">
            <Image src="/ads.jpeg" alt="This is a photo" layout="fill" />
          </div>
          <div className="col-span-3 px-2 text-[14px] font-normal leading-[22px] mt-[6px] text-[#222226]">
          {truncate(content,30)}
          </div>
        </div>
        </Link>
      ))}
      </div>
    </div>
  );
}

export default RecommendBlog