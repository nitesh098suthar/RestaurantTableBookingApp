import React from 'react';
import '../../CSS/OurStrength.css';

const OurStrenght = () => {
  return (
    <>
      <div className='OurStrength'>


        <div className='OurStrength-wrapper position-wrapper'>


          <div className='OurStrengthA smallText alwaysHead '>
            <p className='head-line'>
              Why Choose Us
            </p>
          </div>
          <h1>
            Our Strength
          </h1>

          <div className='OurStrengthB flex-wrapper'>

            <div className='StrengthFirst strengthCard'>
              <img src="Images/features-icon-1.png" alt="" className='strengthOneImage strengthImage' />
              <h3>
                Hygenic Food
              </h3>
              <p>
                Food safety and sanitation for healthier nation &<br/>Food that good for your heart<br/> 
              </p>
            </div>
            <div className='StrengthSecond strengthCard'>
              <img src="Images/features-icon-2.png" alt="" className='strengthTwoImage strengthImage' />
              <h3>
                Fresh Environment
              </h3>
              <p>
                Whole environment of the RESTROSPACE is Clean, Fresh & Air conditioned<br/> 
              </p>
            </div>
            <div className='StrengthThird strengthCard'>
              <img src="Images/features-icon-3.png" alt="" className='strengthThreeImage strengthImage' />
              <h3>
               Skilled Chef
              </h3>
              <p>
                We have best skilled chefs they're passionate about cooking.
              </p>
            </div>
            <div className='StrengthFourth strengthCard'>
              <img src="Images/features-icon-4.png" alt="" className='strengthFourImage strengthImage' />
              <h3>
                Event & Party
              </h3>
              <p>
                Daily events that make your dinner memorable & we provide a proper party place. 
              </p>
            </div>

          </div>



        </div>



      </div>
    </>
  )
}

export default OurStrenght
