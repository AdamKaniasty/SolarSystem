import "../styles/home.css"
import { Element,Link } from 'react-scroll'
import Merkury from "../assets/Merkury.png"
import Wenus from "../assets/Wenus.png"
import Ziemia from "../assets/Ziemia.png"
import Mars from "../assets/Mars.png"
import Jowisz from "../assets/Jowisz.png"
import Saturn from "../assets/Saturn.png"
import Uran from "../assets/Uran.png"
import Neptun from "../assets/Neptun.png"
import React from "react"
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      scrolled:false,
    }
    }
    
  render(){
    window.addEventListener('scroll', () => {
      document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
    return (
      <Element id='home' name='home'className="homeContainer">
        <div className="homeContainer2">
        <img className="Merkury" src={Merkury} alt="Merkury"/>
        <img className="Wenus" src={Wenus} alt="Wenus"/>
        <img className="Ziemia" src={Ziemia} alt="Ziemia"/>
        <img className="Mars" src={Mars} alt="Mars"/>
      <img className="Saturn" src={Saturn} alt="Saturn"/>
      <img className="Jowisz" src={Jowisz} alt="Jowisz"/>
      <img className="Uran" src={Uran} alt="Uran"/>
      <img className="Neptun" src={Neptun} alt="Neptun"/>
      <div className="topNavbar">
        <Link  activeClass="active" to="home" spy={true} smooth={true} duration={1100} >
        <h1 className="navbarText">Home</h1>
        </Link>  
        
        <div className="line"></div>
        <Link  activeClass="active" to="about" spy={true} smooth={true} duration={1100} >
        <h1 className="navbarText">About</h1>
        </Link>
        <div className="line"></div>
        <Link  activeClass="active" to="galery" spy={true} smooth={true} duration={1250} >
        <h1 className="navbarText">Galery</h1>
        </Link>
        <div className="line"></div>
        <Link  activeClass="active" to="contact" spy={true} smooth={true} duration={1250} >
        <h1 className="navbarText">Contact</h1>
        </Link>
        
      </div>
      <div className="mainSection">
      
      </div>
        </div>
      </Element>
      
    );
  }
}

export default Home;
