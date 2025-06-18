import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";

function ProductTable({ product }) {
  return (
    <tr>
      <td>{product.product}</td>
      <td>{product.stockQuantity}</td>
      <td>{product.price}</td>
      <td >
        <button style={{margin: "10px"}}><RiEdit2Fill /></button>
        <button><RiDeleteBin6Line /></button>
      </td>
    </tr>
  );
}

export default ProductTable;
