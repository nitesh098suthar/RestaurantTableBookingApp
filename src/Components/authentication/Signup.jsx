import React, { useEffect, useState } from "react";
import "../../CSS/authStyle.css";
import "../CSS/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ isAuth, setIsAuth, setIsAdmin, setUser }) => {
  const nav = useNavigate();
  //states
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    cPassword: "",
  });
  // managing state .. adding value
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  // submitting data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    // checking both passwords are correct or not
    if (userData.cPassword !== userData.password) {
      return alert("Both Password and Confirm Password must match!");
    }

    // finally sending data to backend
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/register",
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
        <h1>Register Here, Be a member</h1>
      </div>
      <br />
      <div className="body ">
        <form method="post">
        <table className="table-field">
        <tr >
            <td>
                <label htmlFor="name" className="label-all">Name</label>


            </td>
            <td>
                <input type="text" id="name" name="name" placeholder="eg: John Doe" onChange={handleInput}
                    value={userData.name} className="table-input-field" />
            </td>
        </tr>
        

        <tr>
            <td>
                <label htmlFor="email" className="label-all">Email</label>
            </td>
            <td>
                <input placeholder="eg: address@service.com" type="email" id="email" name="email" onChange={handleInput}
                    value={userData.email} className="table-input-field" />
            </td>
        </tr>
        <tr>
            <td>
                <label htmlFor="contactNumber" className="label-all">Contact Number</label>

            </td>
            <td>
                <input placeholder="eg: 9439223xxx" type="text" id="contactNumber" name="contactNumber"
                    onChange={handleInput} value={userData.contactNumber} className="table-input-field" />
            </td>
        </tr>

        <tr>
            <td> <label htmlFor="password" className="label-all">Password</label>
            </td>
            <td> <input type="password" id="password" placeholder="strong password" name="password"
                    onChange={handleInput} value={userData.password} className="table-input-field" /></td>
        </tr>

        <tr>
            <td> <label htmlFor="cPassword" className="label-all">Confirm Password</label>
            </td>
            <td> <input type="password" placeholder="strong password" id="cPassword" name="cPassword"
                    onChange={handleInput} value={userData.cPassword} className="table-input-field" /></td>
        </tr>



    </table>
          <small>
            Already Have an account ? &nbsp;<Link to="/login">Login Here</Link>
          </small>
          <br />
          <button type="submit" onClick={handleSubmit} className="logButton">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
