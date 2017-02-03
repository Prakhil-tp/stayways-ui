import React from 'react';

const SearchBar = (props) => {
    return(
        <div className="ui huge form">
             <div className="two fields">
                    <div className="fourteen wide field">
                        <input type="text" placeholder="Where do you want to live ?" />
                    </div>
                    <div className="two wide field">
                        <button className="huge ui blue button">Search</button>
                    </div>
              </div>
        </div>
    );
}
export default SearchBar;