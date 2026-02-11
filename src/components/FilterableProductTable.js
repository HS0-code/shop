import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({
  data,
  checked,
  setChecked,
  search,
  setSearch,
}) => {
  return (
    <div
      style={{
        width: "400px",
        height: "600px",
        border: "1px solid grey",
        padding: "20px",
      }}
    >
      <SearchBar
        setChecked={setChecked}
        setSearch={setSearch}
        search={search}
      />
      <ProductTable info={data} checked={checked} search={search} />
    </div>
  );
};

export default FilterableProductTable;
