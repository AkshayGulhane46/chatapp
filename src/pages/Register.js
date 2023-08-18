
import React from 'react'
import add from "../img/add.png"
function Register() {
  return (
    <>

    <div className="formContainer">
        <div className="formWrapper">
        <span className="logo"> Free Chat</span>
        <span className="title">Register</span>
       
            <form>
                <input type="text" placeholder="display name"/>
                
                <input type="email" placeholder="email"/>
                
                <input type="password" placeholder="password"/>
                
                <input style={{display:"none"}} type="file" id="file"/>
                <label  htmlFor="file" > 
                <img src={add}/>  
                <span> Add your Image </span>              </label>
                <button>Sign Up</button>


            </form>
            <p> Do you have an account ? login</p>

        </div>
    </div>
    </>
  );
}

export default Register;
