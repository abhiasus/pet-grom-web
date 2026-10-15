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
            <li className="nav-item"><Link className="nav-link active" to="/services">Services</Link></li>
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

const services = [
  { title: "Bath & Fluff", description: "A warm bath, gentle shampoo, blow-dry, brush-out, and a fresh, fluffy finish.", time: "45–60 min", price: 699, icon: "bi-droplet", color: "sage" },
  { title: "Haircut & Styling", description: "A comfortable trim shaped around your pet's coat, face, feet, and style.", time: "60–90 min", price: 999, icon: "bi-scissors", color: "clay" },
  { title: "Full Spa Day", description: "A complete grooming experience with bath, dry, haircut, ear cleaning, and finishing touches.", time: "90–120 min", price: 1499, icon: "bi-stars", color: "sand" },
  { title: "Pawdicure", description: "Nail trim, paw-pad tidy, and a little balm to keep those paws feeling lovely.", time: "20–30 min", price: 399, icon: "bi-hand-index", color: "sage" },
  { title: "Puppy Introduction", description: "A gentle first visit with a mini wash, brushing, and positive introductions.", time: "30–45 min", price: 599, icon: "bi-emoji-smile", color: "sand" },
  { title: "Freshen-Up", description: "A quick tidy between full grooms: brush, face clean, and finishing spritz.", time: "25–35 min", price: 499, icon: "bi-heart-pulse", color: "clay" },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <section className="paw-page-hero page-hero-sage">
          <div className="container">
            <span className="paw-eyebrow">A LITTLE SOMETHING FOR EVERY PAW</span>
            <h1>Thoughtful care.<br /><em>Tail-wagging results.</em></h1>
            <p>Choose a grooming experience that suits your pet's needs, coat, and comfort.</p>
            <div className="paw-breadcrumb"><Link to="/">Home</Link><i className="bi bi-chevron-right" /><span>Services</span></div>
          </div>
        </section>

        <section className="paw-section">
          <div className="container">
            <div className="section-heading text-center">
              <span className="paw-eyebrow">OUR GROOMING MENU</span>
              <h2>A little pamper.<br /><em>A lot of comfort.</em></h2>
              <p>Our starting prices help you plan. Final pricing depends on your pet's breed, size, coat condition, and needs.</p>
            </div>

            <div className="row g-4 mt-3">
              {services.map((service, index) => (
                <div className="col-md-6 col-lg-4" key={service.title} data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
                  <article className={`paw-service-card paw-service-detail card-${service.color}`}>
                    <div className="paw-service-top">
                      <div className="paw-service-icon"><i className={`bi ${service.icon}`} /></div>
                      <span className="paw-service-time"><i className="bi bi-clock" /> {service.time}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="paw-service-bottom">
                      <strong>From ₹{service.price.toLocaleString("en-IN")}</strong>
                      <Link to="/booking" className="paw-circle-arrow" aria-label={`Book ${service.title}`}><i className="bi bi-arrow-up-right" /></Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <p className="paw-pricing-note mt-4"><i className="bi bi-info-circle" /> Prices are starting estimates. We'll confirm the final price before your appointment.</p>
          </div>
        </section>

        <section className="paw-feature-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="paw-feature-image-wrap">
                  <img src="/images/services-bath.jpg" alt="Dog enjoying a gentle bath" />
                  <div className="paw-feature-sticker"><i className="bi bi-heart-fill" /> Gentle care,<br />every step.</div>
                </div>
              </div>
              <div className="col-lg-6">
                <span className="paw-eyebrow">NOT SURE WHAT TO PICK?</span>
                <h2>We'll help you find<br /><em>the right fit.</em></h2>
                <p className="paw-body-copy">Tell us about your pet, their coat, and what they enjoy. We'll recommend a grooming plan that feels right for them—no pressure, just good advice.</p>
                <Link to="/contact" className="btn paw-btn paw-btn-primary">Ask Us a Question <i className="bi bi-arrow-up-right" /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}