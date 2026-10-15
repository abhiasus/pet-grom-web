import React from "react";
import { Link } from "react-router-dom";
import asset from "../utils/asset";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand paw-brand" to="/">
          <img src={asset("logo.png")} alt="Pawfect Spa" className="paw-logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pawNav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="pawNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
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
          <div className="col-lg-5">
            <Link className="paw-brand footer-brand" to="/">
              <img src={asset("logo.png")} alt="Pawfect Spa" className="paw-logo" />
            </Link>
            <p className="footer-description">Thoughtful grooming, soothing baths, and a little luxury for your very best friend.</p>
          </div>
          <div className="col-6 col-lg-2"><h6>Explore</h6><Link to="/about">Our Story</Link><Link to="/services">Our Services</Link><Link to="/products">Pet Products</Link></div>
          <div className="col-6 col-lg-2"><h6>Need help?</h6><Link to="/booking">Book an Appointment</Link><Link to="/contact">Contact Us</Link><Link to="/cart">Your Cart</Link></div>
          <div className="col-lg-3"><h6>Our promise</h6><p className="footer-description">Gentle handling. Clean spaces. Happy tails.</p><div className="paw-socials"><a href="https://instagram.com" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://facebook.com" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Pawfect Spa. All rights reserved.</span><span>Made with care for every paw.</span></div>
      </div>
    </footer>
  );
}

export default function About() {
  const values = [
    { icon: "bi-heart", title: "Kindness First", text: "Every pet is treated with patience, care, and respect for their individual comfort.", color: "value-sage" },
    { icon: "bi-stars", title: "Thoughtful Details", text: "From gentle products to clean spaces, we pay attention to the little things.", color: "value-clay" },
    { icon: "bi-flower1", title: "Personal Care", text: "We tailor each visit to your pet's coat, needs, temperament, and routine.", color: "value-sand" },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="paw-page-hero">
          <div className="container">
            <span className="paw-eyebrow">THE HEART BEHIND THE PAWS</span>
            <h1>A little more care.<br /><em>A lot more comfort.</em></h1>
            <p>Meet the thinking behind Pawfect Spa: a calmer, kinder grooming experience for the pets who make our lives better.</p>
            <div className="paw-breadcrumb"><Link to="/">Home</Link><i className="bi bi-chevron-right" /><span>About</span></div>
          </div>
        </section>

        <section className="paw-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="paw-about-image">
                  <img src={asset("about.jpg")} alt="A happy dog enjoying gentle care" />
                  <span className="paw-about-badge"><i className="bi bi-heart-fill" /> Pets first. Always.</span>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <span className="paw-eyebrow">WHY PAWFECT SPA</span>
                <h2>Small details.<br /><em>Happier tails.</em></h2>
                <p className="paw-body-copy">
                  We believe every pet deserves patience, kindness, and a
                  comfortable grooming experience. Pawfect Spa was imagined
                  as a welcoming place where pets can settle in, feel cared
                  for, and leave feeling fresh.
                </p>
                <p className="paw-body-copy">
                  Our approach is simple: listen to pet parents, respect each
                  animal's pace, and make every bath, trim, and paw treatment
                  feel as gentle as possible.
                </p>
                <ul className="paw-check-list">
                  <li><i className="bi bi-check-lg" /> Patient, pet-first handling</li>
                  <li><i className="bi bi-check-lg" /> Clean and comfortable grooming spaces</li>
                  <li><i className="bi bi-check-lg" /> Personalised coat and paw care</li>
                </ul>
                <Link to="/services" className="btn paw-btn paw-btn-primary">Explore Our Services <i className="bi bi-arrow-up-right" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="paw-section paw-values-section">
          <div className="container">
            <div className="section-heading text-center">
              <span className="paw-eyebrow">WHAT MATTERS TO US</span>
              <h2>Care in every <em>little detail.</em></h2>
              <p>Good grooming is about more than how a pet looks. It's about how they feel.</p>
            </div>
            <div className="row g-4 mt-3">
              {values.map((value, index) => (
                <div className="col-md-6 col-lg-4" key={value.title} data-aos="fade-up" data-aos-delay={index * 100}>
                  <article className={`paw-value-card ${value.color}`}>
                    <div className="paw-value-icon"><i className={`bi ${value.icon}`} /></div>
                    <h3>{value.title}</h3>
                    <p>{value.text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="paw-cta-section">
          <div className="container paw-cta-inner">
            <div><span className="paw-eyebrow">COME SAY HELLO</span><h2>Let's make their day <em>better.</em></h2><p>We'd love to welcome you and your furry friend.</p></div>
            <Link to="/booking" className="btn paw-btn paw-btn-light">Book an Appointment <i className="bi bi-arrow-up-right" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}