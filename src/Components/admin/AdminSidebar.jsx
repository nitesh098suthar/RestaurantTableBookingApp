import React from "react";
import axios from "axios";
import { Link as Routerlink, useNavigate } from "react-router-dom";
import "../../CSS/adminsidebar.css";
import { Link } from "react-scroll";

const AdminSidebar = () => {
  const nav = useNavigate();
  // reqesting backend to logout
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/logout", {
        withCredentials: true,
      });
      alert(data.msg);
      // navigating user to home page
      nav("/");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <>
      <div className="admin-sidebar-header">
        <h1>RestroSpace Admin Panel</h1>
      </div>
      <hr />
      <br />
      <ul className="admin-sidebar-body">
        {window.location.pathname === "/admin/createcuisine" ? (
          <>
            <li>
              <button>
                <Routerlink to="/admin/dashboard">Admin Dashboard</Routerlink>
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button>
                <Link spy={true} smooth={true} to="admin-clients">
                  Clients Logged in
                </Link>
              </button>
            </li>
            <br />
            <li>
              <button>
                <Link spy={true} smooth={true} to="admin-cuisine">
                  All Cuisines
                </Link>
              </button>
            </li>
            <br />
            <li>
              <button>
                <Link spy={true} smooth={true} to="admin-reserved">
                  Reserved Tables
                </Link>
              </button>
            </li>
            <br />
          </>
        )}
        <li>
          <button>
            <Routerlink to="/admin/createcuisine">Create Cuisine</Routerlink>
          </button>
        </li>
      </ul>
      <div className="admin-sidebar-footer">
        <button type="submit" className="ghost-btn" onClick={logoutHandler}>
          Logout
        </button>
      </div>
    </>
  );
};

export default AdminSidebar;
