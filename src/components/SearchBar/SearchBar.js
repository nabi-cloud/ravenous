import React from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

function SearchBar() {
    // Adding key to each filter options
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
          let sortByOptionValue = sortByOptions[sortByOption];
          return <li key={sortByOptionValue}>{sortByOption}</li>;
        });
    };

    return (
        <div className={ styles.SearchBar }>
            {/* Filters for search requests */}
            <div className={ styles.SearchBarSortOptions }>
                <ul>
                    { renderSortByOptions() }
                </ul>
            </div>

            {/* Search bars */}
            <div className={ styles.SearchBarFields }>
                <input
                    placeholder="What are you craving for?"
                />
                <input
                    placeholder="Where?"
                />
            </div>

            {/* Submit button */}
            <div className={ styles.SearchBarSubmit }>
                <a href="../index.js">Search</a>
            </div>            
        </div>
    );
};

export default SearchBar;