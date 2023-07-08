import "./style.css"
import sun from "../../../assets/sun.svg"

export default function Frame3() {
  return (
    <div className="left_f3_main">
        <input type="button" value={"<"} />
        <div className="temp_block">
            <div className="temprature_no">27<sup>o</sup></div>
            <div className="weather"><img src={sun}></img> Sunny</div>
        </div>
        <input type={'button'} value={">"}/>
    </div>
  )
}
