import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
    return (
        <div className={ styles.BusinessList }>
            {/* Get each data of business in array */}
            {
                businesses.length === 0 ?
                <h2 className={ styles.initalText }>Try searching for a restaurant near you</h2> 
                : businesses.map((business) => {
                    return <Business business={business} key={business.name} />;
                })
            }
        </div>
    );
};

export default BusinessList;