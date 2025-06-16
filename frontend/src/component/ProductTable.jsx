function ProductTable({ product }) {
  return (
    <tr>
      <td>{product.product}</td>
      <td>{product.stockQuantity}</td>
      <td>{product.price}</td>
      <td>
        <button>📝</button>
        <button>🗑️</button>
      </td>
    </tr>
  );
}

export default ProductTable;
