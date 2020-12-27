import "../styles/about.css"
import Planet from "./planetComponent"
import { Element } from 'react-scroll'
import Planets from "./planets"
import React from "react"
import Merkury from "../assets/MerkuryS.png"
import Wenus from "../assets/WenusS.png"
import Ziemia from "../assets/ZiemiaS.png"
import Mars from "../assets/MarsS.png"
import Jowisz from "../assets/JowiszS.png"
import Saturn from "../assets/SaturnS.png"
import Uran from "../assets/UranS.png"
import Neptun from "../assets/NeptunS.png"
import MerkuryR from "../assets/MerkuryR.png"
import WenusR from "../assets/WenusR.png"
import ZiemiaR from "../assets/ZiemiaR.png"
import MarsR from "../assets/MarsR.png"
import JowiszR from "../assets/JowiszR.png"
import SaturnR from "../assets/SaturnR.png"
import UranR from "../assets/UranR.png"
import NeptunR from "../assets/NeptunR.png"
class About extends React.Component {
constructor(props){
  super(props);
  this.state={
    planets:[...Planets],
    selected:0,
    scrolled:false,
    imageType:"digital"
  }
  }
  isBottom(el) {
    return el.getBoundingClientRect().top -10 <= 0;
  }
  
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  
  trackScrolling = () => {
    const wrappedElement = document.getElementById('about');
    if (this.isBottom(wrappedElement)) {
      this.setState({
        scrolled:true
      })
    }
    else{
      this.setState({
        scrolled:false
      })
    }
  };
  render(){
    const clrs=[
    {
    main:"rgba(80,80,80,0.3)",
    side:"rgba(116,116,116,0.3)"
    },
    {
    main:"rgba(63,48,29,0.3)",
    side:"rgba(252,170,74,0.3)"
    },
    {
    main:"rgba(4,21,209,0.2)",
    side:"rgba(62,215,35,0.2)"
    },
    {
    main:"rgba(105,44,30,0.3)",
    side:"rgba(226,54,27,0.3)"
    },
    {
    main:"rgba(126,101,87,0.3)",
    side:"rgba(157,135,113,0.3)"
    },
    {
    main:"rgba(159,142,118,0.3)",
    side:"rgba(220,193,150,0.3)"
    },
    {
    main:"rgba(43,55,57,0.3)",
    side:"rgba(105,139,143,0.3)"
    },
    {
    main:"rgba(22,37,64,0.3)",
    side:"rgba(46,76,152,0.3)"
    },
      
    ]
    const solar=[
      Merkury,Wenus,Ziemia,Mars,Jowisz,Saturn,Uran,Neptun
    ]
    const pl=[
    this.state.planets[0].img.Merkury,
    this.state.planets[1].img.Wenus,
    this.state.planets[2].img.Ziemia,
    this.state.planets[3].img.Mars,
    this.state.planets[4].img.Jowisz,
    this.state.planets[5].img.Saturn,
    this.state.planets[6].img.Uran,
    this.state.planets[7].img.Neptun,
    ]
    const real=[
      MerkuryR,WenusR,ZiemiaR,MarsR,JowiszR,SaturnR,UranR,NeptunR
    ]
    return (
      <Element id='about' name='about'className="aboutContainer" >
        <div className="aboutContainer">
        {this.state.scrolled
        ?<div className="tilesContainer">
        {this.state.planets.map((planet, index) =>
            <div onClick={()=>{
              this.setState({
                selected:index
              })
            }}>
              <Planet key={index} name={planet.name} img={pl[index]}/>
            </div>
            
            )}
          
        </div>
        :<div className="tilesContainer">
          {this.state.planets.map((planet, index) =>
            <div onClick={()=>{
              this.setState({
                selected:index
              })
            }}>
              <Planet key={index} name={planet.name} img={pl[index]} style={{opacity:0}}/>
            </div>
            
            )}
        </div>
        }
        
        <div className="planetInfo" >
        <h2>Click a planet to see informations about it</h2>
          <div class="infoWrapper" style={
            this.state.scrolled === true
            ?{}
            :{opacity:0}}>
            <div  className="wrapperAgainn">
            <div className="image">
            <img className="planetImage" style={{
              backgroundColor:clrs[this.state.selected].main,
              borderRadius:"5vh",
              transition:"1s ease"
              }}src={
                this.state.imageType === "digital"
                ? pl[this.state.selected]
                : real[this.state.selected]
              } alt="Ziemia"/>
            </div>
            <div className="data" >
              <div className="switch" style={{
              backgroundColor:clrs[this.state.selected].main,
              borderRadius:"5vh",
              transition:"1s ease"
              }}>
              <h1>Image type</h1>
              <div className="chooseButtonWrapper">
              <div onClick={()=>{
                this.setState({
                  imageType:"digital"
                })
              }} className="chooseButton" style={
                this.state.imageType === "digital"
                ?{backgroundColor: "rgba(255, 255, 255, 0.5)"}
                :{}}>
                Digital
              </div>
              <div onClick={()=>{
                this.setState({
                  imageType:"real"
                })
              }} className="chooseButton" style={
                this.state.imageType === "real"
                ?{backgroundColor: "rgba(255, 255, 255, 0.5)"}
                :{}}>
                Real
              </div>
              </div>
              </div>
            </div>
            </div>
            
            <div className="wrapperAgain">
            <div className="name" style={{
              backgroundColor:clrs[this.state.selected].main,
              borderRadius:"5vh",
              transition:"1s ease"
              }}>
            <span className="nameText">{this.state.planets[this.state.selected].name}</span>
            <div className="image2">
            <img className="solarImage" src={solar[this.state.selected]} alt="solar"/>
              </div>
            </div>
            <div className="description" style={{
              backgroundColor:clrs[this.state.selected].main,
              borderRadius:"5vh",
              transition:"1s ease"
              }}>
              <h1>Description</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            </div>
           
            
            
           
          </div>
        </div>
        </div>
      </Element>
    );
  }
}


export default About;
