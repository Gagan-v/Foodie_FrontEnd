import { useState } from "react";
import Banner from "./banner";
import '../style/banner.css'

const About = () => {
    const title = "About Us"
    const [list,setList] = useState([
        {
            value:5,
            about:"Years of Experience"
        },
        {
            value:100,
            about:"Foods"
        },
        {
            value:100,
            about:"Lifestyle"
        },
        {
            value:100,
            about:"Happy Customers"
        }
    ])
    return ( 
        <div className="about">
            <Banner data={title} />
            <div className="aboutFoodie p-2 d-flex justify-content-center">
                <div className="aboutImage">
                    <img className="rounded-2" width="450" height="600" src="/images/banner1.jpg" alt="" />
                </div>
                <div className="aboutInfo w-50 p-5">
                    <h2 className="fw-bolder fs-1">About Foodie</h2>
                    <div className="line my-3"></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat tenetur, voluptate quod quis laboriosam vitae?</p>
                    <div className="lists d-flex flex-wrap justify-content-between">
                        {list.map(item => (
                            <div className="list bg-light p-5 border text-center" key={item.value} style={{width:"50%"}}>
                                <h1 className="fw-bolder">{item.value}</h1>
                                <p className="text-secondary">{item.about}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;