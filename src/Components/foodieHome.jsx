import { useState } from "react";
import '../style/foodiehome.css'

const FoodieHome = () => {

    let [img, setimg] = useState([
        {
            image: "/images/img1.avif",
            tittle: "Burger",
            description: "Tasty and delicious food"
        },
        {
            image: "/images/img2.avif",
            tittle: "Lasagna",
            description: "Tasty and delicious food"
        },
        {
            image: "/images/img3.avif",
            tittle: "Ramen",
            description: "Tasty and delicious food"
        },
        {
            image: "/images/img4.avif",
            tittle: "Mac and Cheese",
            description: "Tasty and delicious food"
        },
    ])
    return (
        <header className="Home">
            <div className="container row">
                <div className="mainimg col-8">
                    <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="900px" />
                </div>
                <div className="text col-4 p-4">
                    <p className="text-secondary fs-5 mt-5">FEATURED POSTS</p>
                    <h1 className="">A Hotel With a Sense of Humor</h1>
                    <hr />
                    <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio laudantium recusandae possimus iure.</p>
                    <button
                        className="btn btn-dark p-3 px-4"
                    >Read More  <span> → </span>  </button>
                </div>
            </div>

            <section className=" p-5 cards">
                <div className="title">
                    <h1 className="fw-bolder fs-1">Recent Stories</h1>
                    <div className="line"></div>
                </div>
                <div className="contents d-flex justify-content-around">
                    <div className="stories col-6 d-flex flex-wrap">
                        {img.map(data => (
                            <div className="images mx-3 h-50">
                                <img src={data.image} alt="" height="300px" width="300px" className="rounded" />
                                <div className="title mt-3">
                                    <h3 className="text-secondary">{data.tittle}</h3>
                                    <p className="m-0">{data.description}</p>
                                    <a href="" className="text-decoration-none text-danger fs-5">Read More<span> → </span></a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-4">
                        <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNjg1NTY3Mnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"  className="rounded" />
                    </div>
                </div>

            </section>

        </header>
    );
}
export default FoodieHome;