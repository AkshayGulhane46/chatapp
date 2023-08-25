
import React, { useState } from 'react'
import add from "../img/add.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import {auth , storage } from "../firebase"

function Register() {
  const [err,setErr] = useState(false);
    const handleSubmit = async (e) =>{ 
    console.log("under handleSubmit");
    e.preventDefault();
    console.log(e.target[0].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0]; // to get the profile pic


try{
  const res = await createUserWithEmailAndPassword(auth, email, password)
  
const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(

  (error) => {
    // Handle unsuccessful uploads
    setErr(true);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user);
      console.log('File available at', downloadURL,{
        displayName, 
        photoURL : downloadURL 
      });
    });
  }
);


}catch(err){
  setErr(true);
}
  
  }
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
