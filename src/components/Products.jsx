
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";

function Navbar() {
  const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]];
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top"><div className="container">
      <Link className="navbar-brand paw-brand" to="/"><img src="/logo.png" alt="Pawfect Spa" /><span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span></Link>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#productsNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="productsNav"><ul className="navbar-nav ms-auto align-items-lg-center">
        {links.map(([n, p]) => <li className="nav-item" key={p}><NavLink end={p === "/"} className="nav-link" to={p}>{n}</NavLink></li>)}
        <li className="nav-item ms-lg-3"><Link className="btn paw-btn" to="/contact">Book Now</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
      </ul></div>
    </div></nav>
  );
}

function Footer() {
  return <footer className="paw-footer"><div className="container"><div className="row g-4">
    <div className="col-md-5"><h3>Pawfect Spa</h3><p>Everyday essentials for happier pets.</p></div>
    <div className="col-6 col-md-3"><h6>Explore</h6><Link to="/services">Services</Link><Link to="/about">About Us</Link></div>
    <div className="col-6 col-md-4"><h6>Need help?</h6><Link to="/contact">Contact Us</Link><Link to="/cart">View Cart</Link></div>
  </div><hr /><p className="copyright">© {new Date().getFullYear()} Pawfect Spa</p></div></footer>;
}

const products = [
  { id: 1, name: "Gentle Pet Shampoo", price: 449, image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=700&q=80" },
  { id: 2, name: "Soft Grooming Brush", price: 349, image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80" },
  { id: 3, name: "Paw Care Balm", price: 299, image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=80" },
  { id: 4, name: "Cozy Pet Towel", price: 599, image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=80" },
];

export default function Products() {
  useEffect(() => { AOS.refresh(); }, []);

  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("pawCart") || "[]");
    const existing = cart.find(item => item.id === product.id);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    localStorage.setItem("pawCart", JSON.stringify(cart));
    window.alert(`${product.name} added to your cart.`);
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero"><div className="container text-center" data-aos="fade-up">
          <span className="eyebrow">THE PAWFECT EDIT</span><h1>Everyday essentials</h1>
          <p>Thoughtful grooming favourites for your pet's care routine.</p>
        </div></section>
        <section className="section-pad"><div className="container">
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-sm-6 col-lg-3" key={product.id}>
                <article className="product-card h-100" data-aos="fade-up">
                  <div className="product-art"><img src={product.image} alt={product.name} /></div>
                  <div className="product-info">
                    <span className="eyebrow">GROOMING ESSENTIAL</span>
                    <h3>{product.name}</h3>
                    <strong>₹{product.price.toLocaleString("en-IN")}</strong>
                    <button className="btn paw-btn w-100 mt-3" onClick={() => addToCart(product)}>
                      <i className="bi bi-bag-plus" /> Add to Cart
                    </button>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="text-center mt-4"><Link to="/cart" className="btn paw-outline">View Cart</Link></div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
