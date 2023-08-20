import React, { useEffect, useState } from "react";
import AdminSidebar from "../AdminSidebar";
import cuisineLocalImage from "../../../assets/images/event-2.jpg";
import "../../CSS/createCuisine.css";
import axios from "axios";
import { MdUpload } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CreateCuisine = ({ user, isAuth, isAdmin }) => {
  const nav = useNavigate();
  //states
  const [userData, setUserData] = useState({
    cuisineName: "",
    cuisineType: "",
    cuisinePrice: "",
    cuisineDescription: "",
    cuisineImg: "",
    isPopular: ""
  });
  const [cuisinePreview, setCuisinePreview] = useState("");
  // other state management
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  // converting img into string and storing in cuisinePreview state
  const handleImgInput = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCuisinePreview(reader.result);
    };
  };

  // sending data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    //error if photo isnt uploaded
    if (cuisinePreview.length < 3)
      return alert("Please Provide an Image for Cuisine");

    // setting cuisinePreview (image string) to userData.cuisineImg state
    userData.cuisineImg = cuisinePreview; 

    // handling isPopular 
    const domIsPopular = document.querySelector("#isPopular");
    userData.isPopular = domIsPopular.checked;

    try {
      //sending userData object state to backend
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/admin/cuisine",
        userData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      alert(data.msg);
    } catch (error) {
      alert(error.response.data.msg);
    }
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
        <div className="head">
          <h1>Create Cuisine</h1>
        </div>
        <br />
        <br />
        <div className="create-cuisine-body">
          <form method="post">
            <div className="cuisine-img-container">
              <div className="preview-img">
                <img
                  src={cuisinePreview ? cuisinePreview : cuisineLocalImage}
                  alt="preview-img"
                />
              </div>
              <label className="cuisine-select-img" htmlFor="cuisineImg">
                <input
                  onChange={handleImgInput}
                  type="file"
                  accept="image/*"
                  name="cuisineImg"
                  id="cuisineImg"
                />
                <MdUpload /> Upload Image
              </label>
            </div>

            <label htmlFor="cuisineName">Cuisine Name</label>
            <input
              value={userData.cuisineName}
              placeholder="eg: Tteokbokki"
              onChange={handleInput}
              type="text"
              id="cuisineName"
              name="cuisineName"
            />
            <label htmlFor="cuisineType">Cuisine Type</label>
            <input
              value={userData.cuisineType}
              placeholder="eg: Bokkeum"
              onChange={handleInput}
              type="text"
              id="cuisineType"
              name="cuisineType"
            />
            <label htmlFor="cuisinePrice">Cuisine Price</label>
            <input
              value={userData.cuisinePrice}
              placeholder="in Rupees, eg: 450/-"
              onChange={handleInput}
              type="text"
              id="cuisinePrice"
              name="cuisinePrice"
            />
            <label htmlFor="cuisineDescription">Cuisine Description</label>
            <input
              value={userData.cuisineDescription}
              placeholder="eg: Tteokbokki (떡볶이), or simmered rice cake, is a popular Korean food"
              onChange={handleInput}
              type="text"
              id="cuisineDescription"
              name="cuisineDescription"
            />
            <input type="checkbox" name="isPopular" id="isPopular" className="checkbox-style" />
            <label htmlFor="isPopular">Add To Popular</label>
            <br />
            <button onClick={handleSubmit} type="submit">
              Create Cuisine
            </button>
          </form>
        </div>
      </div>
      <div className="admin-sidebar">
        <AdminSidebar />
      </div>
    </div>
  );
};

export default CreateCuisine;
