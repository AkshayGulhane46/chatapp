
import React, { useState } from 'react'
import add from "../img/add.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import {auth , storage } from "../firebase"

import { doc, setDoc } from "firebase/firestore"; 

import { db  } from '../firebase';

import { ref , uploadBytesResumable, getDownloadURL  } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
        
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <>

    <div className="formContainer">
        <div className="formWrapper">
        <span className="logo"> Free Chat</span>
        <span className="title">Register</span>
       
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="display name"/>
                
                <input type="email" placeholder="email"/>
                
                <input type="password" placeholder="password"/>
                
                <input style={{display:"none"}} type="file" id="file"/>
                <label  htmlFor="file" > 
                <img src={add}/>
                <span> Add your Image </span> </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong </span>}

            </form>
            <p> Do you have an account ? login</p>

        </div>
    </div>
    </>
  );
}

export default Register;
