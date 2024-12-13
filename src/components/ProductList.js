import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts(data); // Initialize sorted products with original data
      });
  }, []);

  const handleSortChange = (order) => {
    setSortOrder(order);
    if (order === "low-to-high") {
      setSortedProducts([...products].sort((a, b) => a.price - b.price));
    } else if (order === "high-to-low") {
      setSortedProducts([...products].sort((a, b) => b.price - a.price));
    } else {
      setSortedProducts(products); // Reset to original order
    }
  };

  return (
    <div>
      {/* Sort Dropdown */}
      <div className="filter-container">
        <label htmlFor="sort">Sort by Price: </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Select</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      {/* Product List */}
      <div className="product-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product">
            <Link to={`/products/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
            </Link>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
