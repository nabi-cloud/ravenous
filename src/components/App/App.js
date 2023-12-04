import React from "react";
import styles from "./App.module.css"
import Business from "../Business/Business";
import { businessData } from "./businessData";

function App() {
  return (
    <div className={ styles.App }>
      <h1>ravenous</h1>
      <div className={ styles.Business }>
        {
          businessData.map((data) =>
            <Business data={ data } />
          )
        }
      </div>
    </div>
  );
}

export default App;