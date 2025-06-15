import { useNavigate } from "react-router-dom"

function NoProductComponent( {shopId}) {
    const navigate = useNavigate();

    return (
        <div>
            <p>No products added yet in the shop</p>
        <button onClick={() => navigate(`/shops/${shopId}/products/add`)}>Add Product</button>
        </div>
    )
}

export default NoProductComponent
