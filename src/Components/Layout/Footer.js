import React from "react";
import "../../CSS/Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="Footer main-container grid-wrapper">
        <div className="Footer-container grid-wrapper">
          <div className="Links flex-wrapper">
            <div className="FooterOne">
              <ul className="unorderedList grid-wrapper">
                <li>
                  <Link spy={true} smooth={true} to="home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link spy={true} smooth={true} to="menu">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link spy={true} smooth={true} to="our-story">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link spy={true} smooth={true} to="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="FooterTwo grid-wrapper">
              <div id="ourLogo">
                <img src="Images/Restro-Space-Logo.png" alt="" id="logo" />
              </div>

              <div id="address">
                || For more information ||
                <br />
                <span>restrospace2023@gmail.com</span>
                <br />
                <span>booking request : +91 73001 12706</span>
                <br />
                <span>Open : 08:00 am - Close : 10:00 pm</span>
                <br />
              </div>

              <div className="Threebox">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div>
                <p>Visit Our Blog</p>
                <button>Visit Our Blog</button>
              </div>
            </div>
            <div className="FooterThree">
              <ul className="unorderedList grid-wrapper">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Google Map</li>
              </ul>
            </div>
          </div>

          <div className="Me">
            <p>
              @2023 RESTROSPACE. All rights reserved | Crafted by{" "}
              <a href="/">Saksham</a> & <a href="/">Nitesh</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
