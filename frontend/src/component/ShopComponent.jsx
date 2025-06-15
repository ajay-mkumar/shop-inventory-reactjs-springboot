import { Link } from "react-router-dom";

function ShopComponent({ shopName, totalProducts }) {
  return (
    <tr>
      <td>{shopName}</td>
      <td>{totalProducts}</td>
      <td>
        <Link to=''>view products</Link>
      </td>
    </tr>
  );
}

export default ShopComponent;
