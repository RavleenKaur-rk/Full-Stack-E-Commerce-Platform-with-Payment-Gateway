
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products, categories } from "../data/products";
import { getSaved, toggleWishlist, addToBag } from "../utils/shop";
import "./Products.css";

function Products({ mode = "all" }) {
  const [params, setParams] = useSearchParams();
  const requestedCategory = params.get("category");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  const [collection, setCollection] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const [wishlist, setWishlist] = useState(
    () => getSaved("veloraWishlist")
  );

  const [message, setMessage] = useState("");

  const clothingCategories = [
    "Summer",
    "Winter",
    "Dresses",
    "Tops",
    "Jeans",
    "Outerwear"
  ];

  const collections = [
    "All",
    "Everyday Edit",
    "Evening Edit",
    "Modern Classics",
    "Seasonal Edit"
  ];

  const pageInfo = {
    all: {
      label: "SHOP ALL",
      description: "Explore our complete collection."
    },
    new: {
      label: "NEW ARRIVALS",
      description: "Fresh styles, just added."
    },
    clothing: {
      label: "CLOTHING",
      description: "Discover your everyday essentials."
    },
    collections: {
      label: "COLLECTIONS",
      description: "Explore our curated fashion edits."
    }
  };

  const currentPage = pageInfo[mode] || pageInfo.all;

  const visibleCategories =
    mode === "clothing" ? clothingCategories : categories;

  const selectedCategory =
    visibleCategories.find(
      item =>
        item.toLowerCase() ===
        requestedCategory?.toLowerCase()
    ) || "All";

  useEffect(() => {
    setCollection("All");
    setSearch("");
    setSort("featured");
    setMessage("");
    setSelectedProduct(null);
    setSelectedSize("");
    window.scrollTo(0, 0);
  }, [mode]);

  let filtered = products.filter(product => {
    if (mode === "new" && !product.isNew) {
      return false;
    }

    if (
      mode === "clothing" &&
      !clothingCategories.includes(product.category)
    ) {
      return false;
    }

    if (
      mode === "collections" &&
      collection !== "All" &&
      product.collection !== collection
    ) {
      return false;
    }

    if (
      selectedCategory !== "All" &&
      product.category !== selectedCategory
    ) {
      return false;
    }

    const query = search.toLowerCase().trim();

    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      (product.collection || "")
        .toLowerCase()
        .includes(query)
    );
  });

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  function handleCategory(item) {
    const updatedParams = new URLSearchParams(params);

    if (item === "All") {
      updatedParams.delete("category");
    } else {
      updatedParams.set("category", item.toLowerCase());
    }

    setParams(updatedParams);
  }

  function handleWishlist(id) {
    setWishlist(toggleWishlist(id));
  }

  function handleBag(product) {
    setSelectedProduct(product);
    setSelectedSize("");
  }

  function closeModal() {
    setSelectedProduct(null);
    setSelectedSize("");
  }

  function confirmAddToBag() {
    if (!selectedProduct || !selectedSize) {
      return;
    }

    addToBag(selectedProduct, selectedSize);

    setMessage(
      `${selectedProduct.name} (Size ${selectedSize}) added to bag!`
    );

    closeModal();
  }

  return (
    <main className="products-page">
      <section className="products-container">

        {/* SMALL PAGE HEADER */}

        <div className="shop-heading">
          <div>
            <span className="shop-eyebrow">
              VELORA / {currentPage.label}
            </span>

            <p>{currentPage.description}</p>
          </div>

          <Link to="/products" className="shop-all-link">
            SHOP ALL
          </Link>
        </div>

        {/* COLLECTION FILTERS */}

        {mode === "collections" && (
          <div className="collection-filters">
            {collections.map(item => (
              <button
                key={item}
                className={
                  collection === item ? "active" : ""
                }
                onClick={() => setCollection(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {/* SEARCH */}

        <div className="product-search">
          <span>⌕</span>

          <input
            type="search"
            placeholder="Search dresses, tops, shoes, bags..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORY FILTERS */}

        <div className="category-filters">
          {["All", ...visibleCategories].map(item => (
            <button
              key={item}
              className={
                selectedCategory === item ? "selected" : ""
              }
              onClick={() => handleCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* SORTING */}

        <div className="products-toolbar">
          <span>{filtered.length} PRODUCTS</span>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="featured">
              Featured
            </option>

            <option value="low">
              Price: Low to High
            </option>

            <option value="high">
              Price: High to Low
            </option>
          </select>
        </div>

        {/* BAG MESSAGE */}

        {message && (
          <div className="bag-message" role="status">
            <span>{message}</span>

            <Link to="/cart">
              VIEW BAG
            </Link>

            <button
              onClick={() => setMessage("")}
              aria-label="Close message"
            >
              ×
            </button>
          </div>
        )}

        {/* PRODUCTS GRID */}

        <div className="products-grid">
          {filtered.map(product => (
            <article
              className="product-card"
              key={product.id}
            >
              <div className="product-image">

                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                </Link>

                {product.isNew && (
                  <span className="product-label">
                    NEW
                  </span>
                )}

                <button
                  className={`wishlist-heart ${
                    wishlist.includes(product.id)
                      ? "saved"
                      : ""
                  }`}
                  onClick={() => handleWishlist(product.id)}
                  aria-label="Toggle wishlist"
                >
                  {wishlist.includes(product.id)
                    ? "♥"
                    : "♡"}
                </button>
              </div>

              <div className="product-info">

                <p className="product-category">
                  {product.category}
                </p>

                <Link
                  className="product-name"
                  to={`/products/${product.id}`}
                >
                  {product.name}
                </Link>

                <p className="product-price">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <button
                  className="product-add"
                  onClick={() => handleBag(product)}
                >
                  ADD TO BAG
                </button>

              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}

        {filtered.length === 0 && (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try another category or search.</p>
          </div>
        )}

        {/* SIZE SELECTION MODAL */}

        {selectedProduct && (
          <div
            className="size-modal-overlay"
            onClick={closeModal}
          >
            <div
              className="size-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Select product size"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Close size selection"
              >
                ×
              </button>

              <img
                className="modal-product-image"
                src={selectedProduct.image}
                alt={selectedProduct.name}
              />

              <h2>{selectedProduct.name}</h2>

              <p>
                ₹{selectedProduct.price.toLocaleString("en-IN")}
              </p>

              <h3>SELECT YOUR SIZE</h3>

              <div className="modal-sizes">
                {(selectedProduct.sizes?.length
                  ? selectedProduct.sizes
                  : ["One Size"]
                ).map(size => (
                  <button
                    key={size}
                    className={
                      selectedSize === size ? "active" : ""
                    }
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button
                className="modal-add"
                disabled={!selectedSize}
                onClick={confirmAddToBag}
              >
                ADD TO BAG
              </button>

              <Link
                to={`/products/${selectedProduct.id}`}
                className="modal-details"
                onClick={closeModal}
              >
                VIEW FULL PRODUCT DETAILS
              </Link>
            </div>
          </div>
        )}

      </section>
    </main>
  );
}

export default Products;
