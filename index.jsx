import { Component, useState } from "react";

import DestinationItem from "../DestinationItem";

import "./index.css";

const DestinationSearch = (props) => {
  // staep:1  initialize the state to hold the search input ki value
  // state = {
  //   searchInput: "", // hold current value
  // };
  const [firstValue, setFirstValue] = useState('');

  // step:2 define a event handler and update the state
  const onChangeSearchInput = (event) => {
    // this.setState({ searchInput: event.target.value });
    setFirstValue(event.target.value);
  };

  // const { searchInput } = this.state; // step:3 destructure search input from state
  const { destinationsList } = props; //step:4 retrive the list of data from parent component

  //step:5 Filter destinations based on the search
  const searchResults = destinationsList.filter((eachDestination) =>
    eachDestination.name.toLowerCase().includes(firstValue.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="destinations-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={firstValue}
            onChange={onChangeSearchInput}
          />
        </div>
        <ul className="destinations-list">
          {searchResults.map((eachDestination) => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationSearch;
