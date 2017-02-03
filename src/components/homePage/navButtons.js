import React from 'react';
import logo from '../../assets/logo.png';

const NavButtons = (props) =>{
    return(
        <div className="ui grid container ">
            <div className="four wide column ">
               <div className="logo"><img src={logo} alt="Stayways" height="40px" /></div>
            </div>
            <div className="twelve wide column nav">
               <div className="nav-buttons"><button id="sign" className=" ui  green button ">Sign Up</button></div>
               <div className="nav-buttons"><button id="log" className="ui inverted button">Log In</button></div>
               <div className="nav-buttons"><button className="ui inverted basic button">Host accommodation</button></div>
            </div>
       </div>
    );
}
export default NavButtons;