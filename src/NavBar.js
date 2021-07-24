import React from 'react';

export class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <div className="nav-container">
                    <button onClick={this.props.onRgb}>Rgb</button>
                    <button onClick={this.props.onHex} id="hex" > Hex</button>
                </div>
            </div>
        )
    }
}

