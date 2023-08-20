import React from 'react'
import '../../CSS/SpecialDishes.css'

const SpecialDishes = () => {
  return (
    <>
      <div className='SpecialDishes main-container'>

        <div className='SpecialDishesOne'>
          <img src="Images/special-dish-banner.png" alt="" id='specialDishImage' />
          <div className='overlaySpecialDishesOne'>
          </div>
        </div>

        <div className='SpecialDishesTwo grid-wrapper'>

          <div className='SDT-Wrapper '>

            <div className='SpecialDishesTwox'>
              <img src="Images/badge-1.png" alt="" className='ticket' />
              <div className='SpecialDishTicket smallText alwaysHead'>
                <p className='head-line'>Special Dish</p>
              </div>
            </div>

            <div className='SpecialDishesTwoy'>
              <h1>
                Paneer Tikka
              </h1>
              <p className="paneerTikkaText">
              Paneer tikka or Paneer Soola or Chhena Soola is an Indian dish made from chunks of paneer/ chhena marinated in spices and grilled in a tandoor. It is a vegetarian alternative to chicken tikka and other meat dishes. It is a popular dish that is widely available in India and countries with an Indian diaspora.pa.
              </p>
            </div>

            <div className='SpecialDishesTwoz'>
              <p className='sdprice'><del>$40.00</del>  <span className='sdpriereal'><strong>$20.00</strong></span></p>
            
            </div>

            <div className='SpecialDishesTwozz'>
              <button id='viwAllMenuSpD'>VIEW ALL MENU</button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default SpecialDishes
