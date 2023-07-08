
import "./style.css"
import graph from '../../../../assets/graph.png'
export default function Frame2() {
  return (
    <div className="f2_main">
      <div className="f2_content">
        <div>Upcoming hours</div>
        <div className="f2_buttons">
            <input type='button' value={"Rain precipitation"}className='shade'></input>
            <input type='button' value={"Next days  >"}></input>
        </div>
      </div>
      <div className="f2_graph">
        <img src={graph} alt="" />
      </div>
    </div>
  )
}
