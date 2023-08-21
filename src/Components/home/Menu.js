import React, { useEffect, useState } from "react";
import "../../CSS/Menu.css";
import axios from "axios";

const Menu = ({ cuisine, isPopularSection }) => {
  const [newCuisine, setNewCuisine] = useState(cuisine);
  const [filtered, setFiltered] = useState(cuisine);
  const [popularCuisine, setPopularCuisine] = useState(cuisine);

  //getting updated Cuisine everytime
  // for eg
  // if admin deletes any cuisine and you visit this page useEffect requests to backend and fetches fresh data
  useEffect(() => {
    const fetchCuisine = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/cuisine"
        );
        setNewCuisine(data.cuisines);
        // popular cuisines
        if (isPopularSection) {
          const popular = data.cuisines.filter((item) => {
            return item.isPopular;
          });
          setPopularCuisine(popular);
        }
      } catch (error) {
        alert(error.response.data.msg);
      }
    };
    fetchCuisine();
    //eslint-disable-next-line
  }, []);

  //filtering cuisine category wise onclick
  const filterMe = (type, isPopSection) => {
    let x = newCuisine;
    if(isPopSection === true) {
      x = popularCuisine;
    }
    const data = x.filter((item) => {
      return item.cuisineType.toLowerCase() === type;
    });
    setFiltered([...data]);
  };

  //setting filtered state to breakfast only cuisine in the beginning
  useEffect(() => {
    if (newCuisine) filterMe("breakfast", isPopularSection);
    //eslint-disable-next-line
  }, [newCuisine]);

  return (
    <>
      <div className="Menu flex-item displayFlex" id="menu">
        <div className="Menu-wrapper grid-wrapper">
          <div className="MenuHead smallText alwaysHead ">
            <p className="head-line">
              {isPopularSection ? "Special Section" : "Great Taste"}
            </p>
          </div>
          <h1 id="heading">
            {isPopularSection ? "Most Order Dishes" : "Our Delicious Menu"}
          </h1>
          <div className="MenuNav">
            <button onClick={() => filterMe("breakfast", isPopularSection)}>Breakfast</button>
            <button onClick={() => filterMe("appetizers", isPopularSection)}>Appetizers</button>
            <button onClick={() => filterMe("lunch", isPopularSection)}>Lunch</button>
            <button onClick={() => filterMe("drinks", isPopularSection)}>Drinks</button>
            <button onClick={() => filterMe("dinner", isPopularSection)}>Dinner</button>
            <button onClick={() => filterMe("desert", isPopularSection)}>Desert</button>
          </div>
          <div className="MenuCards flex-items ">
            {isPopularSection ? (
              <div className="MenuFirstSection mostPopularCards displayFlex">
                {filtered &&
                  filtered.map((item) => (
                    <div className="MenuCardOne card displayFlexCard" key={item._id}>
                      <div className="DishImage">
                        <img
                          src={item.cuisineImg || "Images/menu-1.png"}
                          alt=""
                          className="DishCardImage"
                        />
                      </div>
                      <div className="DishTextHead DishText">
                        <div className="DishTextUpper DishTextUp">
                          <h4>{item.cuisineName}</h4>
                          <p>{item.cuisineType}</p>
                          <span className="twoLines"></span>
                          <p>${item.cuisinePrice}</p>
                        </div>
                        <div className="DishTextFoot">
                          <p>{item.cuisineDescription}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="MenuFirstSection mostPopularCards displayFlex">
                {filtered &&
                  filtered.map((item) => (
                    <div className="MenuCardOne card displayFlexCard" key={item._id}>
                      <div className="DishImage">
                        <img
                          src={item.cuisineImg || "Images/menu-1.png"}
                          alt=""
                          className="DishCardImage"
                        />

                      </div>
                      <div className="DishTextHead DishText">
                        <div className="DishTextUpper DishTextUp">
                          <h4>{item.cuisineName}</h4>
                          <p>{item.cuisineType}</p>
                          <span className="twoLines"></span>
                          <p>${item.cuisinePrice}</p>
                        </div>
                        <div className="DishTextFoot">
                          <p>{item.cuisineDescription}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
