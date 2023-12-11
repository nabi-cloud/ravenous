import React, { useState } from "react";

import styles from "./App.module.css"

import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";
import Footer from "../Footer/Footer";

import Yelp from "../../utils/yelpSearch";

const App = () => {
  const [ businesses, setBusinesses ] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  };

  return (
    <div className={ styles.App }>
      <h1>ravenous</h1>
      <div>
        <SearchBar
          searchYelp={ searchYelp }
        />
        <BusinessList 
          businesses={ businesses }
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;