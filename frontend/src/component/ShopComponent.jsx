import { Link } from "react-router-dom";

function ShopComponent({ shop }) {
  return (
    <tr>
      <td>{shop.shop}</td>
      <td>{shop.totalProducts}</td>
      <td>
        <Link to={`/shops/${shop.id}/products`}>view products</Link>
      </td>
    </tr>
  );
}

export default ShopComponent;
