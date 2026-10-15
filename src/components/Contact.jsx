
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Products", "/products"], ["Contact", "/contact"]];
  return (
    <nav className="navbar navbar-expand-lg paw-navbar sticky-top"><div className="container">
      <Link className="navbar-brand paw-brand" to="/"><img src="/logo.png" alt="Pawfect Spa" /><span>Pawfect Spa<small>GENTLE CARE FOR EVERY PAW</small></span></Link>
      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#contactNav" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
      <div className="collapse navbar-collapse" id="contactNav"><ul className="navbar-nav ms-auto align-items-lg-center">
        {links.map(([n, p]) => <li className="nav-item" key={p}><NavLink end={p === "/"} className="nav-link" to={p}>{n}</NavLink></li>)}
        <li className="nav-item ms-lg-3"><Link className="btn paw-btn" to="/contact">Book Now</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
      </ul></div>
    </div></nav>
  );
}

function Footer() {
  return <footer className="paw-footer"><div className="container"><div className="row g-4">
    <div className="col-md-5"><h3>Pawfect Spa</h3><p>Thoughtful grooming for every paw.</p></div>
    <div className="col-6 col-md-3"><h6>Explore</h6><Link to="/about">About</Link><Link to="/services">Services</Link></div>
    <div className="col-6 col-md-4"><h6>Shop</h6><Link to="/products">Products</Link><Link to="/cart">Cart</Link></div>
  </div><hr /><p className="copyright">© {new Date().getFullYear()} Pawfect Spa</p></div></footer>;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", pet: "",
    service: "Signature Bath", date: "", message: ""
  });
  const [sent, setSent] = useState(false);

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  }

  function submit(e) {
    e.preventDefault();
    const enquiries = JSON.parse(localStorage.getItem("pawInquiries") || "[]");
    enquiries.push({ ...form, createdAt: new Date().toISOString() });
    localStorage.setItem("pawInquiries", JSON.stringify(enquiries));
    setSent(true);
    setForm({ name: "", email: "", pet: "", service: "Signature Bath", date: "", message: "" });
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero"><div className="container text-center">
          <span className="eyebrow">SAY HELLO</span><h1>Let's talk tails</h1>
          <p>Tell us what your pet needs, and we'll help you plan a visit.</p>
        </div></section>
        <section className="section-pad"><div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <span className="eyebrow">WE'RE HERE TO HELP</span>
              <h2>Every good visit starts with a hello.</h2>
              <p>Share your pet's details and preferred service with us.</p>
              <div className="contact-detail"><i className="bi bi-envelope" /><span><b>Email</b><br />hello@pawfectspa.example</span></div>
              <div className="contact-detail"><i className="bi bi-clock" /><span><b>Opening hours</b><br />Mon–Sat · 9 AM–6 PM</span></div>
              <p className="small">Demo website: enquiries are stored locally in your browser.</p>
            </div>
            <div className="col-lg-7">
              <form className="contact-form" onSubmit={submit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Your name</label>
                    <input className="form-control" name="name" value={form.name} onChange={update} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={update} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Pet's name</label>
                    <input className="form-control" name="pet" value={form.pet} onChange={update} required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Preferred date</label>
                    <input type="date" min={new Date().toISOString().slice(0, 10)} className="form-control" name="date" value={form.date} onChange={update} />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Service</label>
                    <select className="form-select" name="service" value={form.service} onChange={update}>
                      {["Signature Bath", "Haircut & Styling", "Nail & Paw Care", "Full Grooming", "De-shedding", "Puppy Introduction"].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label">Additional details</label>
                    <textarea className="form-control" rows="4" name="message" value={form.message} onChange={update} placeholder="Breed, size, grooming needs..." />
                  </div>
                  <div className="col-12"><button className="btn paw-btn btn-lg" type="submit">Send Enquiry</button></div>
                  {sent && <div className="col-12"><p className="success-message">Thank you! Your enquiry has been saved in this browser.</p></div>}
                </div>
              </form>
            </div>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
