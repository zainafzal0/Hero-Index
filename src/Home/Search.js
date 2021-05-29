import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {Context} from '../Store';

function Search() {
    const [searchResult,setSearchResult] = useContext(Context);
    const history = useHistory();
    const [query,setQuery] = useState('');
    

    const handleChange = event => {
        setQuery(event.target.value);
    };

   
    const handleClick = event => {
        setSearchResult({query: query,modalShow: false});
        history.push("/hero-index/search-results");
        
    };

    const handleKeyPress = event => {
      if(event.charCode === 13){
        setSearchResult({query: query,modalShow: false});
        history.push("/hero-index/search-results");
      }
      
      
  };




    return (
        
      <div className="search-container">
          
          <label className="search-label" htmlFor="search-input">
          
              <input 
                type="text"
                value={query}
                onChange={handleChange}
                id="search-input"
                placeholder="Search Hero Name"
                onKeyPress={handleKeyPress}
              />
              <svg id="searchIcon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" onClick={handleClick}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
             
          </label>

          
      </div>
    );
  }
  
  export default Search;