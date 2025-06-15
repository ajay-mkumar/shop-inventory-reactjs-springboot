import FormModal from "../component/FormModal";

function AddProductScreen() {
  function handleSubmit() {}
  return (
    <FormModal heading="product">
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name: </label>
        <input
          type="text"
          id="productName"
          //   value={shopName}
          //   onChange={(e) => setShopName(e.target.value)}
        />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" />
        <label htmlFor="stock">stock:</label>
        <input type="number" id="stock" />
        <button>add shop</button>
      </form>
    </FormModal>
  );
}

export default AddProductScreen;
