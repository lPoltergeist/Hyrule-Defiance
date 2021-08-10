import React,{useState} from "react";
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import img3 from './images/img3.png'
import text from'./images/text.png'
import Mapa from "./pages";






function App() {

  const [ offset, setOffset ] = useState()

  const handleScroll = () => setOffset(window.pageYOffset)

  window.addEventListener('scroll', handleScroll)

  return (
    <div className="App">
      <div className="zoom">
     
      <img src={text} alt="" id="text" 
      style={{top:`-${10 + offset * 0.1 + '%' }`}}/> 
     <img src={img3} alt="" id="img3"
      style={{width: (50 + offset * 0.1) + '%'}}/> 
     </div> 

      <div className="content">
        <h1 className="font-family: triforce;">Hyrule Defiance</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non consectetur a erat nam. Vulputate mi sit amet mauris commodo quis imperdiet. Blandit massa enim nec dui nunc mattis. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Quis auctor elit sed vulputate mi sit amet. Justo nec ultrices dui sapien eget mi proin sed libero. Purus in massa tempor nec feugiat nisl pretium fusce. Viverra nibh cras pulvinar mattis nunc sed. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Eu sem integer vitae justo eget magna fermentum iaculis eu. Ut pharetra sit amet aliquam id diam. Scelerisque fermentum dui faucibus in ornare quam viverra orci. Suscipit tellus mauris a diam maecenas sed enim ut. Dictum fusce ut placerat orci nulla pellentesque dignissim enim.

Pellentesque habitant morbi tristique senectus et netus et malesuada. Ut ornare lectus sit amet. Sed tempus urna et pharetra pharetra massa. Id diam maecenas ultricies mi eget mauris pharetra. Sit amet consectetur adipiscing elit. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ullamcorper velit sed ullamcorper morbi. Magna etiam tempor orci eu lobortis elementum nibh. Augue interdum velit euismod in pellentesque massa placerat duis. Arcu odio ut sem nulla pharetra diam sit amet. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales. Tincidunt ornare massa eget egestas. Adipiscing enim eu turpis egestas pretium. Id aliquet risus feugiat in ante metus dictum at tempor. Iaculis eu non diam phasellus vestibulum lorem. Sit amet aliquam id diam maecenas ultricies. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. 
          </p>
        
      </div>
      <footer>
       <Router>
         <Navbar/>
         <Switch>
           <Route path='/mapa' exact component={Mapa} />
         </Switch>
       </Router>
      </footer>
    </div>
  );
}

export default App;
