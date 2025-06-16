import FormModal from "../component/FormModal";
import styles from "./AddProductScreen.module.css";

function AddProductScreen() {
  function handleSubmit() {}
  return (
    <FormModal heading="product">
      <form onSubmit={handleSubmit} className={styles.addform}>
        <div className={styles.forminputs}>
          <label htmlFor="productName">Product Name </label>
          <input
            type="text"
            id="productName"
            //   value={shopName}
            //   onChange={(e) => setShopName(e.target.value)}
          />
          <label htmlFor="price">Price</label>
          <input type="number" id="price" />
          <label htmlFor="stock">stock</label>
          <input type="number" id="stock" />
        </div>
        <button>add shop</button>
      </form>
    </FormModal>
  );
}

export default AddProductScreen;
