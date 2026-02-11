const ProductTable = ({ info, checked, search }) => {
  const searchData = info.filter((item) =>
    item.name.toLowerCase().includes(search),
  );
  console.log(searchData);
  const data = checked ? searchData.filter((item) => item.stocked) : searchData;

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
        </tr>
      </thead>
      <tbody>
        {fruitData.length > 0 && (
          <tr>
            <th
              colSpan="2"
              style={{
                textAlign: "center",
                padding: 12,
                backgroundColor: "f5f7fa",
              }}
            >
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
              {rowData.price}
            </td>
          </tr>
        ))}

        {vegetableData.length > 0 && (
          <tr>
            <th
              colSpan="2"
              style={{
                textAlign: "center",
                padding: 12,
                backgroundColor: "f5f7fa",
              }}
            >
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
              {rowData.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
