import styles from "./ProductCategory.module.css";
import ShopSvg from "./ShopSvg";
const categories = ["cookies", "stationery", "pharma", "kitchen"];
function ProductCategory() {
  return (
    <div className={styles.categoryLayout}>
      <ul className={styles.categories}>
        {categories.map((category, index) => (
            
          <li key={index}><ShopSvg />{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCategory;
