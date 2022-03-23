import {useState} from "react"

const FeedBackItem = () => {
    const [rating,setRating] = useState(2)
    const[text,setText] = useState ('This is example of a feedback')
    const HandleClick = () => {
        setRating((prev)=>{
            return prev+1
        })
    }

    
  return (
    <div className="card" >
        <div className="num-display"> {rating}</div>
        <div className="text-display">{text}</div>
   
        {/* <button onClick ={HandleClick}>Click</button> */}
    </div>
  )
}

export default FeedBackItem