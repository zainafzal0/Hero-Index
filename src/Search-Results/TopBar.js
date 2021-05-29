import { useHistory } from 'react-router-dom';
import React, {useContext } from 'react';
import {Context} from '../Store';



function TopBar() {
  const history = useHistory();
  const [searchResult,setSearchResult] = useContext(Context);
  const handleClick = event => {
    history.push("/hero-index");
    
  }

  const handleChange = event => {
    setSearchResult({query: event.target.value,modalShow: false});
  };

    return (
      <div className="TopBar">
        <div className="center">
          <h2 className="titleTopBar" onClick={handleClick}>Hero Index</h2>
        </div>
        <div className="center">
          <input 
              type="text"
              id="search-input-top"
              placeholder="Search Hero Name"
              onChange={handleChange}
          />
        </div>
        <div className="extra">
          
        </div>
        
        </div>
        
              
      
    );
  }
  
  export default TopBar;
  