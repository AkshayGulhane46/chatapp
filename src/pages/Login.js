
import React from 'react'


function Login() {
  return (
    <>

    <div className="formContainer">
        <div className="formWrapper">
        <span className="logo"> Free Chat</span>
        <span className="title">Login</span>
       
            <form>
                
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>Sign In</button>
            </form>
            <p> You Dont have an account ? Sign up</p>

        </div>
    </div>
    </>
  );
}

export default Login;
