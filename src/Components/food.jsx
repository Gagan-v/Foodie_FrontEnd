import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "./banner";
import '../style/banner.css'

const Food = () => {
    let title = "All posts"
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        let fetchData = async()=>{
            let res= await axios.get("http://localhost:4000/posts")
            let data= await res.data
            setPosts(data)
            console.log(data);
        }
        fetchData()
    },[])
return ( <div className="food">
    <Banner data={title}/>
        <div className="display d-flex">
          {
     posts.map((item) => (
        <div className="card m-4 p-2 w-50 text-center flex-warap">
            <div className="imgs ">
            <img src={item.image} alt="" className="rounded" height="250px" width="250px"/>
            </div>
            <div className="details">
            <h3>{item.title}</h3>
            <h5 className="">Author: {item.author}</h5>
            <p className="text-start">{item.summary}</p>
            </div>
            <div>
            <Link to={`/home/food/${item._id}`} className="btn btn-warning ">Read more</Link>
            </div>
        </div>
            ))
          }
        </div>
    </div> );
}
export default Food;