
import "./style.css"
export default function block(prop) {
  return (
    <div className="block_main">
        <div className="block_content">
            <div>{prop.text}</div>
            <div className="icon_block">{prop.icon}</div>
        </div>
        <div className="block_graph">{prop.graph}</div>
    </div>
    )
}
