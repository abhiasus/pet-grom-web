
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]];
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top"><div className="container">
      <Link className="navbar-brand paw-brand" to="/"><img src="/logo.png" alt="Pawfect Spa" /><span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span></Link>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#cartNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="cartNav"><ul className="navbar-nav ms-auto align-items-lg-center">
        {links.map(([n, p]) => <li className="nav-item" key={p}><NavLink end={p === "/"} className="nav-link" to={p}>{n}</NavLink></li>)}
        <li className="nav-item ms-lg-3"><Link className="btn paw-btn" to="/contact">Book Now</Link></li>
        <li className="nav-item"><Link className="nav-link active" to="/cart">Cart</Link></li>
      </ul></div>
    </div></nav>
  );
}

function Footer() {
  return <footer className="paw-footer"><div className="container"><div className="row g-4">
    <div className="col-md-5"><h3>Pawfect Spa</h3><p>Everyday essentials for happier pets.</p></div>
    <div className="col-6 col-md-3"><h6>Explore</h6><Link to="/products">Products</Link><Link to="/services">Services</Link></div>
    <div className="col-6 col-md-4"><h6>Need help?</h6><Link to="/contact">Contact Us</Link></div>
  </div><hr /><p className="copyright">© {new Date().getFullYear()} Pawfect Spa</p></div></footer>;
}

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("pawCart") || "[]"));
  }, []);

  function save(next) {
    localStorage.setItem("pawCart", JSON.stringify(next));
    setItems(next);
  }

  function changeQty(id, amount) {
    save(items.map(item =>
      item.id === id ? { ...item, qty: item.qty + amount } : item
    ).filter(item => item.qty > 0));
  }

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero"><div className="container text-center">
          <span className="eyebrow">YOUR BAG</span><h1>Your little essentials</h1>
          <p>Review the grooming favourites you've picked.</p>
        </div></section>
        <section className="section-pad"><div className="container">
          {items.length === 0 ? (
            <div className="spa-card text-center">
              <i className="bi bi-bag-x booking-icon" />
              <h2>Your cart is waiting</h2>
              <p>Explore our collection of grooming essentials.</p>
              <Link to="/products" className="btn paw-btn">Explore Products</Link>
            </div>
          ) : (
            <div className="row g-4">
              <div className="col-lg-8">
                {items.map(item => (
                  <div className="cart-row" key={item.id}>
                    <img className="cart-image" src={item.image} alt={item.name} />
                    <div className="flex-grow-1">
                      <h3>{item.name}</h3>
                      <p>₹{item.price.toLocaleString("en-IN")} each</p>
                      <div className="quantity-controls">
                        <button onClick={() => changeQty(item.id, -1)} aria-label="Decrease quantity">−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => changeQty(item.id, 1)} aria-label="Increase quantity">+</button>
                      </div>
                    </div>
                    <strong>₹{(item.price * item.qty).toLocaleString("en-IN")}</strong>
                    <button className="remove-btn" onClick={() => save(items.filter(x => x.id !== item.id))}>Remove</button>
                  </div>
                ))}
              </div>
              <div className="col-lg-4">
                <div className="spa-card">
                  <h3>Order summary</h3>
                  <div className="summary-line"><span>Subtotal</span><b>₹{total.toLocaleString("en-IN")}</b></div>
                  <div className="summary-line"><span>Delivery</span><span>Calculated later</span></div>
                  <hr />
                  <div className="summary-line"><b>Total</b><strong>₹{total.toLocaleString("en-IN")}</strong></div>
                  <Link to="/contact" className="btn paw-btn w-100 mt-3">Enquire to Order</Link>
                  <p className="small mt-3">Demo cart only; no payment is collected.</p>
                </div>
              </div>
            </div>
          )}
        </div></section>
      </main>
      <Footer />
    </>
  );
}
