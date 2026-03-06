import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddItemForm = ({ setDatabase }) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stocked, setStocked] = useState(false);

  const handleSubmit = () => {
    if (category === "" || name === "") {
      alert("Fill in the name and category!");
      return;
    }
    const newItem = { category, name, price, stocked, id: uuidv4() };
    setDatabase((prev) => {
      const data = [...prev, newItem];
      localStorage.setItem("database", JSON.stringify(data));
      return data;
    });
    setCategory("");
    setName("");
    setPrice(0);
    setStocked(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #eee",
        borderRadius: "15px",
        width: "250px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2d5a27" }}>New Item</h2>

      <p>Category</p>
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        style={{ width: "100%" }}
      >
        <option value="">Select Category</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      <p>Item</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        style={{ width: "90%" }}
      />

      <p>Price</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ width: "90%" }}
      />

      <div style={{ marginTop: "15px" }}>
        <input
          type="checkbox"
          onChange={(e) => setStocked(e.target.checked)}
          checked={stocked}
        />
        <span> In Stock</span>
      </div>

      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "10px",
          backgroundColor: "#a8e6cf",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add to List
      </button>
    </div>
  );
};

export default AddItemForm;
