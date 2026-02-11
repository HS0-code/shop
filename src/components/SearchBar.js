const SearchBar = ({ setChecked, setSearch, search }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        <input
          type="checkbox"
          value={search}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>Only show products in stock</span>
      </div>
    </div>
  );
};

export default SearchBar;
