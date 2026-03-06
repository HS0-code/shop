import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddItemForm = ({ setDatabase }) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stocked, setStocked] = useState(false);

  const handleSubmit = () => {
    if (category === "" || name === "") {
      alert("Fill in the name and category!");
      return;
    }
    const newItem = {
      category,
      name,
      price: price || 0,
      stocked,
      id: uuidv4(),
    };
    setDatabase((prev) => {
      const data = [...prev, newItem];
      localStorage.setItem("database", JSON.stringify(data));
      return data;
    });
    setCategory("");
    setName("");
    setPrice("");
    setStocked(false);
  };

  const sharedInputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
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
        style={sharedInputStyle}
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
        style={sharedInputStyle}
      />

      <p>Price</p>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={sharedInputStyle}
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
          ...sharedInputStyle,
          marginTop: "20px",
          backgroundColor: "#a8e6cf",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          padding: "10px",
        }}
      >
        Add to List
      </button>
    </div>
  );
};

export default AddItemForm;
