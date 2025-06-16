import { useParams } from "react-router-dom";
import styles from "./ProductScreen.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/productSlice";
import NoProductComponent from "../component/NoProductComponent";
import AddProductScreen from "./AddProductScreen";
import AddButtonComponent from "../component/AddButtonComponent";
import ProductTable from "../component/ProductTable";

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
      {currentModal === "product" && <AddProductScreen />}

      {error && <p>{error}</p>}
      {loading && <p>loading...</p>}

      {!loading && products.length !== 0 && (
        <>
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
                <ProductTable product={product} key={index} />
              ))}
            </tbody>
          </table>
          <AddButtonComponent modalName="product" />
        </>
      )}

      {products.length === 0 && <NoProductComponent shopId={id} />}
    </div>
  );
}

export default ProductScreen;
