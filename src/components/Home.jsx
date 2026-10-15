
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";

const img = {
  hero: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85",
  dog: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=85",
  dogs: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85",
};

function Navbar() {
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Products", "/products"],
    ["Contact", "/contact"],
  ];

  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand paw-brand" to="/">
          <img src="/logo.png" alt="Pawfect Spa logo" />
          <span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#homeNav"
          aria-controls="homeNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="homeNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {links.map(([label, path]) => (
              <li className="nav-item" key={path}>
                <NavLink end={path === "/"} className="nav-link" to={path}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <Link className="btn paw-btn" to="/contact">Book Now</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-bag" /> Cart
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
            <h3>Pawfect Spa</h3>
            <p>Thoughtful grooming, natural care, happier pets.</p>
          </div>
          <div className="col-6 col-lg-3">
            <h6>Explore</h6>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/products">Pet Products</Link>
          </div>
          <div className="col-6 col-lg-4">
            <h6>Get in touch</h6>
            <p>hello@pawfectspa.example</p>
            <Link to="/contact">Book an appointment</Link>
          </div>
        </div>
        <hr />
        <p className="copyright">
          © {new Date().getFullYear()} Pawfect Spa. Made with care for every paw.
        </p>
      </div>
    </footer>
  );
}

const services = [
  { icon: "bi-droplet", name: "Spa Bath", price: "From ₹599", text: "Gentle cleansing and a fresh finish." },
  { icon: "bi-scissors", name: "Hair Styling", price: "From ₹899", text: "Comfortable trims for beautiful coats." },
  { icon: "bi-flower1", name: "Paw Care", price: "From ₹299", text: "Nail trimming and paw-pad tidying." },
  { icon: "bi-heart", name: "Full Groom", price: "From ₹1,299", text: "Complete head-to-tail grooming." },
];

export default function Home() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <section className="paw-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <span className="eyebrow">A LITTLE MORE LOVE, EVERY VISIT</span>
                <h1>Gentle care.<br /><em>Happier pets.</em></h1>
                <p>
                  Thoughtful grooming, soothing baths, and a little luxury
                  for your very best friend.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link to="/contact" className="btn paw-btn btn-lg">
                    Book an Appointment
                  </Link>
                  <Link to="/services" className="btn paw-outline btn-lg">
                    Explore Services
                  </Link>
                </div>

                <div className="hero-note">
                  <i className="bi bi-heart-fill" />
                  Gentle handling · Clean spaces · Happy tails
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <div className="hero-photo">
                  <img src={img.hero} alt="Happy golden retriever" />
                  <div className="photo-note">
                    <i className="bi bi-stars" /> Made for their well-being
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <span className="eyebrow">OUR SIGNATURE CARE</span>
              <h2>A fresh start for every paw</h2>
              <p>Comfortable grooming with care in every little detail.</p>
            </div>

            <div className="row g-4 mt-3">
              {services.map((service) => (
                <div className="col-md-6 col-lg-3" key={service.name}>
                  <article className="spa-card h-100" data-aos="fade-up">
                    <div className="spa-icon">
                      <i className={`bi ${service.icon}`} />
                    </div>
                    <h3>{service.name}</h3>
                    <p>{service.text}</p>
                    <strong className="price">{service.price}</strong>
                    <Link to="/contact" className="text-link">Book service →</Link>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="story-band section-pad">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <img className="rounded-photo" src={img.dogs} alt="Dogs spending time together" />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <span className="eyebrow">CARE THAT FEELS LIKE HOME</span>
                <h2>Because they're family, too.</h2>
                <p>
                  Every pet has a unique personality. We make grooming a calm,
                  comfortable experience with patient handling and thoughtful care.
                </p>
                <Link to="/about" className="btn paw-btn">Discover Our Story</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad text-center">
          <div className="container" data-aos="zoom-in">
            <span className="eyebrow">YOUR PET'S NEXT HAPPY DAY</span>
            <h2>Ready for a little pampering?</h2>
            <p>Tell us about your pet and we'll help you plan a visit.</p>
            <Link to="/contact" className="btn paw-btn btn-lg">Let's Book a Visit</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
