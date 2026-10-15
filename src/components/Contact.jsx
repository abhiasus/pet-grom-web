import React from "react";
import { Link, useLocation } from "react-router-dom";
import asset from "../utils/asset";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand paw-brand" to="/"><img src={asset("logo.png")} alt="Pawfect Spa" className="paw-logo" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#pawNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
        <div className="collapse navbar-collapse" id="pawNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/contact">Contact</Link></li>
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
          <div className="col-lg-5"><Link className="paw-brand footer-brand" to="/"><img src={asset("logo.png")} alt="Pawfect Spa" className="paw-logo" /></Link><p className="footer-description">Thoughtful grooming, soothing baths, and a little luxury for your very best friend.</p></div>
          <div className="col-6 col-lg-2"><h6>Explore</h6><Link to="/about">Our Story</Link><Link to="/services">Our Services</Link><Link to="/products">Pet Products</Link></div>
          <div className="col-6 col-lg-2"><h6>Need help?</h6><Link to="/booking">Book an Appointment</Link><Link to="/contact">Contact Us</Link><Link to="/cart">Your Cart</Link></div>
          <div className="col-lg-3"><h6>Our promise</h6><p className="footer-description">Gentle handling. Clean spaces. Happy tails.</p><div className="paw-socials"><a href="https://instagram.com" aria-label="Instagram"><i className="bi bi-instagram" /></a><a href="https://facebook.com" aria-label="Facebook"><i className="bi bi-facebook" /></a></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Pawfect Spa. All rights reserved.</span><span>Made with care for every paw.</span></div>
      </div>
    </footer>
  );
}

export default function Contact() {
  const location = useLocation();
  const bookingDraft = location.state?.booking || JSON.parse(localStorage.getItem("pawBookingDraft") || "null");

  const [form, setForm] = React.useState({
    name: bookingDraft?.owner || "",
    email: bookingDraft?.email || "",
    phone: bookingDraft?.phone || "",
    subject: bookingDraft ? `Appointment enquiry for ${bookingDraft.pet}` : "General enquiry",
    message: bookingDraft
      ? `Pet: ${bookingDraft.pet}\nBreed / size: ${bookingDraft.breed || "Not provided"}\nService: ${bookingDraft.service}\nPreferred date: ${bookingDraft.date || "Flexible"}\nPreferred time: ${bookingDraft.time || "Flexible"}\nAdditional notes: ${bookingDraft.notes || "None"}`
      : "",
  });
  const [sent, setSent] = React.useState(false);

  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    const enquiries = JSON.parse(localStorage.getItem("pawInquiries") || "[]");
    enquiries.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("pawInquiries", JSON.stringify(enquiries));
    setSent(true);
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="paw-page-hero page-hero-sand">
          <div className="container">
            <span className="paw-eyebrow">WE'RE HERE FOR YOU</span>
            <h1>Let's have a little<br /><em>chat about your pet.</em></h1>
            <p>Questions about grooming, products, or your next visit? We'd love to hear from you.</p>
            <div className="paw-breadcrumb"><Link to="/">Home</Link><i className="bi bi-chevron-right" /><span>Contact</span></div>
          </div>
        </section>

        <section className="paw-section">
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-start">
              <div className="col-lg-5">
                <span className="paw-eyebrow">DROP US A NOTE</span>
                <h2>Good care starts<br /><em>with a hello.</em></h2>
                <p className="paw-body-copy">Tell us what's on your mind. We'll do our best to help you find the right care for your furry friend.</p>

                <div className="paw-contact-list">
                  <div><span className="paw-contact-icon"><i className="bi bi-telephone" /></span><div><strong>Give us a call</strong><p>+91 98765 43210</p></div></div>
                  <div><span className="paw-contact-icon"><i className="bi bi-envelope" /></span><div><strong>Drop us a note</strong><p>hello@pawfectspa.example</p></div></div>
                  <div><span className="paw-contact-icon"><i className="bi bi-geo-alt" /></span><div><strong>Find our happy place</strong><p>12 Paws Lane, Your City, India</p></div></div>
                  <div><span className="paw-contact-icon"><i className="bi bi-clock" /></span><div><strong>Salon hours</strong><p>Tue–Sun · 9:00 AM–6:00 PM</p></div></div>
                </div>

                <div className="paw-contact-photo">
                  <img src={asset("contact.jpg")} alt="A happy dog at the grooming salon" />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="paw-form-card">
                  {sent ? (
                    <div className="paw-success">
                      <i className="bi bi-check-circle-fill" />
                      <h2>Thanks for reaching out!</h2>
                      <p>Your enquiry has been saved in this browser for this demo. No email has been sent.</p>
                      <button className="btn paw-btn paw-btn-primary" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "General enquiry", message: "" }); }}>
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <span className="paw-eyebrow">SEND A MESSAGE</span>
                      <h2>How can we <em>help?</em></h2>
                      <p className="paw-form-intro">Fields marked with * are required.</p>
                      <form className="paw-form" onSubmit={submit}>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="contactName">Your name *</label>
                            <input className="form-control" id="contactName" name="name" value={form.name} onChange={update} required placeholder="Your full name" />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label" htmlFor="contactPhone">Phone number</label>
                            <input className="form-control" id="contactPhone" name="phone" type="tel" value={form.phone} onChange={update} placeholder="Your phone number" />
                          </div>
                          <div className="col-12">
                            <label className="form-label" htmlFor="contactEmail">Email address *</label>
                            <input className="form-control" id="contactEmail" name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com" />
                          </div>
                          <div className="col-12">
                            <label className="form-label" htmlFor="contactSubject">Subject</label>
                            <select className="form-select" id="contactSubject" name="subject" value={form.subject} onChange={update}>
                              <option>General enquiry</option>
                              <option>Grooming services</option>
                              <option>Product question</option>
                              <option>Appointment enquiry</option>
                              <option>Feedback</option>
                            </select>
                          </div>
                          <div className="col-12">
                            <label className="form-label" htmlFor="contactMessage">Your message *</label>
                            <textarea className="form-control" id="contactMessage" name="message" rows="5" value={form.message} onChange={update} required placeholder="Tell us what's on your mind..." />
                          </div>
                          <div className="col-12">
                            <button type="submit" className="btn paw-btn paw-btn-primary w-100">Send Enquiry <i className="bi bi-arrow-up-right" /></button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}