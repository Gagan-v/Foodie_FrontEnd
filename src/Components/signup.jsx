import { useState } from 'react';
import axios from 'axios'//used to post,get
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../style/signup.css'
const Signup = () => {
    let [name,SetName]=useState('')
    let [Mobile,SetMobile]=useState('')
    let [email,SetEmail]=useState('')
    let [Password,SetPassword]=useState('')
    let [confirmPassword,SetConfirmPassword] =useState('')
    let navigate = useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let data={name,Mobile,email,Password,confirmPassword}
        if (name && Mobile && email && (Password == confirmPassword) ) {
            axios.post('http://localhost:4000/signup',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
                // console.log(data);
            })
        } else {
            alert('password doesnt match')
        }
    }

    return ( <div className="signup">
        <h1>Signup</h1>
        <div className="signup_form w-25">
            <form action="" onSubmit={handleSubmit}>
                <div className="content">
                <div className="name">
                <label className="form-label fs-2">Name</label>
                    <input type="text" className="form-control" name='name' value={name} onChange={(e)=>SetName(e.target.value)} required  />
                </div>
                <div className="mob_num">
                <label className="form-label fs-2">Mobile Number</label>
                    <input type="text" className="form-control" name='Mobile' value={Mobile} onChange={(e)=>SetMobile(e.target.value)} required />
                </div>
                <div className="email">
                <label className="form-label fs-2">Email address</label>
                    <input type="email" className="form-control" name='email' value={email} onChange={(e)=>SetEmail(e.target.value)} required />
                </div>
                <div className="password">
                <label  className="form-label fs-2">Password</label>
                    <input type="password" className="form-control" name='Password' value={Password} onChange={(e)=>SetPassword(e.target.value)}required/>
                </div>
                <div className="confirmpassword">
                <label className="form-label fs-2">Confirm Password</label>
                    <input type="password" className="form-control" name='confirmPassowrd' value={confirmPassword} onChange={(e)=>SetConfirmPassword(e.target.value)} required/>
                </div>
                <div className="signup_btn">
                <button className="btn btn-light">Sign Up</button>
                </div>
                </div>
            </form>
            
            <div className="login_btn">
                <p className='text-light'>Already a user?</p>
                <Link to='/' className="btn btn-dark">Log In</Link>
                </div>
        </div>
    </div> );
}
 
export default Signup;