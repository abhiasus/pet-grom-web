import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand paw-brand" to="/">
          <img src="/logo.png" alt="Pawfect Spa" className="paw-logo" />
          <span>
            Pawfect Spa
            <small>GENTLE CARE FOR EVERY PAW</small>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#pawNav"
          aria-controls="pawNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="pawNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item ms-lg-3">
              <Link className="btn paw-btn paw-btn-primary" to="/booking">Book Now</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="paw-cart-link" to="/cart">
                Cart <i className="bi bi-bag" />
              </Link>
            </li>
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
              <img src="/logo.png" alt="" className="paw-logo" />
              <span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span>
            </Link>
            <p className="footer-description">
              Thoughtful grooming, soothing baths, and a little luxury for
              your very best friend.
            </p>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Explore</h6>
            <Link to="/about">Our Story</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/products">Pet Products</Link>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Need help?</h6>
            <Link to="/booking">Book an Appointment</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">Your Cart</Link>
          </div>
          <div className="col-lg-3">
            <h6>Our promise</h6>
            <p className="footer-description">
              Gentle handling. Clean spaces. Happy tails.
            </p>
            <div className="paw-socials">
              <a href="https://instagram.com" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="https://facebook.com" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Pawfect Spa. All rights reserved.</span>
          <span>Made with care for every paw.</span>
        </div>
      </div>
    </footer>
  );
}

const services = [
  {
    title: "Gentle Bath",
    description: "A warm bath, gentle shampoo, and a soft, fluffy finish.",
    icon: "bi-droplet",
    price: "From ₹699",
    color: "sage",
  },
  {
    title: "Haircut & Styling",
    description: "A comfortable trim shaped around your pet's coat and style.",
    icon: "bi-scissors",
    price: "From ₹999",
    color: "clay",
  },
  {
    title: "Paw Care",
    description: "Nail trimming, paw-pad care, and a little extra pampering.",
    icon: "bi-heart",
    price: "From ₹399",
    color: "sand",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="paw-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-up">
                <span className="paw-eyebrow">
                  <span className="eyebrow-dot" />
                  YOUR PET'S HAPPY PLACE
                </span>

                <h1>
                  Gentle care.
                  <br />
                  <em>Happier pets.</em>
                </h1>

                <p className="paw-hero-copy">
                  Thoughtful grooming, soothing baths, and a little luxury
                  for your very best friend.
                </p>

                <div className="paw-hero-actions">
                  <Link to="/booking" className="btn paw-btn paw-btn-primary">
                    Book an Appointment <i className="bi bi-arrow-up-right" />
                  </Link>
                  <Link to="/services" className="btn paw-btn paw-btn-outline">
                    Explore Services
                  </Link>
                </div>

                <div className="paw-hero-note">
                  <i className="bi bi-heart-fill" />
                  Gentle handling · Clean spaces · Happy tails
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <div className="paw-hero-image-wrap">
                  <img
                    src="/images/hero.jpg"
                    alt="Happy dog ready for a gentle grooming session"
                    className="paw-hero-image"
                  />
                  <div className="paw-image-badge">
                    <i className="bi bi-stars" />
                    <span>Made for their<br />well-being</span>
                  </div>
                  <span className="paw-decoration paw-decoration-one">✳</span>
                  <span className="paw-decoration paw-decoration-two">✦</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="paw-marquee">
          <div className="container paw-marquee-inner">
            <span>GENTLE GROOMING</span><i className="bi bi-heart-fill" />
            <span>HAPPY PAWS</span><i className="bi bi-stars" />
            <span>THOUGHTFUL CARE</span><i className="bi bi-heart-fill" />
            <span>GENTLE GROOMING</span>
          </div>
        </div>

        <section className="paw-section">
          <div className="container">
            <div className="section-heading text-center" data-aos="fade-up">
              <span className="paw-eyebrow">A LITTLE TIME FOR THEM</span>
              <h2>Care that feels like <em>comfort.</em></h2>
              <p>
                From a fresh bath to a head-to-paw glow-up, every visit is
                designed around your pet's comfort.
              </p>
            </div>

            <div className="row g-4 mt-3">
              {services.map((service, index) => (
                <div className="col-md-6 col-lg-4" key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
                  <article className={`paw-service-card card-${service.color}`}>
                    <div className="paw-service-icon">
                      <i className={`bi ${service.icon}`} />
                    </div>
                    <span className="paw-card-number">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="paw-service-bottom">
                      <strong>{service.price}</strong>
                      <Link to="/services" className="paw-circle-arrow" aria-label={`Explore ${service.title}`}>
                        <i className="bi bi-arrow-up-right" />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <Link to="/services" className="btn paw-btn paw-btn-outline">
                View All Services <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </section>

        <section className="paw-feature-section">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="paw-feature-image-wrap">
                  <img src="/images/dogs-together.jpg" alt="Two happy dogs spending time together" />
                  <div className="paw-feature-sticker">
                    <i className="bi bi-heart-fill" />
                    All the care.<br />None of the stress.
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <span className="paw-eyebrow">MORE THAN A BATH</span>
                <h2>Small details.<br /><em>Happier tails.</em></h2>
                <p className="paw-body-copy">
                  We believe every pet deserves patience, kindness, and a
                  comfortable grooming experience. We take things at your
                  pet's pace, use gentle products, and make every visit feel
                  safe.
                </p>
                <ul className="paw-check-list">
                  <li><i className="bi bi-check-circle-fill" /> Patient, pet-first handling</li>
                  <li><i className="bi bi-check-circle-fill" /> Clean and comfortable grooming spaces</li>
                  <li><i className="bi bi-check-circle-fill" /> Personalised coat and paw care</li>
                </ul>
                <Link to="/about" className="btn paw-btn paw-btn-primary">
                  Get to Know Us <i className="bi bi-arrow-up-right" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="paw-section paw-testimonials">
          <div className="container">
            <div className="section-heading text-center">
              <span className="paw-eyebrow">KIND WORDS, HAPPY PAWS</span>
              <h2>Little stories of <em>love.</em></h2>
            </div>
            <div className="row g-4 mt-3">
              {[
                ["“The team was so gentle with my nervous pup. He came home relaxed and smelling wonderful.”", "Ananya & Milo", "A lovely first visit."],
                ["“A lovely, clean space and such thoughtful care. I really appreciated the personal attention.”", "Rohan & Coco", "Our regular grooming spot."],
                ["“The paw treatment made such a difference. You can tell they really care about the pets.”", "Meera & Bruno", "Happy paws all around."],
              ].map((review, index) => (
                <div className="col-md-6 col-lg-4" key={review[1]} data-aos="fade-up" data-aos-delay={index * 100}>
                  <article className={`paw-review-card review-${index + 1}`}>
                    <div className="paw-review-stars">★★★★★</div>
                    <p>{review[0]}</p>
                    <strong>{review[1]}</strong>
                    <small>{review[2]}</small>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="paw-cta-section">
          <div className="container paw-cta-inner">
            <div>
              <span className="paw-eyebrow">THEY DESERVE A LITTLE EXTRA</span>
              <h2>Ready for a <em>paw-some</em> day?</h2>
              <p>Let's make their next grooming visit a happy one.</p>
            </div>
            <Link to="/booking" className="btn paw-btn paw-btn-light">
              Book Their Visit <i className="bi bi-arrow-up-right" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}