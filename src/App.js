import React, { Component } from 'react';
import { TimelineLite, TweenLite, Linear } from 'gsap';
import './App.css';

class App extends Component {

  componentDidMount(){
    let nada = document.getElementById("tefa")
    TweenLite.to(nada, 1, {left:"100px"})
  }
  
  render(){

    return(
      
      <div>
        <div 
          id="tefa" 
          style={{
            width: "40px", 
            height: "40px", 
            backgroundColor: "pink",
            position: "relative",
            marginTop: "50px"
          }}
        >
        </div>
      </div>
    );
  }
}

export default App;
