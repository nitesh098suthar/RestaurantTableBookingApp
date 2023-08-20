import React, { useState } from "react";
import axios from "axios";

import "../../CSS/OnlineReservation.css";
const OnlineReservation = () => {
  // all state in one object
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
    person: "1",
    date: "",
    startTime: "08 : 00 am",
    endTime: "10 : 00 pm",
    message: "",
    table: "t0",
  });
  //setting userData state as per user input
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // sending data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/reservation",
        userData,
        { withCredentials:true , Headers: { "Content-Type": "application/json" } }
      );
      alert(data.msg)
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  return (
    <>
      <div className="Reservation main-container" id="reservation">
        <div className="OnlineReservation-wrapper flex-wrapper">
          <div className="ResOne Res grid-wrapper">
            <div className="ResOneHead">
              <h1>Online Reservation</h1>
              <h4>
                Booking Request <span id="mobno">+91 73001 12706</span> or Fill
                out the order form
              </h4>
            </div>
            <div className="ResOneBody">
              <form action="">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          onChange={handleInput}
                          value={userData.fname}
                          type="text"
                          name="fname"
                          id="name"
                          placeholder="First Name"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInput}
                          value={userData.lname}
                          type="text"
                          name="lname"
                          id=""
                          placeholder="Last Name"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInput}
                          value={userData.phoneNumber}
                          type="number"
                          name="phoneNumber"
                          id=""
                          placeholder="Phone Number"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <ion-icon
                          name="person-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <select
                          name="person"
                          className="input-field"
                          onChange={handleInput}
                          value={userData.person}
                        >
                          <option className="select-dropdown" value="1">
                            1 Person
                          </option>
                          <option className="select-dropdown" value="2">
                            2 Person
                          </option>
                          <option className="select-dropdown" value="3">
                            3 Person
                          </option>
                          <option className="select-dropdown" value="4">
                            4 Person
                          </option>
                          <option className="select-dropdown" value="5">
                            5 Person
                          </option>
                          <option className="select-dropdown" value="6">
                            6 Person
                          </option>
                          <option className="select-dropdown" value="7">
                            7 Person
                          </option>
                        </select>
                        <ion-icon
                          name="chevron-down"
                          aria-hidden="true"
                        ></ion-icon>
                      </td>

                      <td>
                        <ion-icon
                          name="person-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <select
                          name="table"
                          className="input-field"
                          onChange={handleInput}
                          value={userData.table}
                        >
                          <option className="select-dropdown" value="t0">
                            Table No: 01
                          </option>
                          <option className="select-dropdown" value="t1">
                            Table No: 02
                          </option>
                          <option className="select-dropdown" value="t2">
                            Table No: 03
                          </option>
                          <option className="select-dropdown" value="t3">
                            Table No: 04
                          </option>
                          <option className="select-dropdown" value="t4">
                            Table No: 05
                          </option>
                          <option className="select-dropdown" value="t5">
                            Table No: 06
                          </option>
                          <option className="select-dropdown" value="t6">
                            Table No: 07
                          </option>
                          <option className="select-dropdown" value="t7">
                            Table No: 08
                          </option>
                          <option className="select-dropdown" value="t8">
                            Table No: 09
                          </option>
                          <option className="select-dropdown" value="t9">
                            Table No: 10
                          </option>
                        </select>
                        <ion-icon
                          name="chevron-down"
                          aria-hidden="true"
                        ></ion-icon>
                      </td>
                      <td>
                        <ion-icon
                          name="calendar-clear-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <input
                          type="date"
                          value={userData.date}
                          onChange={handleInput}
                          name="date"
                          className="input-field"
                          style={{ color: "white" }}
                        />

                        <ion-icon
                          name="chevron-down"
                          aria-hidden="true"
                        ></ion-icon>
                      </td>

                    </tr>
                    <tr>
                      
                      <td>
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <select
                          name="startTime"
                          value={userData.startTime}
                          onChange={handleInput}
                          className="input-field"
                        >
                          <option
                            className="select-dropdown"
                            value="08 : 00 am"
                          >
                            08 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="09 : 00 am"
                          >
                            09 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="10 : 00 am"
                          >
                            10 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="11 : 00 am"
                          >
                            11 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="12 : 00 am"
                          >
                            12 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="01 : 00 pm"
                          >
                            01 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="02 : 00 pm"
                          >
                            02 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="03 : 00 pm"
                          >
                            03 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="04 : 00 pm"
                          >
                            04 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="05 : 00 pm"
                          >
                            05 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="06 : 00 pm"
                          >
                            06 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="07 : 00 pm"
                          >
                            07 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="08 : 00 pm"
                          >
                            08 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="09 : 00 pm"
                          >
                            09 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="10 : 00 pm"
                          >
                            10 : 00 pm
                          </option>
                        </select>
                        <ion-icon
                          name="chevron-down"
                          aria-hidden="true"
                        ></ion-icon>
                      </td>
                      <td>
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>
                        <select
                          name="endTime"
                          value={userData.endTime}
                          onChange={handleInput}
                          className="input-field"
                        >
                          <option
                            className="select-dropdown"
                            value="08 : 00 am"
                          >
                            08 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="09 : 00 am"
                          >
                            09 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="10 : 00 am"
                          >
                            10 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="11 : 00 am"
                          >
                            11 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="12 : 00 am"
                          >
                            12 : 00 am
                          </option>
                          <option
                            className="select-dropdown"
                            value="01 : 00 pm"
                          >
                            01 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="02 : 00 pm"
                          >
                            02 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="03 : 00 pm"
                          >
                            03 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="04 : 00 pm"
                          >
                            04 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="05 : 00 pm"
                          >
                            05 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="06 : 00 pm"
                          >
                            06 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="07 : 00 pm"
                          >
                            07 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="08 : 00 pm"
                          >
                            08 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="09 : 00 pm"
                          >
                            09 : 00 pm
                          </option>
                          <option
                            className="select-dropdown"
                            value="10 : 00 pm"
                          >
                            10 : 00 pm
                          </option>
                        </select>
                        <ion-icon
                          name="chevron-down"
                          aria-hidden="true"
                        ></ion-icon>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="3">
                        <textarea
                          value={userData.message}
                          onChange={handleInput}
                          name="message"
                          placeholder="Message"
                          autoComplete="off"
                          className="input-field"
                        ></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3">
                        <button onClick={handleSubmit}>Book Now</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>

          <div className="ResTwo Res grid-wrapper">
            <h1 className="contactus" id="contact">Contact Us</h1>
            <div>
              <h4>Booking Request</h4>
              <h3>+91 73001 12706</h3>
            </div>
            <div className="smallbox"></div>
            <div className="location">
              <h4>Location</h4>
              <p>
                420 Near Urban Square - Sector 12<br/>
                Udaipur (Raj.)
              </p>
            </div>
            <div className="lunchTime">
              <h4>Lunch Time</h4>
              <p>
                02:00 PM to 04:00 PM
              </p>
            </div>
            <div>
              <h4 className="DinnerTime">Dinner Time</h4>
              <p>
              06:00 PM to 10:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineReservation;
