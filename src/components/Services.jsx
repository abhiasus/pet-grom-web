
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";

function Navbar() {
  const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]];
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand paw-brand" to="/"><img src="/logo.png" alt="Pawfect Spa" /><span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span></Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#servicesNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="servicesNav"><ul className="navbar-nav ms-auto align-items-lg-center">
          {links.map(([n, p]) => <li className="nav-item" key={p}><NavLink end={p === "/"} className="nav-link" to={p}>{n}</NavLink></li>)}
          <li className="nav-item ms-lg-3"><Link className="btn paw-btn" to="/contact">Book Now</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
        </ul></div>
      </div>
    </nav>
  );
}

function Footer() {
  return <footer className="paw-footer"><div className="container"><div className="row g-4">
    <div className="col-md-5"><h3>Pawfect Spa</h3><p>Gentle grooming, happier pets.</p></div>
    <div className="col-6 col-md-3"><h6>Explore</h6><Link to="/about">About</Link><Link to="/products">Products</Link></div>
    <div className="col-6 col-md-4"><h6>Get in touch</h6><Link to="/contact">Contact us</Link><p>hello@pawfectspa.example</p></div>
  </div><hr /><p className="copyright">© {new Date().getFullYear()} Pawfect Spa</p></div></footer>;
}

const services = [
  ["bi-droplet", "Signature Bath", "Gentle cleansing, drying, and a fresh finish.", "599"],
  ["bi-scissors", "Haircut & Styling", "A comfortable trim suited to your pet's coat.", "899"],
  ["bi-flower1", "Nail & Paw Care", "Nail clipping and careful paw-pad tidying.", "299"],
  ["bi-heart", "Full Grooming", "Bath, brushing, styling, and finishing touches.", "1299"],
  ["bi-brush", "De-shedding", "Brushing and loose-coat removal.", "699"],
  ["bi-emoji-smile", "Puppy Introduction", "A gentle introduction to grooming.", "499"],
];

export default function Services() {
  useEffect(() => { AOS.refresh(); }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero"><div className="container text-center" data-aos="fade-up">
          <span className="eyebrow">OUR SERVICES</span><h1>A little care goes a long way</h1>
          <p>Choose a service to suit your pet's coat, routine, and comfort.</p>
        </div></section>

        <section className="section-pad"><div className="container">
          <div className="row g-4">
            {services.map(([icon, name, text, price]) => (
              <div className="col-md-6 col-lg-4" key={name}>
                <article className="spa-card h-100" data-aos="fade-up">
                  <div className="spa-icon"><i className={`bi ${icon}`} /></div>
                  <h3>{name}</h3><p>{text}</p>
                  <strong className="price">From ₹{Number(price).toLocaleString("en-IN")}</strong>
                  <Link to="/contact" className="btn paw-btn mt-3">Book This Service</Link>
                </article>
              </div>
            ))}
          </div>
          <p className="text-center small mt-4">Prices are illustrative and may vary by pet size and coat condition.</p>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
