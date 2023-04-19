import Author from "./Author"
import Title from "./Title"

const RecommendAuthor = () => {
  return (
    <div className="border-[1px] border-[#e8e8ed] ">
        <Title />
        <div className="px-7 py-7">
        {[1,1,1,1,1,1,1,1,1,1,1,1].map(()=>(
             <Author />
        ))}
        </div>
    </div>
  )
}

export default RecommendAuthor