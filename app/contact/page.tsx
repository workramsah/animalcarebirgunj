"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="bg-[#1a56db] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-3" style={{ fontSize: "38px", fontWeight: 800 }}>Contact Us</h1>
          <p className="text-[#bfdbfe]">We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-[#e2e8f0]">
            <h2 className="text-[#1a202c] mb-6" style={{ fontSize: "22px", fontWeight: 700 }}>Send Us a Message</h2>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#16a34a]" />
                </div>
                <h3 className="text-[#1a202c] mb-2" style={{ fontSize: "20px", fontWeight: 700 }}>Message Sent!</h3>
                <p className="text-[#64748b] text-sm mb-6">We'll get back to you at <strong>{form.email}</strong> within 24-48 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                  className="text-[#1a56db] text-sm"
                  style={{ fontWeight: 500 }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Full Name *</label>
                    <input required placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]" />
                  </div>
                  <div>
                    <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Email Address *</label>
                    <input required type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]" />
                  </div>
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Phone Number</label>
                  <input placeholder="+977 98XXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]" />
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Subject *</label>
                  <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] text-[#475569]">
                    <option value="">Select a subject</option>
                    <option>Adoption Inquiry</option>
                    <option>Donation Question</option>
                    <option>Volunteer Application</option>
                    <option>Report an Animal</option>
                    <option>Partnership Proposal</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Message *</label>
                  <textarea required placeholder="Your message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5} className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#1a56db] hover:bg-[#1340a8] text-white py-3 rounded-xl transition-colors text-sm" style={{ fontWeight: 600 }}>
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <h3 className="text-[#1a202c] mb-5" style={{ fontSize: "18px", fontWeight: 700 }}>Organization Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#1a56db]" />
                  </div>
                  <div>
                    <div className="text-[#1a202c] text-sm" style={{ fontWeight: 600 }}>Address</div>
                    <div className="text-[#64748b] text-sm">Birgunj, Parsa, Province 2<br />Nepal</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#1a56db]" />
                  </div>
                  <div>
                    <div className="text-[#1a202c] text-sm" style={{ fontWeight: 600 }}>Email</div>
                    <a href="mailto:info@animalcarebirgunj.com" className="text-[#1a56db] text-sm hover:underline">info@animalcarebirgunj.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#1a56db]" />
                  </div>
                  <div>
                    <div className="text-[#1a202c] text-sm" style={{ fontWeight: 600 }}>Phone</div>
                    <div className="text-[#64748b] text-sm">+977 980-XXXXXX (Rescue)<br />+977 980-YYYYYY (Office)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#1a56db]" />
                  </div>
                  <div>
                    <div className="text-[#1a202c] text-sm" style={{ fontWeight: 600 }}>Office Hours</div>
                    <div className="text-[#64748b] text-sm">Sun–Fri: 8:00 AM – 6:00 PM<br />Rescue Line: 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden">
              <div className="h-48 bg-[#f1f5f9] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-[#94a3b8] mx-auto mb-2" />
                  <p className="text-[#94a3b8] text-sm">Birgunj, Nepal</p>
                  <p className="text-[#cbd5e1] text-xs">Map placeholder</p>
                </div>
              </div>
              <div className="p-4 text-center">
                <a href="#" className="text-[#1a56db] text-sm" style={{ fontWeight: 500 }}>Open in Google Maps →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
