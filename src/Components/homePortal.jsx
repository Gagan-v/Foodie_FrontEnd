import { Route,Routes } from "react-router-dom";
import About from "./about";
import Food from "./food";
import FoodieHome from "./foodieHome";
import Navibar from "./navibar";
import Post from "./post";
import SinglePost from "./singlePost";

const HomePortal = () => {
    return ( <div className="homeportal">
        <Navibar/>
        <Routes>
            <Route path="/" element={<FoodieHome/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/food" element={<Food/>}/>
            <Route path="/add-post" element={<Post/>}/>
            <Route path="/food/:id" element={<SinglePost/>}/>
        </Routes>
    </div> );
}
 
export default HomePortal;