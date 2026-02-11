import { useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";

const database = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

const App = () => {
  const [checked, setChecked] = useState(false);

  console.log(checked);

  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <FilterableProductTable
        data={database}
        checked={checked}
        setChecked={setChecked}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default App;
