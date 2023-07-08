import React from 'react'
import "./style.css"
import Box from "../block_for_f4_f5/block.jsx"
import Hu from "../../../../assets/humidity.svg"
import a from "../../../../assets/air.svg"
import prec from "../../../../assets/prec.svg"
import hum from "../../../../assets/hum.png"
import pre from "../../../../assets/pre.png"

export default function Frame4() {
  return (
      <div className="f4_main">
        <Box text={"Humidity"} icon={<img src={Hu} alt='Hu'/>} graph={<p><img src={hum} alt="" width={150}/></p>}/>
        <Box text={"Wind"} icon={<img src={a} alt='a'/>} graph={<p>graph</p>}/>
        <Box text={"Precipitation"} icon={<img src={prec} alt='prec'/>} graph={<p><img src={pre} alt="" width={150} /></p>}/>
      </div>
    )
}
