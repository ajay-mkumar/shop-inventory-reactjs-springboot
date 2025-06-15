import styles from "./ProductScreen.module.css";

const products = [
  {
    productName: "choclate",
    stock: 25,
    price: 100,
    sold: 10,
    shop: "aj shop",
  },
  {
    productName: "rum",
    stock: 20,
    price: 1000,
    sold: 24,
    shop: "aj liquor",
  },
  {
    productName: "surf",
    stock: 10,
    price: 70,
    sold: 14,
    shop: "sha shop",
  },
];
function ProductScreen() {
  return (
    <div className={styles.productContainer}>
      <table className={styles.productList}>
        <thead className={styles.productHeader}>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Shop</th>
          </tr>
        </thead>
        <tbody className={styles.productBody}>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td>{product.sold}</td>
              <td>{product.shop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductScreen;
