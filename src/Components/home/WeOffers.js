import React from 'react'
import '../../CSS/WeOffers.css'

const WeOffers = () => {
  return (
    <>
      <div className='WeOffers main-container'>

        <div className='weOffersOne offeringCard'>
          <img src="Images/service-1.jpg" alt="" className=''/>
          <div className='weOffersBreakfast'>
            <h1 className='cardTitle'>
              BreakFast
            </h1>
            <button id='weOffersViewMenuBtn'>View Menu</button>
          </div>
        </div>

        <div className='weOffersTwo'>
          <div className='weOffersTwoMidOne smallText alwaysHead'>
            <p className='head-line'>
              Flavors For Royalty
            </p>

          </div>

          <div className='weOffersTwoMidTwo offeringCard'>
            <h1>We Offer top Notch</h1>

          </div>
          <div className='appetizers-wrapper'>
          <img src="Images/service-2.jpg" alt="" className='weOffersTwoMidTwo' id="appetizers"/>
          </div>
          <div className='weOffersAppetizers'>
            <h1 className='cardTitle'>
              Appetizers
            </h1>
            <button id='weOffersViewMenuBtn'>View Menu</button>
          </div>
        </div>


        <div className='weOffersThree offeringCard'>
          <img src="Images/service-3.jpg" alt="" className=''/>
          <div className='weOffersDrinks'>
            <h1 className='cardTitle'>
              Drinks
            </h1>
            <button id='weOffersViewMenuBtn'>View Menu</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default WeOffers
