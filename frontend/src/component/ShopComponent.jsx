import { Link } from "react-router-dom";
import styles from "./ShopHomeLayout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";
import { deleteShop, fetchShopById } from "../redux/shopSlice";
import { showModal } from "../redux/modalSlice";

function ShopComponent({ shop }) {
  const { loading, error } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  function handleDelete(shopId) {
    if (window.confirm("Are you sure you want to delete this shop?")) {
      dispatch(deleteShop(shopId));
    }
  }

  function handleUpdate(shopId) {
    dispatch(fetchShopById(shopId));
    dispatch(showModal("update"));
  }

  return (
    <tr>
      <td>{shop.shop}</td>
      <td>{shop.totalProducts}</td>
      <td className={styles.productLink}>
        <Link to={`/shops/${shop.id}/products`}>view products</Link>
      </td>
      <td>
        <button style={{ margin: "10px" }} onClick={() => handleUpdate(shop.id)}>
          <RiEdit2Fill />
        </button>
        <button disabled={loading} onClick={() => handleDelete(shop.id)}>
          <RiDeleteBin6Line />
        </button>
      </td>
      {error && <p>{error}</p>}
    </tr>
  );
}

export default ShopComponent;
