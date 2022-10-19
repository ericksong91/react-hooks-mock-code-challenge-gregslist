import React, { useState } from "react";

function Search({ submitSearch }) {
  const [searchInput, setSearchInput] = useState("")

  function handleSearchField(e) {
    setSearchInput(e.target.value);
    console.log(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={(e) => {
      e.preventDefault();
      setSearchInput("");
      submitSearch(searchInput);
    }}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => handleSearchField(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
