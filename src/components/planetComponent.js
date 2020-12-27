import "../styles/planet.css"
function Planet(props) {
  return (
<div className="planetContainer">
<img style={props.style} className="img" src={props.img} alt="img"/>
<span style={props.style}>{props.name}</span>
</div>
  );
}

export default Planet;
  