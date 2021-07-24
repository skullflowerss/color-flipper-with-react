import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';
import { Color } from './Color'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HexMaker } from './HexMaker';
import { RgbMaker } from './RgbMaker';


class Container extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      backgroundColor: HexMaker(),
      isRgbOn: false,
      isHexOn: true,
      translateHex: false,
      translateRGB: true
    }
    this.handleRgb = this.handleRgb.bind(this)
    this.handleHex = this.handleHex.bind(this)
    this.colorChange = this.colorChange.bind(this)
  }

  handleRgb(){
    this.setState({
      isRgbOn : true,
      isHexOn: false
    })
    if(this.state.translateRGB) this.translatorRGB()
    
  }

  handleHex(){
    this.setState({
      isHexOn: true,
      isRgbOn: false
    })
    if(this.state.translateHex) this.translatorHEX()
  }

  colorChange(){
    if(this.state.isHexOn){
      this.setState({
        backgroundColor:HexMaker()
      })
    }else{
      this.setState({
        backgroundColor:RgbMaker()
      })
    }
  }

  translatorRGB(){
      let hex = this.state.backgroundColor;
      hex = hex.replace('#','');
      let r = parseInt(hex.substring(0,2), 16);
      let g = parseInt(hex.substring(2,4), 16);
      let b = parseInt(hex.substring(4,6), 16);
  
      let result = 'rgb( '+r+', '+g+', '+b+')';
      this.setState({
        backgroundColor: result,
        translateHex: true,
        translateRGB: false
      })
  }

  translatorHEX(){
    let color = this.state.backgroundColor 
    let colorArr = color.replace(/[rgb()]/g, "").split(',').map(x => Number(x)) 
    let rgbVall = rgbToHex(colorArr[0], colorArr[1], colorArr[2]).toUpperCase()
    this.setState({
      backgroundColor: rgbVall,
      translateHex: false,
      translateRGB: true
    })
  }

  render(){
    return(
      <div className="container">
        <NavBar onRgb={this.handleRgb} onHex={this.handleHex}/>
        <Color bgColor={this.state.backgroundColor} onClick={this.colorChange} />
      </div>
    )
  }
}

ReactDOM.render(
  <Container />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



function rgbToHex(r, g, b){
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}