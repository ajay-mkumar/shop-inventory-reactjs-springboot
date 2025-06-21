import { useState } from "react";
import FormModal from "../component/FormModal";
import styles from "./AddProductScreen.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { hideModal } from "../redux/modalSlice";

function AddProductScreen() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    shopId: id,
    product: "",
    price: 0,
    stockQuantity: 0,
  });
  const { loading, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? +value : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.product.trim()) {
      alert("Product name is required!");
      return;
    }

    if (formData.price < 0 || formData.stockQuantity < 0) {
      alert("Price and stock must be non-negative.");
      return;
    }

    const result = await dispatch(addProduct(formData));

    if (addProduct.fulfilled.match(result)) {
      dispatch(hideModal());
      setFormData({
        shopId: id,
        product: "",
        price: 0,
        stockQuantity: 0,
      });
      navigate(`/shops/${id}/products`);
    } else {
      alert(error);
    }
  }

  return (
    <FormModal heading="add product">
      <form onSubmit={handleSubmit}>
        <div className={styles.forminputs}>
          <label htmlFor="productName">Product Name </label>
          <input
            type="text"
            id="productName"
            name="product"
            autoFocus
            value={formData.product}
            onChange={handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <label htmlFor="stock">stock</label>
          <input
            type="number"
            id="stock"
            name="stockQuantity"
            value={formData.stockQuantity}
            onChange={handleChange}
          />
        </div>
        <button disabled={loading}>
          {loading ? "loading..." : "add shop"}
        </button>
      </form>
    </FormModal>
  );
}

export default AddProductScreen;
