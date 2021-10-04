import React, {useState} from 'react'
import  Axios  from 'axios'
import './loginAdmin.css'



function LoginAdmin({closeModal}) {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const logeoAdmin = ()=>{
        Axios.post('http://localhost:9000/api/auth/login',{
            username: username,
            password: password
        });
    }


    return (
        <div className='loginBackground'>
            <div className="loginContainer">
            <div className="titleCloseBtn">
                <button  onClick={()=>{closeModal(false)}}> X </button>
            </div>
            <div className="loginHeader">
                <h1>Login</h1>
            </div>
            <div className="loginBody">
            <form>
                        <div className="formGroup">
                            <label for="username">User  </label>
                            <input type="text" id='username' name='username' 
                                onChange={
                                    (e)=>setUsername(e.target.value)}
                            />
                        </div>
                        <div className="formGroup">
                            <label for="password">Password </label>
                            <input type="password" id='password' name='password' 
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        
                    </form>
                    <button onClick={logeoAdmin} >Send</button>
            </div>
            </div>
        </div>
    )
}

export default LoginAdmin
