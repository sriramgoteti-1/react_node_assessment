import "./signUp.css"
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError(false);
  //   try {
  //     const res = await axios.post("/api/auth/signup", {
  //       username,
  //       email,
  //       password,
  //     });
  //     res.data && window.location.replace("/login");
  //   } catch (err) {
  //     setError(true);
  //   }
  // };
  return (
    <div className="signup">
    <span className="signupTitle">SignUp</span>
    <form className="signupForm">
      <label>Username</label>
      <input
      className="signupInput" 
      type="text" 
      placeholder="Enter your username..."
      />
      <label>Email</label>
      <input className="signupInput" 
      type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="signupInput" type="password" 
      placeholder="Enter your password..." />
      <label>Role</label>
<select name="role" className="signupInput">
  <option value="Student">Student</option>
  <option value="Admin">Admin</option>
</select>
      <button className="signupButton" type="submit">SignUp</button>
    </form>
      <button className="signupLoginButton">
        Login
        </button>
    
  </div>
  )
}