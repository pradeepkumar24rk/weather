
import "./style.css";
export default function Frame1() {
  return (
    <div className="left_f1_main">
      <button>+</button>
      <div className="slider_container">
        <div className="r1"></div>
        <div className="c1"></div>
        <div className="c1"></div>
      </div>
      <div className="toogle_button">
        <div className="celsius">
          <sup>o</sup>C
        </div>
        <div className="toogle">
          <div className="toggle_circle"></div>
          <div className="toggle_rect"></div>
        </div>
        <div className="fahrenheit">
          <sup>o</sup>F
        </div>
      </div>
    </div>
  );
}
