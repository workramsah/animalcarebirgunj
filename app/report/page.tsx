"use client";
import { useState } from "react";
import { MapPin, Upload, CheckCircle, AlertTriangle } from "lucide-react";

export default function ReportAnimalPage() {
  const [form, setForm] = useState({
    reporterName: "",
    reporterPhone: "",
    reporterEmail: "",
    animalDescription: "",
    location: "",
    situation: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-12 border border-[#e2e8f0] max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#16a34a]" />
          </div>
          <h2 className="text-[#1a202c] mb-3" style={{ fontSize: "28px", fontWeight: 800 }}>Report Received</h2>
          <p className="text-[#64748b] mb-2">Thank you, {form.reporterName}. Our rescue team has been notified.</p>
          <p className="text-[#64748b] text-sm mb-2">We will contact you at <strong>{form.reporterPhone}</strong> within 30 minutes.</p>
          <div className="bg-[#eff6ff] rounded-xl p-4 my-6 text-left">
            <div className="text-[#1a56db] text-sm" style={{ fontWeight: 600 }}>Report Reference: #ACB-{Math.floor(Math.random() * 9000 + 1000)}</div>
            <div className="text-[#64748b] text-xs mt-1">Please save this reference number for follow-up.</div>
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm({ reporterName: "", reporterPhone: "", reporterEmail: "", animalDescription: "", location: "", situation: "" }); setFiles([]); }}
            className="bg-[#1a56db] hover:bg-[#1340a8] text-white px-8 py-3 rounded-xl transition-colors text-sm"
            style={{ fontWeight: 600 }}
          >
            Submit Another Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-[#dc2626] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-10 h-10 text-white mx-auto mb-3" />
          <h1 className="text-white mb-3" style={{ fontSize: "38px", fontWeight: 800 }}>Report an Injured Animal</h1>
          <p className="text-red-100">Found a hurt or stray animal? Report it and our rescue team will respond quickly.</p>
        </div>
      </section>

      {/* Emergency Banner */}
      <div className="bg-[#fff7ed] border-b border-[#fed7aa]">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-3 text-sm">
          <AlertTriangle className="w-4 h-4 text-[#f59e0b] flex-shrink-0" />
          <span className="text-[#92400e]"><strong>Emergency?</strong> Call us directly at <strong>+977 980-XXXXXX</strong> for immediate rescue assistance.</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#e2e8f0] space-y-6">
          {/* Reporter Info */}
          <div>
            <h2 className="text-[#1a202c] mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>Your Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Your Name *</label>
                <input
                  required
                  placeholder="Full Name"
                  value={form.reporterName}
                  onChange={(e) => setForm({ ...form, reporterName: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                />
              </div>
              <div>
                <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Phone Number *</label>
                <input
                  required
                  placeholder="+977 98XXXXXXXX"
                  value={form.reporterPhone}
                  onChange={(e) => setForm({ ...form, reporterPhone: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.reporterEmail}
                  onChange={(e) => setForm({ ...form, reporterEmail: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-[#e2e8f0] pt-6">
            <h2 className="text-[#1a202c] mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>Animal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Animal Description *</label>
                <input
                  required
                  placeholder="e.g., Brown dog, medium size, limping on left leg"
                  value={form.animalDescription}
                  onChange={(e) => setForm({ ...form, animalDescription: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                />
              </div>
              <div>
                <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>
                  <MapPin className="w-3.5 h-3.5 inline mr-1" />
                  Location / Address *
                </label>
                <input
                  required
                  placeholder="e.g., Near Birgunj Bus Park, Adarsha Nagar, Birgunj-5"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                />
              </div>
              {/* Map Placeholder */}
              <div className="h-44 bg-[#f1f5f9] rounded-xl border border-[#e2e8f0] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-[#94a3b8] mx-auto mb-2" />
                  <p className="text-[#94a3b8] text-sm">Map integration placeholder</p>
                  <p className="text-[#cbd5e1] text-xs">Click to pin exact location</p>
                </div>
              </div>
              <div>
                <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Situation / Problem Description *</label>
                <textarea
                  required
                  placeholder="Describe the animal's condition, injuries, and any immediate dangers..."
                  value={form.situation}
                  onChange={(e) => setForm({ ...form, situation: e.target.value })}
                  rows={4}
                  className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] resize-none"
                />
              </div>
            </div>
          </div>

          {/* Photo Upload */}
          <div className="border-t border-[#e2e8f0] pt-6">
            <h2 className="text-[#1a202c] mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>Photos / Videos</h2>
            <label className="block cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
              />
              <div className="border-2 border-dashed border-[#e2e8f0] rounded-xl p-8 text-center hover:border-[#1a56db] hover:bg-[#eff6ff] transition-colors">
                <Upload className="w-8 h-8 text-[#94a3b8] mx-auto mb-3" />
                <p className="text-[#475569] text-sm mb-1">Click to upload photos or videos</p>
                <p className="text-[#94a3b8] text-xs">JPEG, PNG, MP4 — Max 10MB each</p>
                {files.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2 justify-center">
                    {files.map((f, i) => (
                      <span key={i} className="bg-[#eff6ff] text-[#1a56db] text-xs px-2.5 py-1 rounded-full">{f.name}</span>
                    ))}
                  </div>
                )}
              </div>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-4 rounded-xl transition-colors"
            style={{ fontWeight: 700, fontSize: "16px" }}
          >
            Submit Emergency Report
          </button>
        </form>
      </div>
    </div>
  );
}
