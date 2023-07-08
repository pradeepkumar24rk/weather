import React from 'react'
import "./style.css"
import pc from "../../../../assets/profile.jpg"

export default function Frame1() {
  return (
    <div className="f1">
        <div className='f1_para'><div className='welcome'>Welcome back Isabella!</div><div>Check out today's weather information</div></div>
        <div className="f1_icon_place"><button className="menu_dots">...</button><img src={pc} alt='pic'></img></div>
    </div>
  )
}
