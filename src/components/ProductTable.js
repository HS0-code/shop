const ProductTable = ({ info, checked, search, deleteItem }) => {
  const searchData = info.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const data = checked ? searchData.filter((item) => item.stocked) : searchData;

  if (data.length === 0) {
    return (
      <h3 style={{ marginTop: "20px", textAlign: "center" }}>
        No such product has been added.
      </h3>
    );
  }

  const fruitData = data.filter((item) => item.category === "Fruits");
  const vegetableData = data.filter((item) => item.category === "Vegetables");

  return (
    <table
      style={{
        marginTop: "20px",
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr style={{ background: "#f5f7fa" }}>
          <th style={{ padding: 12, textAlign: "left" }}>Name</th>
          <th style={{ padding: 12, textAlign: "right" }}>Price</th>
          <th style={{ padding: 12 }}></th>
        </tr>
      </thead>

      <tbody>
        {fruitData.length > 0 && (
          <tr>
            <th colSpan="3" style={{ textAlign: "center", padding: 12 }}>
              Fruits
            </th>
          </tr>
        )}

        {fruitData.map((rowData, index) => (
          <tr key={index}>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                color: rowData.stocked ? "black" : "red",
              }}
            >
              {rowData.name}
            </td>

            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "right",
              }}
            >
              {rowData.price.includes("$")
                ? rowData.price
                : `$${rowData.price}`}
            </td>

            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "right",
              }}
            >
              <button
                onClick={() => deleteItem(rowData.id)}
                style={{
                  background: "#fef2f2",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                  padding: "5px 8px",
                  borderRadius: "4px",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}

        {vegetableData.length > 0 && (
          <tr>
            <th colSpan="3" style={{ textAlign: "center", padding: 12 }}>
              Vegetables
            </th>
          </tr>
        )}

        {vegetableData.map((rowData, index) => (
          <tr key={index}>
            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                color: rowData.stocked ? "black" : "red",
              }}
            >
              {rowData.name}
            </td>

            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "right",
              }}
            >
              {rowData.price.includes("$")
                ? rowData.price
                : `$${rowData.price}`}
            </td>

            <td
              style={{
                padding: 12,
                borderTop: "1px solid #eee",
                textAlign: "right",
              }}
            >
              <button
                onClick={() => deleteItem(rowData.id)}
                style={{
                  background: "#fef2f2",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                  padding: "5px 8px",
                  borderRadius: "4px",
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
