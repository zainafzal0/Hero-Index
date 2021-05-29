import {Context} from '../Store';
import React, { useState,useContext } from 'react';
import TopBar from './TopBar'
import ResultGrid from './ResultGrid'
function SearchResults() {

  const [searchResult,setSearchResult] = useContext(Context);
    return (
      <div className="search-result-container">
        <TopBar/>
        <ResultGrid/>
      </div>
    );
  }
  
  export default SearchResults;
  