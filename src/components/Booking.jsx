import React from "react";
import { Link, useNavigate } from "react-router-dom";

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

export default function Booking() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    owner: "",
    phone: "",
    email: "",
    pet: "",
    breed: "",
    service: "Bath & Fluff",
    date: "",
    time: "",
    notes: "",
  });

  const [error, setError] = React.useState("");

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    setError("");

    localStorage.setItem("pawBookingDraft", JSON.stringify(form));
    navigate("/contact", { state: { booking: form } });
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <Navbar />
      <main>
        <section className="paw-page-hero page-hero-clay">
          <div className="container">
            <span className="paw-eyebrow">LET'S PLAN A LITTLE PAMPER</span>
            <h1>Their next happy day<br /><em>starts right here.</em></h1>
            <p>Tell us a little about your pet and the grooming visit you're looking for.</p>
            <div className="paw-breadcrumb"><Link to="/">Home</Link><i className="bi bi-chevron-right" /><span>Booking</span></div>
          </div>
        </section>

        <section className="paw-section">
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-start">
              <div className="col-lg-7">
                <div className="paw-form-card">
                  <span className="paw-eyebrow">APPOINTMENT REQUEST</span>
                  <h2>Let's meet your <em>best friend.</em></h2>
                  <p className="paw-form-intro">Fill in the details below. The next step will take you to Contact to review and send your enquiry.</p>

                  {error && <div className="alert alert-danger">{error}</div>}

                  <form className="paw-form" onSubmit={submit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="owner">Your name *</label>
                        <input className="form-control" id="owner" name="owner" value={form.owner} onChange={update} required placeholder="Your full name" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="phone">Phone number *</label>
                        <input className="form-control" id="phone" name="phone" type="tel" value={form.phone} onChange={update} required placeholder="Your phone number" />
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="email">Email address</label>
                        <input className="form-control" id="email" name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="pet">Pet's name *</label>
                        <input className="form-control" id="pet" name="pet" value={form.pet} onChange={update} required placeholder="Your pet's name" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="breed">Breed / size</label>
                        <input className="form-control" id="breed" name="breed" value={form.breed} onChange={update} placeholder="e.g. Indie, medium" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="service">Preferred service *</label>
                        <select className="form-select" id="service" name="service" value={form.service} onChange={update} required>
                          <option>Bath & Fluff</option>
                          <option>Haircut & Styling</option>
                          <option>Full Spa Day</option>
                          <option>Pawdicure</option>
                          <option>Puppy Introduction</option>
                          <option>Freshen-Up</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="date">Preferred date</label>
                        <input className="form-control" id="date" name="date" type="date" min={today} value={form.date} onChange={update} />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="time">Preferred time</label>
                        <select className="form-select" id="time" name="time" value={form.time} onChange={update}>
                          <option value="">Choose a time</option>
                          <option>9:00 AM</option>
                          <option>10:00 AM</option>
                          <option>11:00 AM</option>
                          <option>12:00 PM</option>
                          <option>2:00 PM</option>
                          <option>3:00 PM</option>
                          <option>4:00 PM</option>
                          <option>5:00 PM</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label" htmlFor="notes">Anything we should know?</label>
                        <textarea className="form-control" id="notes" name="notes" rows="4" value={form.notes} onChange={update} placeholder="Coat needs, sensitivities, or anything that helps us care for your pet." />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn paw-btn paw-btn-primary w-100">
                          Continue to Contact <i className="bi bi-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <aside className="paw-booking-side">
                  <img src="/images/booking.jpg" alt="A happy dog ready for a grooming appointment" />
                  <div className="paw-booking-side-body">
                    <span className="paw-eyebrow">BEFORE YOU VISIT</span>
                    <h3>A few little things.</h3>
                    <ul className="paw-check-list">
                      <li><i className="bi bi-check-circle-fill" /> Let us know about sensitivities.</li>
                      <li><i className="bi bi-check-circle-fill" /> Bring any grooming preferences.</li>
                      <li><i className="bi bi-check-circle-fill" /> We'll confirm the time and price.</li>
                    </ul>
                    <p><i className="bi bi-clock" /> <strong>Salon hours</strong><br />Tuesday–Sunday · 9:00 AM–6:00 PM</p>
                    <p className="mt-3"><i className="bi bi-info-circle" /> This form creates an enquiry draft; it does not confirm a real appointment.</p>
                  </div>
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