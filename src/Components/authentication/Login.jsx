import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Login.css";


const Login = ({ isAuth, setIsAuth, setIsAdmin, setUser }) => {
  const nav = useNavigate();
  //state
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //managing state
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  //submitting data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // sending data to backend
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/login",
        userData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      //setting isAuth isAdmin and user for later use,
      // basically to validate everytime is user is logged in or not
      //and if user is admin or not to clearify whom to give all privillages
      setIsAuth(true);
      setUser(data.user);
      setIsAdmin(data.user.role === "admin");
      alert(data.msg);
      nav("/");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  // if user is loggedin redirecting to home page
  useEffect(() => {
    isAuth && nav("/");
  }, [isAuth, nav]);
  return (
    <div className="main-container-login">
      <div className="head">
        <h1 className="table-heading">Login, Welcome Back</h1>
      </div>
      <div className="body">
        <form method="post">
        <table className="table-field">
        
        <tr className="table-tr">
            <td className="table-td"> <label htmlFor="email">Email - id </label>
            </td>
            <td className="table-td"><input placeholder="address@service.com" type="email" id="email" name="email" onChange={handleInput}
                    value={userData.email} className="table-input-field" /></td>
        </tr>
        <tr className="table-tr">
            <td className="table-td"> <label htmlFor="password">Password</label>
            </td>
            <td className="table-td"> <input placeholder="Enter Password" type="password" id="password" name="password"
                    onChange={handleInput} value={userData.password} className="table-input-field" /></td>
        </tr>

    </table>
          <small className="small">
            Don't Have an account?&nbsp; <Link to="/signup">Register Here</Link>
          </small>
          <br />
          <button type="submit" onClick={handleSubmit} className="logButton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
