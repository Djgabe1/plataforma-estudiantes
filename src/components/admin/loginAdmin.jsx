import React from 'react'

import './loginAdmin.css'

function loginAdmin({closeModal}) {
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
            <form action="">
                        <div className="formGroup">
                            <label for="user">User  </label>
                            <input type="text" id='user' name='user' />
                        </div>
                        <div className="formGroup">
                            <label for="pass">Password </label>
                            <input type="password" id='pass' name='pass' />
                        </div>
                        <button>Send</button>
                    </form>
            </div>
            </div>
        </div>
    )
}

export default loginAdmin
