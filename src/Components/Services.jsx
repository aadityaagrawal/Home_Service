import React from 'react'
import "./Services.css"
import ServiceIcon from './ServiceIcon'

function Services() {

  // const servicesDetail = {
  //   {
  //     imagePath : "src/assets/Delete.png",
  //     Title : "House Cleaning",
  //     Caption : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis similique sint, magnam fugiat impedit corporis ipsam! Explicabo, odit tenetur?"
  //   },

  // }

  return (
    <>
    <div className="services-heading">
    <h1 className='service-heading-left'> Always Provide The Best Service</h1>
    <div className="service-heading-right">
      <p className='service-heading-right-top'> Our Services </p> 
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, dolores.
    </div>
    </div>

    <ServiceIcon>

    </ServiceIcon>
    </>
  )
}

export default Services