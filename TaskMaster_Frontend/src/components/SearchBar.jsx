function SearchBar({ search }) {
  const handleSearch = () => {
    const searchValue = document
      .getElementById("searchBar")
      .value.trim()
      .toLowerCase();
    search(searchValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search Task"
        className="search-input"
        id="searchBar"
        onKeyUp={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
