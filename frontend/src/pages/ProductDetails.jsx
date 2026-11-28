
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { getSaved, toggleWishlist, addToBag } from "../utils/shop";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(item => item.id === id);

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(
    () => getSaved("veloraWishlist")
  );
  const [message, setMessage] = useState("");

  if (!product) {
    return (
      <main className="details-not-found">
        <h1>Product not found</h1>
        <Link to="/products">BACK TO COLLECTION</Link>
      </main>
    );
  }

  function handleAdd() {
    if (!size) {
      setMessage("Please select a size first.");
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addToBag(product, size);
    }

    setMessage("Added to your shopping bag!");
  }

  function handleWishlist() {
    setWishlist(toggleWishlist(product.id));
  }

  return (
    <main className="details-page">
      <div className="details-breadcrumb">
        <Link to="/">HOME</Link> /
        <Link to="/products"> SHOP</Link> /
        {product.category.toUpperCase()}
      </div>

      <div className="details-layout">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <span className="details-eyebrow">
            THE VELORA COLLECTION
          </span>

          <h1>{product.name}</h1>

          <p className="details-price">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="details-description">
            {product.description}
          </p>

          <h3>SELECT SIZE</h3>

          <div className="size-options">
            {product.sizes.map(item => (
              <button
                key={item}
                className={size === item ? "active" : ""}
                onClick={() => setSize(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <h3>QUANTITY</h3>

          <div className="quantity-selector">
            <button
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              −
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>
              +
            </button>
          </div>

          <button className="details-add" onClick={handleAdd}>
            ADD TO BAG
          </button>

          <button
            className="details-wishlist"
            onClick={handleWishlist}
          >
            {wishlist.includes(product.id)
              ? "♥ SAVED TO WISHLIST"
              : "♡ ADD TO WISHLIST"}
          </button>

          {message && <p role="status">{message}</p>}

          <div className="details-benefits">
            <p>✓ Carefully curated fashion</p>
            <p>✓ Contemporary everyday elegance</p>
            <p>✓ Explore more from VELORA</p>
          </div>

          <Link to="/cart" className="details-view-bag">
            VIEW SHOPPING BAG →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;
