import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand paw-brand" to="/"><img src="/logo.png" alt="Pawfect Spa" className="paw-logo" /><span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pawNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="pawNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
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

export default function Cart() {
  const [items, setItems] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("pawCart") || "[]");
    } catch {
      return [];
    }
  });
  const [checkoutDone, setCheckoutDone] = React.useState(false);

  function saveCart(next) {
    setItems(next);
    localStorage.setItem("pawCart", JSON.stringify(next));
  }

  function changeQuantity(id, amount) {
    saveCart(items.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
    ));
  }

  function removeItem(id) {
    saveCart(items.filter((item) => item.id !== id));
  }

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Navbar />
      <main>
        <section className="paw-page-hero page-hero-sage">
          <div className="container">
            <span className="paw-eyebrow">YOUR LITTLE PAWFECT HAUL</span>
            <h1>A little something<br /><em>for your best friend.</em></h1>
            <p>Check your picks and get ready to spoil your favourite furry friend.</p>
            <div className="paw-breadcrumb"><Link to="/">Home</Link><i className="bi bi-chevron-right" /><span>Cart</span></div>
          </div>
        </section>

        <section className="paw-section">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-lg-8">
                <div className="paw-cart-panel">
                  <div className="paw-cart-heading"><h2>Your Cart</h2><span>{itemCount} item(s)</span></div>

                  {checkoutDone ? (
                    <div className="paw-success">
                      <i className="bi bi-check-circle-fill" />
                      <h2>Demo checkout complete!</h2>
                      <p>This is a frontend demo. No payment was taken and no order was sent.</p>
                      <button className="btn paw-btn paw-btn-primary" onClick={() => { saveCart([]); setCheckoutDone(false); }}>Clear Cart</button>
                    </div>
                  ) : items.length === 0 ? (
                    <div className="paw-empty-cart">
                      <div className="paw-empty-icon"><i className="bi bi-bag-heart" /></div>
                      <h3>Your cart is taking a little rest.</h3>
                      <p>Let's find something lovely for your furry friend.</p>
                      <Link to="/products" className="btn paw-btn paw-btn-primary">Explore Products <i className="bi bi-arrow-right" /></Link>
                    </div>
                  ) : (
                    <>
                      {items.map((item) => (
                        <div className="paw-cart-item" key={item.id}>
                          <img src={item.img} alt={item.name} />
                          <div className="paw-cart-item-info">
                            <h3>{item.name}</h3>
                            <span>₹{item.price} each</span>
                            <button className="paw-remove-link" onClick={() => removeItem(item.id)}>Remove</button>
                          </div>
                          <div className="paw-quantity">
                            <button onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                            <span>{item.qty}</span>
                            <button onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                          </div>
                          <strong className="paw-line-total">₹{(item.price * item.qty).toLocaleString("en-IN")}</strong>
                        </div>
                      ))}
                      <div className="paw-cart-continue"><Link to="/products"><i className="bi bi-arrow-left" /> Continue shopping</Link></div>
                    </>
                  )}
                </div>
              </div>

              <div className="col-lg-4">
                <aside className="paw-order-summary">
                  <h3>Order Summary</h3>
                  <div className="paw-summary-row"><span>Subtotal</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
                  <div className="paw-summary-row"><span>Delivery</span><strong>{items.length ? "Calculated later" : "—"}</strong></div>
                  <div className="paw-summary-row paw-summary-total"><span>Total</span><strong>₹{total.toLocaleString("en-IN")}</strong></div>
                  <p className="paw-summary-note"><i className="bi bi-shield-check" /> Demo checkout only</p>
                  <button className="btn paw-btn paw-btn-primary w-100" disabled={!items.length} onClick={() => setCheckoutDone(true)}>
                    Continue to Checkout <i className="bi bi-arrow-up-right" />
                  </button>
                  <p className="paw-checkout-disclaimer">No real payment processing is connected.</p>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}