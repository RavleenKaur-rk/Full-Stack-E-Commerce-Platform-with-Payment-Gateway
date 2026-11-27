import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const categories = [
  {
    name: "Dresses",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&auto=format&fit=crop",
  },
  {
    name: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&auto=format&fit=crop",
  },
  {
    name: "Knitwear",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop",
  },
];



const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1800&auto=format&fit=crop",
      eyebrow: "THE VELORA EDIT",
      title: "Timeless Style.",
      subtitle: "Modern Femininity.",
      description:
        "Discover thoughtfully curated pieces designed for effortless elegance.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800&auto=format&fit=crop",
      eyebrow: "NEW SEASON COLLECTION",
      title: "A New Era",
      subtitle: "of Elegance.",
      description:
        "Discover contemporary fashion designed for the modern woman.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1800&auto=format&fit=crop",
      eyebrow: "EXCLUSIVELY VELORA",
      title: "Effortlessly",
      subtitle: "Beautiful.",
      description:
        "Elevate your everyday wardrobe with timeless statement pieces.",
    },
  ];
  

function Home() {

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  return (
    <main className="home">
      
{/* AUTOMATIC HERO CAROUSEL */}
<section className="hero hero-carousel">
  {heroSlides.map((slide, index) => (
    <div
      key={index}
      className={`hero-slide ${
        currentSlide === index ? "active" : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(
          90deg,
          rgba(0,0,0,0.48),
          rgba(0,0,0,0.08)
        ), url("${slide.image}")`,
      }}
    >
      <div className="hero-content">
        <span className="eyebrow">{slide.eyebrow}</span>

        <h1>
          {slide.title}
          <br />
          {slide.subtitle}
        </h1>

        <p>{slide.description}</p>

        <Link to="/products" className="hero-button">
          EXPLORE COLLECTION
        </Link>
      </div>
    </div>
  ))}

  <div className="hero-dots">
    {heroSlides.map((_, index) => (
      <button
        key={index}
        type="button"
        className={`hero-dot ${
          currentSlide === index ? "active" : ""
        }`}
        onClick={() => setCurrentSlide(index)}
        aria-label={`Go to slide ${index + 1}`}
        aria-current={currentSlide === index ? "true" : undefined}
      />
    ))}
  </div>
</section>


      {/* SHOP BY CATEGORY */}
      <section className="section category-section">
        <div className="section-heading">
          <span className="eyebrow">
            DISCOVER VELORA
          </span>
          <h2>Shop by Category</h2>
          <p>Considered pieces for every occasion.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={`/products?category=${category.name.toLowerCase()}`}
              className="category-card"
              key={category.name}
            >
              <div className="category-image">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <h3>{category.name}</h3>
              <span>EXPLORE COLLECTION</span>
            </Link>
          ))}
        </div>
      </section>

     


{/* ABOUT VELORA */}
<section className="about-velora">
  <div className="about-velora-content">
    <span className="eyebrow">THE WORLD OF VELORA</span>

    <h2>
      Fashion That Defines You.
    </h2>

    <p className="about-intro">
      Where timeless elegance meets modern femininity.
    </p>

    <p className="about-description">
      At VELORA, we believe fashion is more than clothing —
      it's an expression of individuality, confidence, and style.
      From elegant dresses to sophisticated everyday essentials,
      we bring you thoughtfully curated collections designed
      for the modern woman.
    </p>

    <Link to="/products" className="about-velora-link">
      DISCOVER OUR COLLECTION →
    </Link>
  </div>
</section>




    </main>
  );
}

export default Home;
