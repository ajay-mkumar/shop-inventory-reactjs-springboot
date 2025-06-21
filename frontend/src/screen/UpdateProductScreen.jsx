import { useSelector } from "react-redux";
import FormModal from "../component/FormModal";
import styles from "./AddProductScreen.module.css";

function UpdateProductScreen() {
  const { selectedId } = useSelector((state) => state.products);
  const loading = false;
  const product = useSelector((state) =>
    state.products.products.find((prd) => prd.id === selectedId)
  );

  function handleChange() {}

  function handleSubmit() {}
  return (
    <FormModal heading="update product">
      <form onSubmit={handleSubmit}>
        <div className={styles.forminputs}>
          <label htmlFor="productName">Product Name </label>
          <input
            type="text"
            id="productName"
            name="product"
            autoFocus
            value={product.product}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
          <label htmlFor="stock">stock</label>
          <input
            type="number"
            id="stock"
            name="stockQuantity"
            value={product.stockQuantity}
            onChange={handleChange}
          />
        </div>
        <button disabled={loading}>
          {loading ? "loading..." : "update shop"}
        </button>
      </form>
    </FormModal>
  );
}

export default UpdateProductScreen;
