import React from 'react';


export class Color extends React.Component{

    render(){
        return(
            <div className="color-container"
                style={{
                    backgroundColor: this.props.bgColor,
                }}
            >   
            <div className="control-color">
                <p>The color is: <span id="color-text">{this.props.bgColor}</span></p>
                <button id="color-btn" onClick={this.props.onClick}>Click me</button>
            </div>
                
            </div>
        )
    }
}
