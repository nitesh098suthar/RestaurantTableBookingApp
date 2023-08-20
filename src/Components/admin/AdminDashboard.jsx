import React, { useEffect, useState } from "react";
import "../../CSS/adminsidebar.css";
import "../../CSS/adminDashboard.css";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { reservationAssembler } from "./reservationAssembler";

const AdminDashboard = ({ user, isAuth, isAdmin }) => {
  const nav = useNavigate();
  const [cuisine, setCuisine] = useState(null);
  const [reservations, setReservations] = useState(null);
  const [userList, setUserList] = useState(null);


  //chekList 

  const checkList = async (ID, table) => {
    try {
      await axios.post(`http://localhost:5000/api/v1/admin/check/${ID}`,{table}, {withCredentials:true});
      fetchReservations();
    } catch (error) {
      alert(error.response.data.msg);
    }

  }

  // getting all cuisies from backend by get request
  const fetchCuisine = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/cuisine");
      setCuisine(data.cuisines);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  // getting all cuisies from backend by get request
  const fetchReservations = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/admin/reservations",
        { withCredentials: true }
      );
      // setReservations(data.msg)
      setReservations(reservationAssembler(data.msg));
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  // getting all users from backend by get request
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/admin/users",
        { withCredentials: true }
      );
      setUserList(data.users);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  // invoking both function on page load
  useEffect(() => {
    fetchCuisine();
    fetchReservations();
    fetchUsers();
  }, []);

  //delete cuisine function
  // taking cuisine id as parameter
  const handleDelete = async (id) => {
    try {
      //sending request to /admin/cuisine/<cuisineId>
      const { data } = await axios.delete(
        "http://localhost:5000/api/v1/admin/cuisine/" + id,
        { withCredentials: true }
      );
      alert(data.msg);
    } catch (error) {
      alert(error.response.data.msg);
    }
    fetchCuisine();
  };

  // if user isnt loggedin redirecting to login page
  // if user isnt admin redirecting to home page
  useEffect(() => {
    !isAuth && nav("/login");
    !isAdmin && nav("/");
  }, [isAdmin, isAuth, nav]);
  return (
    <div className="admin-parent">
      <div className="admin-dashboard">
        <br />
        <br />
        <div className="admin-dashboard-header">
          <h1>Welcome Back {user?.name}</h1>
        </div>
        <br />
        <br />
        <div className="user-table table-container " id="admin-clients">
          <h2>Our Clients</h2>
          <br />
          <br />
          <table border="0" cellSpacing={0}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile No.</th>
              </tr>
            </thead>
            <tbody>
              {userList &&
                userList.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contactNumber}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="cuisine-table table-container" id='admin-reserved'>
          <h2>Reserved Tables</h2>
          <br />
          <br />
          <table border="0" cellSpacing={0}>
            <thead>
              <tr>
                <th>Table</th>
                <th>Client Name</th>
                <th>Client Email</th>
                <th>Mobile Number</th>
                <th>Reservation Time</th>
                <th>Date</th>
                <th>Person</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reservations &&
                reservations.map((item) => (
                  <tr key={item._id}>
                    <td>{item.table}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    {/* <td>{item.phoneNumber}</td> */}
                    <td>{item.time}</td>
                    <td>{item.date}</td>
                    <td>{item.person}</td>
                    <td>{item.message}</td>
                    <td><MdDelete onClick={()=>checkList(item._id, item.table)}/></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="cuisine-table table-container" id="admin-cuisine">
          <h2>Cuisines We Serve</h2>
          <br />
          <br />
          <table border="0" cellSpacing={0}>
            <thead>
              <tr>
                <th>Cuisine Name</th>
                <th>Cuisine Type</th>
                <th>Cuisine Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cuisine &&
                cuisine.map((item) => (
                  <tr key={item._id}>
                    <td>{item.cuisineName}</td>
                    <td>{item.cuisineType}</td>
                    <td>{item.cuisinePrice}</td>
                    <td>
                      <MdDelete
                        onClick={() => handleDelete(item._id)}
                        className="delete-btn"
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="admin-sidebar">
        <AdminSidebar isAdmin={isAdmin} isAuth={isAuth} />
      </div>
    </div>
  );
};

export default AdminDashboard;
