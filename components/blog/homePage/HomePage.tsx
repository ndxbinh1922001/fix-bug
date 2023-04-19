import Ads from "./Ads"
import BlogItem from "./BlogItem"
import Contact from "./Contact"
import RecommendAuthor from "./RecommendAuthor"
import RecommendBlog from "./RecommendBlog"


const HomePage = () => {
  
  return (
    <div className=" grid grid-cols-3 gap-x-2 mt-6 ">
        <div className="col-span-2 ">
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4].map((i)=>(
                 <BlogItem />
          ))}
        </div>
        <div className="col-span-1">
          <Ads />
          <RecommendAuthor />
          <RecommendBlog />
          <Ads />
          <Contact />
        </div>
    </div>
  )
}

export default HomePage