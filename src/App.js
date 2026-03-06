import { useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import AddItemForm from "./components/AddForm";

const App = () => {
  const dataFromLocalStorage =
    JSON.parse(localStorage.getItem("database")) || [];

  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const [database, setDatabase] = useState(dataFromLocalStorage);

  const deleteItem = (idToDelete) => {
    setDatabase((prev) => {
      const updated = prev.filter((item) => item.id !== idToDelete);

      if (updated.length === 0) {
        localStorage.removeItem("database");
      } else {
        localStorage.setItem("database", JSON.stringify(updated));
      }

      return updated;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        height: "100vh",
      }}
    >
      <AddItemForm setDatabase={setDatabase} />

      <FilterableProductTable
        data={database}
        checked={checked}
        setChecked={setChecked}
        search={search}
        setSearch={setSearch}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;
