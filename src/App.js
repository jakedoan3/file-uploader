
import "./App.css";
import Login from "./components/Login";
// import UploadAudio from "./components/UploadAudio";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase"
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";


//last updated May 8, 2023

//TO-DO
//merge drag and drop into upload component
//authentication+signup/login components

const App = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});

  

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  

  return (
    <div className="container">
      <h1>File Uploader</h1>
      <Login 
      setLoginEmail={setLoginEmail}
      loginEmail={loginEmail}
      setLoginPassword={setLoginPassword}
      loginPassword={loginPassword}
      setRegisterEmail={setRegisterEmail}
      registerEmail={registerEmail}
      setRegisterPassword={setRegisterPassword}
      registerPassword={registerPassword}
      setUser={setUser}
      user={user}
      />

      
      
      
      
    </div>
  );
};

export default App;
