import React from 'react'


import '../../CSS/OurStory.css'

const OurStory = () => {
  return (
    <>
      <div className='OurStory main-container ' id='our-story'>


        <div className='OurStory-wrapper flex-wrapper'>

          <div className='OurStoryOne grid-wrapper'>
            <div className='Head smallText alwaysHead'>
              <p className='head-line'>Our Story</p>
            </div>
            <div >
              <h1 className='Mid'>Every flavour tells a story</h1>
              <p id='story'>
              The day had finally arrived. After months of planning, preparation, and anticipation, the new restaurant was ready to open its doors. The staff, dressed in their crisp uniforms, eagerly awaited the arrival of the first customers. The chef had spent countless hours perfecting the menu, and the aroma of his dishes filled the air. The decor was chic and modern, with warm lighting and comfortable seating.

As the clock struck noon, the first guests arrived. They were greeted with warm smiles and ushered to their tables. The waitstaff was attentive and knowledgeable, guiding them through the menu and making recommendations. The food was exquisite, with each dish a perfect balance of flavors and textures.




              </p>
            </div>
            <div className='Tail'>
              <h4>Book through call +91 73001 12706</h4>
              {/* <h3></h3> */}
            </div>

          </div>

          <div className='OurStoryTwo'>
            <img src="Images/OurStory.png" alt="" className='rightStoryImage' />
          </div>
        </div>


      </div>
    </>
  )
}

export default OurStory

//isme aboutus or chef ke bare me bhi likhna hai