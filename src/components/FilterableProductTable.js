import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({
  data,
  checked,
  setChecked,
  search,
  setSearch,
  deleteItem,
}) => {
  const myBudget = 150;

  let currentTotal = 0;
  data.forEach((item) => {
    currentTotal = currentTotal + Number(item.price);
  });

  const remaining = myBudget - currentTotal;

  return (
    <div
      style={{
        padding: "20px",
        boxShadow: "0 4px 15px grey",
        borderRadius: "15px",
        width: "400px",
        backgroundColor: "white",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Grocery List</h2>

      <SearchBar
        setChecked={setChecked}
        setSearch={setSearch}
        search={search}
      />

      <ProductTable
        info={data}
        checked={checked}
        search={search}
        deleteItem={deleteItem}
      />

      <div
        style={{
          marginTop: "20px",
          padding: "15px",

          backgroundColor: remaining < 0 ? "#ffe6e6" : "#e6ffed",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            Budget: <span style={{ fontWeight: "bold" }}>${myBudget}</span>
          </span>
          <span>
            Spent: <span style={{ fontWeight: "bold" }}>${currentTotal}</span>
          </span>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "10px",
            paddingTop: "10px",
            borderTop: "1px solid #ddd",
          }}
        >
          {remaining >= 0 ? (
            <span style={{ fontWeight: "bold" }}>
              You have ${remaining} left
            </span>
          ) : (
            <span style={{ fontWeight: "bold", color: "red" }}>
              Over budget by ${0 - remaining}!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterableProductTable;
