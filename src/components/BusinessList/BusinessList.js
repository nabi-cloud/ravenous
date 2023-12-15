import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
    return (
        <div className={ styles.BusinessList }>
            {/* Get each data of business in array */}
            {
                businesses.length === 0 ?
                <h2 className={ styles.initalText }>You may need to visit this <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="_blank" rel="noopener noreferrer">link</a> first and request temporary access in order to display search results</h2> 
                : businesses.map((business) => {
                    return <Business business={business} key={business.name} />;
                })
            }
        </div>
    );
};

export default BusinessList;