import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { Context } from "../Store";

function HeroCard({ charData, modalIndex }) {
  const [searchResult, setSearchResult] = useContext(Context);
  const handleClose = () => {
    let hold = searchResult.query;
    setSearchResult({ query: hold, modalShow: false,modalDataIndex:modalIndex });
  };

  function formatArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
      if (!array[i].includes(",")) {
        array[i] += ", ";
      }
    }

    return array;
  }
  
  return (
      
    <div>
      <Modal  show={searchResult.modalShow} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            {charData.results[modalIndex].name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            <img
              className="modal-image"
              src={charData.results[modalIndex].image.url}
            />
            <h4>Biography</h4>
            <p>
              <strong>Full Name: </strong>{" "}
              {charData.results[modalIndex].biography["full-name"]} <br />
              <strong>Alter Egos: </strong>{" "}
              {charData.results[modalIndex].biography["alter-egos"]} <br />
              <strong>Aliases: </strong>{" "}
              {formatArray(charData.results[modalIndex].biography["aliases"])}{" "}
              <br />
              <strong>Place of Birth: </strong>{" "}
              {charData.results[modalIndex].biography["place-of-birth"]} <br />
              <strong>First Apperance: </strong>{" "}
              {charData.results[modalIndex].biography["first-appearance"]}{" "}
              <br />
              <strong>Publisher: </strong>{" "}
              {charData.results[modalIndex].biography["publisher"]} <br />
            </p>
            <h4>Apperance</h4>
            <p>
              <strong>Gender: </strong>{" "}
              {charData.results[modalIndex].appearance["gender"]} <br />
              <strong>Race: </strong>{" "}
              {charData.results[modalIndex].appearance["race"]} <br />
              <strong>Height: </strong>{" "}
              {formatArray(charData.results[modalIndex].appearance["height"])}{" "}
              <br />
              <strong>Weight: </strong>{" "}
              {formatArray(charData.results[modalIndex].appearance["weight"])}{" "}
              <br />
              <strong>Eye Color: </strong>{" "}
              {charData.results[modalIndex].appearance["eye-color"]} <br />
              <strong>Hair Color: </strong>{" "}
              {charData.results[modalIndex].appearance["hair-color"]} <br />
            </p>
            <h4>Power Stats</h4>
            <p>
              <strong>Intelligence: </strong>{" "}
              {charData.results[modalIndex].powerstats["intelligence"]} <br />
              <strong>Strength: </strong>{" "}
              {charData.results[modalIndex].powerstats["strength"]} <br />
              <strong>Speed: </strong>{" "}
              {charData.results[modalIndex].powerstats["speed"]} <br />
              <strong>Durability: </strong>{" "}
              {charData.results[modalIndex].powerstats["durability"]} <br />
              <strong>Power: </strong>{" "}
              {charData.results[modalIndex].powerstats["power"]} <br />
              <strong>Combat: </strong>{" "}
              {charData.results[modalIndex].powerstats["combat"]} <br />
            </p>

            <h4>Work</h4>
            <p>
              <strong>Occupation: </strong>{" "}
              {charData.results[modalIndex].work["occupation"]} <br />
              <strong>Base: </strong>{" "}
              {charData.results[modalIndex].work["base"]} <br />
            </p>

            <h4>Connections</h4>
            <p id="last-paragraph">
              <strong>Group Affiliation: </strong>{" "}
              {charData.results[modalIndex].connections["group-affiliation"]}{" "}
              <br />
              <strong>Relatives: </strong>{" "}
              {charData.results[modalIndex].connections["relatives"]} <br />
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default HeroCard;
