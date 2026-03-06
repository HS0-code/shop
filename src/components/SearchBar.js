const SearchBar = ({ setChecked, setSearch, search }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #e0e0e0",
          fontSize: "15px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      <div
        style={{
          marginTop: "12px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.target.checked)}
          style={{ cursor: "pointer" }}
        />
        <span style={{ fontSize: "13px", color: "#666" }}>
          Show in-stock only
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
