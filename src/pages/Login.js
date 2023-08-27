import React from 'react'
import { useNavigate ,Link } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login() {
  // login Function
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;


    try {
      await signInWithEmailAndPassword(auth, email,password); // google auth native method for login 
      setLoading(true);
      navigate("/"); // if authentication successful then navigate to homepage
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <>

    <div className="formContainer">
        <div className="formWrapper">
        <span className="title">Login</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
                {err && <span style={{color:'red'}}>Enter Your Details properly</span>}
            </form>
            <p> You Dont have an account ? <Link to="/register"> Sign up</Link> </p>
        </div>
    </div>
    </>
  );
}

export default Login;
