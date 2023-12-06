import React from "react";

import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

function BusinessList({ data }) {
    return (
        <div className={ styles.BusinessList }>
            {/* Get each data of business in array */}
            {   
                data.map((data) =>
                    <Business data={ data } />
                )
            }
        </div>
    );
};

export default BusinessList;