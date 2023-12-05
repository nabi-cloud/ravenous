import React from "react";

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
        <div>
            {/* Filters for search requests */}
            <div>
                <ul>
                    { renderSortByOptions() }
                </ul>
            </div>

            {/* Search bars */}
            <div>
                <input
                    placeholder="What are you craving for?"
                />
                <input
                    placeholder="Where?"
                />
            </div>

            {/* Submit button */}
            <div>
                <a href="#">Search</a>
            </div>            
        </div>
    );
};

export default SearchBar;