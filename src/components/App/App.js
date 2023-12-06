import React from "react";

import styles from "./App.module.css"

import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";
import Footer from "../Footer/Footer";

import { businessData } from "../App/businessData";

function App() {
  return (
    <div className={ styles.App }>
      <h1>ravenous</h1>
      <div>
        <SearchBar />
        <BusinessList 
          data = { businessData }
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;