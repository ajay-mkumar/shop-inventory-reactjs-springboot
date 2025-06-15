import { useParams } from "react-router-dom";
import styles from "./ProductScreen.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import NoProductComponent from "../component/NoProductComponent";
import AddProductScreen from "./AddProductScreen";
import AddButtonComponent from "../component/AddButtonComponent";

// const products = [
//   {
//     productName: "choclate",
//     stock: 25,
//     price: 100,
//     sold: 10,
//     shop: "aj shop",
//   },
//   {
//     productName: "rum",
//     stock: 20,
//     price: 1000,
//     sold: 24,
//     shop: "aj liquor",
//   },
//   {
//     productName: "surf",
//     stock: 10,
//     price: 70,
//     sold: 14,
//     shop: "sha shop",
//   },
// ];
function ProductScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);
  const { currentModal } = useSelector((state) => state.modalToggle);

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  return (
    <div className={styles.productContainer}>
      <AddButtonComponent modalName="product" />
      {currentModal === "product" && <AddProductScreen />}
      {error && <p>{error}</p>}
      {loading && <p>loading...</p>}
      {!loading && products.length !== 0 && (
        <table className={styles.productList}>
          <thead className={styles.productHeader}>
            <tr>
              <th>Product</th>
              <th>Stock</th>
              <th>Price</th>
              <th>functions</th>
            </tr>
          </thead>
          <tbody className={styles.productBody}>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.product}</td>
                <td>{product.stockQuantity}</td>
                <td>{product.price}</td>
                <td>
                  <button>📝</button>
                  <button>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {products.length === 0 && <NoProductComponent shopId={id} />}
    </div>
  );
}

export default ProductScreen;
