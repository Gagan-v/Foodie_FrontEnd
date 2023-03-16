import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import '../style/login.css'
const Login = () => {
    let [email,Setemail]=useState('')
    let [Password,Setpassword]=useState('')
    let navigate = useNavigate()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let data={email,Password}
        axios.post('http://localhost:4000/login',data)
        .then((res)=>{
            if (res.data.message === 'login sucessfull') {
                navigate('/home')
            } 
            else {
                alert(res.data.message)
            }
        })
    }
    return (
        <div className="login">
             <h1>Login-Page</h1>
            <div className="content w-25">
            <form className="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fs-2 text-dark bg-white">Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>Setemail(e.target.value)} />
                    <div  className="form-text  fs-6 text-dark">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label  fs-2 text-dark bg-white">Password</label>
                    <input type="password" className="form-control" value={Password} onChange={(e)=>Setpassword(e.target.value)} />
                </div>
                <div className="options">
                    <button className="btn btn-outline-primary">Login</button>
                </div>
                
            </form>
            <div className="signIn">
                    <p className='fw-bold fs-3'>Are you a new user?</p>
                    <Link to={'/signup'} className="btn btn-outline-success">Sign IN</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;