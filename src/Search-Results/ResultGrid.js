import { Context } from "../Store";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import HeroCard from "./HeroCard";
import HeroModal from "./HeroModal";
function ResultGrid() {
  const [searchResult, setSearchResult] = useContext(Context);
  const [searchData, setSearchData] = useState({ results: false });
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(8);

  const urlForId = `https://superheroapi.com/api.php/1218812258583688/search/${searchResult.query}`;
  
  useEffect(() => {
      setLastIndex(8)
      setFirstIndex(0)
    axios.get(urlForId).then((Response) => {
      setSearchData(Response.data);
    });
  }, [urlForId]);


  const handleNextClick = () => {
    if(!searchData.results){
      return;
    }
    if (lastIndex>=searchData.results.length) {
      return;
    }
    else{
        console.log("hi")
        if (lastIndex + 8 < searchData.results.length) {
            setFirstIndex(lastIndex);
            setLastIndex(lastIndex + 8);
          } else {
            setFirstIndex(lastIndex);
            setLastIndex(searchData.results.length);
          }
    }
    
  };
  const handlePreviousClick = () => {
    if(!searchData.results){
      return;
    }
    if (firstIndex === 0 && lastIndex === 8) {
      return;
    }
    if (firstIndex - 8 > 0) {
      setLastIndex(firstIndex);
      setFirstIndex(firstIndex - 8);
    } else {
      setLastIndex(firstIndex);
      setFirstIndex(0);
    }
  };


  return (
    <div className="grid">
      
      <div className="startContainer">
        <h3>Search Results</h3>
        <div className="buttonContainer">
          <button type="button" class="btn btn-secondary" onClick={handleNextClick}>
            Next
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={handlePreviousClick}
          >
            Back
          </button>
          {searchData.results && 
          <p id="last-paragraph">{searchData.results.length} Results Found</p>
          }
          
        </div>
      </div>
      {!searchData.results && searchResult.query==="" &&
        <h3><br/><br/><br/>No Matches Found<br/><br/><br/><br/></h3>
      }
      <div class="container">
        <div class="row gy-5">
          {searchData.results &&
            searchData.results.map((characterData, i) => {
              if (i >= firstIndex && i < lastIndex) {
                return <HeroCard charData={characterData} index={i}/>;
              }
            })}
        </div>

        {searchData.results && searchData.results[searchResult.modalDataIndex]&&
        <HeroModal charData={searchData} modalIndex={searchResult.modalDataIndex}/>        
        }
        
      </div>
    </div>
  );
}

export default ResultGrid;
