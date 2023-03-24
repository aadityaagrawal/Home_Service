import React from 'react'
import Home from "../assets/Home.png"
import "./ServiceIcon.css"

function ServiceIcon() {
  return (
    <div className='icon'>
{/* ------------Icon----------- */}
<div className="iconImage">
<img src={Home} alt="Home Icon" />
</div>
{/* ---------------Title-------------- */}
<div className="iconTitle">
    House Cleaning
</div>
{/* --------------Caption---------------------- */}
<div className="iconCaption">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestias ut voluptatibus et similique deserunt nostrum ipsa optio aut inventore?
</div>
    </div>
  )
}

export default ServiceIcon