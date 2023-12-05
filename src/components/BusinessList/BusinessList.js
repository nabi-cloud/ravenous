import React from "react";
import { businessData } from "./businessData";
import Business from "../Business/Business";

function BusinessList() {
    return (
        <div>
            {/* Get each data of business in array */}
            {   
                businessData.map((data) =>
                    <Business data={ data } />
                )
            }
        </div>
    );
};

export default BusinessList;