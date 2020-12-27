import React from "react"
import { Element } from "react-scroll";
import Photos from "./photos"
import "../styles/galery.css"
import view from "../assets/view.png"
class Galery extends React.Component {
constructor(){
    super();
    this.state={
        clicked:false,
        selected:"All",
        first:true
    }
}
render(){
    const list=["All","Sun","Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Uranus","Moon","Spacecraft"]
    const items = Photos.slice(0, 9)
    let im;
    this.state.first === true?
    im="image"
    :
    im="image2"
   
    this.state.clicked === true?
    setTimeout(() => {
        this.setState({first:false})
      }, 3000)
    :
    console.log("no")
    return(
        <Element id='galery' name='galery'className="galeryContainer" >
            <h1 style={
                this.state.clicked === false
                ?{}
                :{display:"none"}
            }> Click tiles to view more </h1>
            <div className="wrapp">
            <div className={this.state.clicked === false
            ?"a"
            :"chooseBar"}>
            {list.map((index)=>
            <div className="buttonElement" onClick={()=>{
                this.setState({selected:index})
            }} style={this.state.selected == index?{backgroundColor: "rgb(102, 97, 97)"}:{}}>
                {index}
            </div>
            )}
            </div>
            <div className={this.state.clicked === false
            ?"imageContainer"
            :"imageContainer2"}>
            <div onClick={()=>this.setState({clicked:true})}className="overlay" style={
                this.state.clicked === false
                ?{}
                :{display:"none"}
            }>
                <img src={view} alt="view" className="viewImage"></img>
            </div >
                {this.state.clicked === false
                ? <div style={{
                    display:'flex',
                    flexWrap:"wrap",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    {items.map((photo,index)=>
                    <div className="image">
                        <img src={photo.src} id={index} ></img>
                    </div>)}
                </div>
                : <div style={{
                    display:'flex',
                    flexWrap:"wrap",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    {Photos.map((photo,index)=>
                    (this.state.selected == photo.planet || this.state.selected=="All")?    
                    <div className={im}>
                    <img src={photo.src} id={index} ></img>
                    </div>
                    :
                    null
                        )}
                </div>
                }
            </div>
            </div>
           
            
        </Element>
    );
}
}
export default Galery
