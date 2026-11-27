
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e) {
    e.preventDefault();

    // Connect a newsletter API here later.
    alert("Newsletter signup coming soon!");
    setEmail("");
  }

  return (
    <footer className="velora-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            VELORA
          </Link>
          <p>
            A considered wardrobe for the modern woman.
            Discover the art of effortless elegance.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest ↗
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>
          <Link to="/products">Shop All</Link>
          <Link to="/products?category=dresses">Dresses</Link>
          <Link to="/products?category=outerwear">Outerwear</Link>
          <Link to="/products?category=knitwear">Knitwear</Link>
        </div>

        <div className="footer-column">
          <h4>CUSTOMER CARE</h4>
          <span>Contact Us</span>
          <span>Shipping Information</span>
          <span>Returns & Exchanges</span>
          <span>Size Guide</span>
        </div>

        <div className="footer-column">
          <h4>ABOUT VELORA</h4>
          <span>Our Story</span>
          <span>Our Philosophy</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>

        <div className="footer-newsletter">
          <h4>THE VELORA LETTER</h4>
          <p>
            A little inspiration, delivered to your inbox.
          </p>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
          <small>
            Style notes, new collections and exclusive edits.
          </small>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 VELORA. All rights reserved.</p>
        <p>Modern femininity. Timeless elegance.</p>
      </div>
    </footer>
  );
}
