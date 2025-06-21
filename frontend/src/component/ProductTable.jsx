import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/modalSlice";
import { setSelectedId } from "../redux/productSlice";

function ProductTable({ product }) {
  const dispatch = useDispatch();

  function showUpdateModal(id) {
    dispatch(setSelectedId(id));
    dispatch(showModal("updateProduct"));
  }
  return (
    <tr>
      <td>{product.product}</td>
      <td>{product.stockQuantity}</td>
      <td>{product.price}</td>
      <td>
        <button
          style={{ margin: "10px" }}
          onClick={() => showUpdateModal(product.id)}
        >
          <RiEdit2Fill />
        </button>
        <button>
          <RiDeleteBin6Line />
        </button>
      </td>
    </tr>
  );
}

export default ProductTable;
