import React from "react";
import "../../CSS/Header.css";
import {Link} from 'react-scroll'

const Header = () => {
  return (
    <>
      <div className="Header main-container" id="home">
        <div className="headerOne flex-items nav">
          <img src="Images/Restro-Space-Logo.png" alt="logo" id="logo" />
          <div className="navBar block-items">
            <ul>
              <li><Link spy={true} smooth={true} to='home'>Home</Link></li>
              <li><Link spy={true} smooth={true} to='menu'>Menu</Link></li>
              <li><Link spy={true} smooth={true} to='our-story'>Our Story</Link></li>
              <li><Link spy={true} smooth={true} to='contact'>Contact</Link></li>
              <li></li>
            </ul>
          </div>
          <button className="findATable"><Link spy={true} smooth={true} to='reservation'>Find A Table</Link></button>
        </div>

        <div className="headerTwo flex-items">
          <div className="btn rightBtn arrowBtn"> </div>

          <div className="mainTextComp block-items">
            <div className="smallText alwaysHead">
              <p className="head-line">Amazing & Delicious</p>
            </div>
            <div className="mainText">
              <h1 id="mainText">
                Where every flavour
                <br />
                tells a story
              </h1>
              <p>
                A genuine fine - dining experience awaits.<br /> 
              </p>
            </div>
            <button id="viewOurMenuBtn"><Link to="menu" spy={true} smooth={true}>view our menu</Link></button>
          </div>
          <div className="btn rightBtn arrowBtn"> </div>
        </div>
      </div>
    </>
  );
};

export default Header;
