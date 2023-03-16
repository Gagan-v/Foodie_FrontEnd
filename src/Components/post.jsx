import axios from "axios";
import { useState } from "react";
import '../style/banner.css'

const Post = () => {

    let[author,setauthor]=useState('')
    let[title,settitle]=useState('')
    let[summary,setsummary]=useState('')
    let[image,setimage]=useState('')
    let[location,setlocation]=useState('')

    let addPost = (e)=>{
        e.preventDefault()
        let data={author,title,summary,image,location}
        if(author && summary && image && location){
            axios.post("http://localhost:4000/add-post",data)
            .then(res =>{
                alert(res.data.message)
            }).catch(err=>{
                alert(err.data.message)
            })
        }else{
            alert("Fill all the Details")
        }
    }
    return ( 
        <div className="post d-flex">
            <div className="image m-1">
                <img src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" height="80%" alt="" />
            </div>
            <div className="data w-50">
                <h1>ADD POST</h1>
                <form action="" onSubmit={addPost} >
                <div className="postfood">
                <div className="author">
                <label className="form-label fs-2">Author</label>
                    <input type="text" className="form-control" value={author} onChange={(e)=>setauthor(e.target.value)} />
                </div>
                <div className="Title">
                <label className="form-label fs-2">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>settitle(e.target.value)} />
                </div>
                <div className="summary">
                <label className="form-label fs-2">summary</label>
                    <input type="text area" className="form-control" value={summary} onChange={(e)=>setsummary(e.target.value)} />
                </div>
                <div className="image">
                <label  className="form-label fs-2">Image</label>
                    <input type="text" className="form-control" value={image} onChange={(e)=>setimage(e.target.value)} />
                </div>
                <div className="Location">
                <label className="form-label fs-2">Location</label>
                    <input type="text" className="form-control" value={location} onChange={(e)=>setlocation(e.target.value)}/>
                </div>
                <div className="signup_btn m-2">
                <button className="btn btn-dark">Add Post</button>
                </div>
                </div>
            </form>
            </div>
        </div>
     );
}
export default Post;
