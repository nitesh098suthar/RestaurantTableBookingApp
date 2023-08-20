import React from 'react';

import '../../CSS/UpcomingEvents.css'

const UpcomingEvents = () => {
    return (
        <>
            <div className='UpcomingEvents main-container flex-wrapper'>



                <div className='UpcomingEvents-wrapper grid-wrapper'>


                    <div className='UpcomingHead smallText alwaysHead'>
                        <p className='head-line'>Recent Update</p>
                    </div>

                    <h1>Upcoming Events</h1>

                    <div className='UpcomingCards flex-wrapper'>

                        <div className='cardOne upcard'>

                            <img src="Images/event-1.jpg" alt="" className="UpcomingImages"/>
                            <div className='cardOneOverlay'>

                          
                                <div className='bottomText'>

                                    <p>Food, Flavour</p>
                                    <p>
                                        Flavour is so good you'll try <br /> to eat with your eyes.
                                    </p>

                                </div>
                            </div>

                        </div>


                        <div className='cardTwo upcard'>

                            <img src="Images/event-2.jpg" alt="" className="UpcomingImages"/>
                            <div className='cardTwoOverlay'>

                           
                                <div className='bottomText'>

                                    <p>Food, Flavour</p>
                                    <p>
                                        Flavour is so good you'll try <br /> to eat with your eyes.
                                    </p>

                                </div>
                            </div>

                        </div>



                        <div className='cardThree upcard'>

                            <img src="Images/event-3.jpg" alt="" className="UpcomingImages"/>
                            <div className='cardThreeOverlay'>

                                <div className='bottomText'>

                                    <p>Food, Flavour</p>
                                    <p>
                                        Flavour is so good you'll try <br /> to eat with your eyes.
                                    </p>

                                </div>
                            </div>

                        </div>

                    </div>


                </div>


            </div>
        </>
    )
}

export default UpcomingEvents
