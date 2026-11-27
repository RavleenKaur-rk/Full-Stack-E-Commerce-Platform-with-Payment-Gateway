
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSaved } from "../utils/shop";
import "./Navbar.css";

function Navbar() {
  const [bagCount, setBagCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    function refreshCounts() {
      const bag = getSaved("veloraBag");
      setBagCount(bag.reduce(
        (sum, item) => sum + item.quantity, 0
      ));
      setWishlistCount(getSaved("veloraWishlist").length);
    }

    refreshCounts();

    window.addEventListener("bagUpdated", refreshCounts);
    window.addEventListener("wishlistUpdated", refreshCounts);
    window.addEventListener("storage", refreshCounts);

    return () => {
      window.removeEventListener("bagUpdated", refreshCounts);
      window.removeEventListener("wishlistUpdated", refreshCounts);
      window.removeEventListener("storage", refreshCounts);
    };
  }, []);

  return (
    <>
      <div className="announcement">
        Complimentary Shipping on Orders Above ₹2999
      </div>

      <header className="navbar">
        <Link to="/" className="brand">VELORA</Link>

        <nav className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/new-arrivals">NEW ARRIVALS</Link>
          <Link to="/clothing">CLOTHING</Link>
          <Link to="/collections">COLLECTIONS</Link>
        </nav>

        <div className="nav-actions">
          <Link to="/wishlist">
            ♡ WISHLIST ({wishlistCount})
          </Link>
          <Link to="/login">ACCOUNT</Link>
          <Link to="/cart">BAG ({bagCount})</Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
