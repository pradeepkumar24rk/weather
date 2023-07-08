import Box from "../block_for_f4_f5/block.jsx"
import sun from "../../../../assets/sun.svg"
import temp from "../../../../assets/temprature.svg"
import rn from "../../../../assets/rain.svg"
import uv from '../../../../assets/uv.png'
import fl from '../../../../assets/feelf.png'

export default function Frame5() {
  return (
      <div className="f4_main">
        <Box text={"UV index"} icon={<img src={sun} alt='sun'/>} graph={<p><img src={uv} alt=""  width={150}/></p>}/>
        <Box text={"Feels like"} icon={<img src={temp} alt='sun'/>} graph={<p><img src={fl} alt=""  width={150}/></p>}/>
        <Box text={"Chance of rain"} icon={<img src={rn} alt='sun'/>} graph={<p>graph</p>}/>
      </div>
    )
}
