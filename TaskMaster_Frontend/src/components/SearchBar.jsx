function SearchBar({ search }) {
  const handleSearch = (value) => {
    const searchValue = document
      .getElementById("searchBar")
      .value.toLowerCase();
    search(searchValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Task"
        className="search-input"
        id="searchBar"
        onKeyUp={() => handleSearch()}
      />
      {/* <button className="search-button" onClick={() => handleSearch()}>
        Search
      </button> */}
    </div>
  );
}

export default SearchBar;
