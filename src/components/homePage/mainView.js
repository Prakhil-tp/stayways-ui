import React, { Component } from 'react';
import NavButtons from './navButtons';
import Heading from './heading';
import SearchBar from './searchBar';
import Script from 'react-load-script';




export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  ComponentDidMount(){
    
  }
  render() {
    return (
     
        <div className="sixteen wide column masthead">
        <div id="particles-js"></div>
            <div className="layer">
                    <NavButtons />
                    <Heading />
                    <div className="ui grid searcharea center aligned ">
                        <div className="searchbar">
                        <SearchBar />
                        </div>
                    </div>
            </div> 
             
        </div>

     
    );
  }
}
