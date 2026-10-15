
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]];
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top"><div className="container">
      <Link className="navbar-brand paw-brand" to="/"><img src="/logo.png" alt="Pawfect Spa" /><span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span></Link>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#bookingNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="bookingNav"><ul className="navbar-nav ms-auto align-items-lg-center">
        {links.map(([n, p]) => <li className="nav-item" key={p}><NavLink end={p === "/"} className="nav-link" to={p}>{n}</NavLink></li>)}
        <li className="nav-item ms-lg-3"><Link className="btn paw-btn" to="/contact">Book Now</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
      </ul></div>
    </div></nav>
  );
}

function Footer() {
  return <footer className="paw-footer"><div className="container"><div className="row g-4">
    <div className="col-md-5"><h3>Pawfect Spa</h3><p>Gentle grooming. Happier pets.</p></div>
    <div className="col-6 col-md-3"><h6>Explore</h6><Link to="/services">Services</Link><Link to="/products">Products</Link></div>
    <div className="col-6 col-md-4"><h6>Appointments</h6><Link to="/contact">Contact Us</Link></div>
  </div><hr /><p className="copyright">© {new Date().getFullYear()} Pawfect Spa</p></div></footer>;
}

export default function Booking() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero"><div className="container text-center">
          <span className="eyebrow">PLAN A VISIT</span>
          <h1>Let's make their day</h1>
          <p>We're happy to help you choose the right grooming service.</p>
        </div></section>
        <section className="section-pad">
          <div className="container narrow-content text-center">
            <div className="spa-card">
              <i className="bi bi-calendar-heart booking-icon" />
              <h2>Tell us about your pet</h2>
              <p>Share your preferred date, your pet's details, and the service you need. Our contact form is the first step toward arranging your visit.</p>
              <Link to="/contact" className="btn paw-btn btn-lg">Continue to Contact</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
