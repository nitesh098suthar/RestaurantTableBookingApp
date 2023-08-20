//React, Hooks & States
import React from "react";

//Components
import WeOffers from "./Components/home/WeOffers"; //black
import SpecialDishes from "./Components/home/SpecialDishes"; //fade
import OurStrength from "./Components/home/OurStrenght"; //fade
import Menu from "./Components/home/Menu"; //Black
import OurStory from "./Components/home/OurStory"; //fade
import OnlineReservation from "./Components/home/OnlineReservation"; //Black
import UpcomingEvents from "./Components/home/UpcomingEvents"; //fade

//CSS
import "./CSS/CustomCss.css";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { useState } from "react";
import { useEffect } from "react";

//APIs

const Restaurant = ({ cuisine }) => {
  //setting popular Cuisines
  const [popularCuisine, setPopularCuisine] = useState(cuisine);

  useEffect(() => {
    if (cuisine) {
      const data = cuisine.filter((item) => {
        return item.isPopular;
      });
      setPopularCuisine(data);
    }
  }, [cuisine]);

  return (
    <>
      <Header />
      <WeOffers />
      <SpecialDishes />
      <Menu cuisine={popularCuisine} isPopularSection={true} />
      <OurStrength />
      <Menu cuisine={cuisine} isPopularSection={false} />
      <OurStory />
      <OnlineReservation />
      <UpcomingEvents />
      <Footer />
    </>
  );
};

export default Restaurant;
