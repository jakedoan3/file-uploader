import React from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

const Login = ( {setLoginEmail, loginEmail, setLoginPassword, loginPassword, setRegisterEmail, registerEmail, setRegisterPassword, registerPassword, setUser, user} ) => {
  

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user.user.email);
      setUser(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutUser = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {user ? (
        <div className="login">
          <h3>LOGOUT</h3>
          <h4>Hello, {user.email} </h4>
          <button onClick={logoutUser}>Log Out</button>
        </div>
      ) : (
        <div className="authenticate">
            <div className="login">
            <h3>LOGIN</h3>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={loginUser}>Login</button>
            </div>
          
          <div className="login">
          <h3>CREATE ACCOUNT</h3>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={registerUser}>Create User</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default Login;
