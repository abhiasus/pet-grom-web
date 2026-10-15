
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";

function Navbar() {
  const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]];
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand paw-brand" to="/">
          <img src="/logo.png" alt="Pawfect Spa" />
          <span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span>
        </Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#aboutNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="aboutNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {links.map(([n, p]) => <li className="nav-item" key={p}><NavLink end={p === "/"} className="nav-link" to={p}>{n}</NavLink></li>)}
            <li className="nav-item ms-lg-3"><Link className="btn paw-btn" to="/contact">Book Now</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="paw-footer"><div className="container">
      <div className="row g-4">
        <div className="col-md-5"><h3>Pawfect Spa</h3><p>Gentle grooming and natural care for happier pets.</p></div>
        <div className="col-6 col-md-3"><h6>Explore</h6><Link to="/services">Services</Link><Link to="/products">Products</Link></div>
        <div className="col-6 col-md-4"><h6>Contact</h6><Link to="/contact">Book a visit</Link><p>hello@pawfectspa.example</p></div>
      </div>
      <hr /><p className="copyright">© {new Date().getFullYear()} Pawfect Spa</p>
    </div></footer>
  );
}

export default function About() {
  useEffect(() => { AOS.refresh(); }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container text-center" data-aos="fade-up">
            <span className="eyebrow">OUR STORY</span>
            <h1>Care with a softer touch</h1>
            <p>A grooming experience built around comfort, kindness, and healthy coats.</p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <img className="rounded-photo" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=85" alt="Happy dog enjoying gentle care" />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <span className="eyebrow">WHY PAWFECT SPA</span>
                <h2>Small details. Happier tails.</h2>
                <p>We believe every pet deserves patience, kindness, and a comfortable grooming experience.</p>
                <ul className="check-list">
                  <li>Patient, pet-first handling</li>
                  <li>Clean and comfortable grooming spaces</li>
                  <li>Personalised coat and paw care</li>
                  <li>Clear communication with pet parents</li>
                </ul>
                <Link to="/services" className="btn paw-btn">Explore Our Services</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="story-band section-pad">
          <div className="container text-center" data-aos="zoom-in">
            <span className="eyebrow">OUR PROMISE</span>
            <h2>Every pet deserves to feel safe and loved.</h2>
            <p>Our goal is to make every visit a positive experience for pets and their families.</p>
            <Link to="/contact" className="btn paw-btn">Talk to Our Team</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
