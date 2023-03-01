import React from "react";

function Search({search,setsearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value ={search}
        onChange={(e) => setsearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
