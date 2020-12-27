import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css"
import Home from "./components/Home"
import Test from "./components/test"
import About from "./components/About"
import Galery from "./components/Galery"
import Contact from "./components/Contact"
import React from "react"
class App extends React.Component {
  
  render(){
    return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/" exact component={() => 
          <div>
          <Home />
          <About></About>
          <Galery/>
          <Contact></Contact>
          </div>
          } />
          <Route path="/test" exact component={() => <Test />} />
        </Switch>
      </Router>
    </div>
  );
  }
  
}

export default App;
