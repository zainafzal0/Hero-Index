import React, {useContext } from "react";
import { Card } from "react-bootstrap";
import {Context} from '../Store';

function HeroCard({charData,index}) {
  const [searchResult,setSearchResult] = useContext(Context);
  function showModal(index) {
    let hold = searchResult.query
    setSearchResult({query:hold,modalShow:true,modalDataIndex:index})
  }
    return (

        
      <div class="col-sm">
      <Card
        className="react-card"
        style={{ width: "13rem" }}
        key={index}
        onClick={() => {
          showModal(index);
        }}
      >
        <Card.Img className="card-image" variant="top" src={charData.image.url} />
        <Card.Body className="card-body">
          <Card.Title>{charData.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
        
    );
  }
  
  export default HeroCard;
  