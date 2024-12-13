import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <div className="product-image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price.toFixed(2)}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      <br />
      <button className="home-button" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default ProductDetails;
