import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand paw-brand" to="/">
          <img src="/logo.png" alt="Pawfect Spa" className="paw-logo" />
          <span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pawNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="pawNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item ms-lg-3"><Link className="btn paw-btn paw-btn-primary" to="/booking">Book Now</Link></li>
            <li className="nav-item ms-lg-2"><Link className="paw-cart-link" to="/cart">Cart <i className="bi bi-bag" /></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="paw-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5"><Link className="paw-brand footer-brand" to="/"><img src="/logo.png" alt="" className="paw-logo" /><span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span></Link><p className="footer-description">Thoughtful grooming, soothing baths, and a little luxury for your very best friend.</p></div>
          <div className="col-6 col-lg-2"><h6>Explore</h6><Link to="/about">Our Story</Link><Link to="/services">Our Services</Link><Link to="/products">Pet Products</Link></div>
          <div className="col-6 col-lg-2"><h6>Need help?</h6><Link to="/booking">Book an Appointment</Link><Link to="/contact">Contact Us</Link><Link to="/cart">Your Cart</Link></div>
          <div className="col-lg-3"><h6>Our promise</h6><p className="footer-description">Gentle handling. Clean spaces. Happy tails.</p><div className="paw-socials"><a href="https://instagram.com" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://facebook.com" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Pawfect Spa. All rights reserved.</span><span>Made with care for every paw.</span></div>
      </div>
    </footer>
  );
}

const products = [
  { id: 1, name: "Gentle Pet Shampoo", category: "Bath essentials", price: 449, img: "/images/product-shampoo.jpg", label: "GROOMING ESSENTIAL" },
  { id: 2, name: "Soft Grooming Brush", category: "Coat care", price: 349, img: "/images/product-brush.jpg", label: "GROOMING ESSENTIAL" },
  { id: 3, name: "Paw Care Balm", category: "Paw care", price: 299, img: "/images/product-balm.jpg", label: "GROOMING ESSENTIAL" },
  { id: 4, name: "Cozy Pet Towel", category: "Bath essentials", price: 599, img: "/images/product-towel.jpg", label: "GROOMING ESSENTIAL" },
  { id: 5, name: "Fresh Breath Spray", category: "Daily care", price: 279, img: "/images/product-spray.jpg", label: "DAILY FAVOURITE" },
  { id: 6, name: "Gentle Pet Comb", category: "Coat care", price: 399, img: "/images/product-comb.jpg", label: "GROOMING ESSENTIAL" },
];

export default function Products() {
  const [added, setAdded] = React.useState("");

  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("pawCart") || "[]");
    const existing = cart.find((item) => item.id === product.id);

    const updated = existing
      ? cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
      : [...cart, { ...product, qty: 1 }];

    localStorage.setItem("pawCart", JSON.stringify(updated));
    setAdded(`${product.name} added to cart`);
    window.setTimeout(() => setAdded(""), 2000);
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="paw-page-hero page-hero-sand">
          <div className="container">
            <span className="paw-eyebrow">THE PAWFECT LITTLE SHOP</span>
            <h1>Thoughtful grooming favourites<br /><em>for your pet's care routine.</em></h1>
            <p>Little everyday essentials for softer coats, happier paws, and extra cuddles.</p>
            <div className="paw-breadcrumb"><Link to="/">Home</Link><i className="bi bi-chevron-right" /><span>Products</span></div>
          </div>
        </section>

        <section className="paw-section">
          <div className="container">
            <div className="paw-shop-heading">
              <div><span className="paw-eyebrow">OUR HAPPY SHELF</span><h2>Good things for <em>good paws.</em></h2></div>
              <Link to="/cart" className="btn paw-btn paw-btn-outline"><i className="bi bi-bag" /> View Cart</Link>
            </div>

            {added && <div className="paw-toast" role="status"><i className="bi bi-check-circle-fill" /> {added}</div>}

            <div className="row g-4 mt-2">
              {products.map((product, index) => (
                <div className="col-sm-6 col-lg-4" key={product.id} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
                  <article className="paw-product-card">
                    <div className={`paw-product-image product-tone-${(index % 3) + 1}`}>
                      <img src={product.img} alt={product.name} />
                      <span className="paw-product-label">{product.label}</span>
                    </div>
                    <div className="paw-product-info">
                      <span className="paw-product-category">{product.category}</span>
                      <h3>{product.name}</h3>
                      <div className="paw-product-bottom">
                        <strong>₹{product.price}</strong>
                        <button className="paw-add-btn" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to cart`}>
                          <i className="bi bi-plus-lg" />
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
            <p className="paw-pricing-note mt-4"><i className="bi bi-info-circle" /> Product images can be replaced with your own images in the public/images folder.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}