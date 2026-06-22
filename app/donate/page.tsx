"use client";
import { useState } from "react";
import { Heart, Syringe, Home, Utensils, CheckCircle } from "lucide-react";

const presetAmounts = [100, 500, 1000, 5000];

const impacts = [
  { icon: Utensils, title: "NPR 100", desc: "Feeds one rescued animal for a day with nutritious meals." },
  { icon: Syringe, title: "NPR 500", desc: "Covers vaccinations and basic medical checkup for one animal." },
  { icon: Heart, title: "NPR 1,000", desc: "Provides one week of full care including food, shelter, and medication." },
  { icon: Home, title: "NPR 5,000", desc: "Sponsors one animal's complete rehabilitation program and adoption prep." },
];

export default function DonatePage() {
  const [amount, setAmount] = useState<number | null>(500);
  const [custom, setCustom] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const finalAmount = custom ? Number(custom) : amount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!finalAmount || finalAmount < 1) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-12 border border-[#e2e8f0] max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#dcfce7] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-[#16a34a]" />
          </div>
          <h2 className="text-[#1a202c] mb-3" style={{ fontSize: "28px", fontWeight: 800 }}>Thank You!</h2>
          <p className="text-[#64748b] mb-2">
            Your donation of <strong>NPR {finalAmount?.toLocaleString()}</strong> has been recorded.
          </p>
          <p className="text-[#64748b] text-sm mb-8">
            We'll send a confirmation to <strong>{form.email}</strong>. Your generosity directly saves animal lives in Birgunj.
          </p>
          <button
            onClick={() => { setSubmitted(false); setAmount(500); setCustom(""); setForm({ name: "", email: "", phone: "", message: "" }); }}
            className="bg-[#1a56db] hover:bg-[#1340a8] text-white px-8 py-3 rounded-xl transition-colors text-sm"
            style={{ fontWeight: 600 }}
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-[#1a56db] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-3" style={{ fontSize: "38px", fontWeight: 800 }}>Make a Donation</h1>
          <p className="text-[#bfdbfe]">Your contribution directly saves animal lives. Every rupee counts.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-[#e2e8f0]">
            <h2 className="text-[#1a202c] mb-6" style={{ fontSize: "22px", fontWeight: 700 }}>Donation Details</h2>

            {/* Amount Selector */}
            <div className="mb-6">
              <label className="text-[#475569] text-sm mb-3 block" style={{ fontWeight: 500 }}>Select Amount (NPR)</label>
              <div className="grid grid-cols-4 gap-3 mb-3">
                {presetAmounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => { setAmount(a); setCustom(""); }}
                    className={`py-2.5 rounded-lg text-sm border transition-all ${
                      amount === a && !custom
                        ? "bg-[#1a56db] border-[#1a56db] text-white"
                        : "bg-[#f8fafc] border-[#e2e8f0] text-[#475569] hover:border-[#1a56db] hover:text-[#1a56db]"
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {a.toLocaleString()}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                value={custom}
                onChange={(e) => { setCustom(e.target.value); setAmount(null); }}
                className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Full Name *</label>
                  <input
                    required
                    placeholder="Ramesh Thapa"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                  />
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Email Address *</label>
                  <input
                    required
                    type="email"
                    placeholder="ramesh@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                  />
                </div>
              </div>
              <div>
                <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Phone Number</label>
                <input
                  placeholder="+977 98XXXXXXXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                />
              </div>
              <div>
                <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Message (optional)</label>
                <textarea
                  placeholder="Any special message or dedication..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] resize-none"
                />
              </div>

              {finalAmount && finalAmount > 0 && (
                <div className="bg-[#eff6ff] rounded-xl p-4 flex items-center justify-between">
                  <span className="text-[#1a56db] text-sm" style={{ fontWeight: 500 }}>Total Donation</span>
                  <span className="text-[#1a56db]" style={{ fontWeight: 800, fontSize: "20px" }}>NPR {finalAmount.toLocaleString()}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={!finalAmount || finalAmount < 1 || !form.name || !form.email}
                className="w-full bg-[#f59e0b] hover:bg-[#d97706] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 rounded-xl transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Heart className="w-4 h-4 inline mr-2" />
                Donate NPR {finalAmount ? finalAmount.toLocaleString() : "—"}
              </button>
              <p className="text-[#94a3b8] text-xs text-center">This is a UI demonstration. No payment will be processed.</p>
            </form>
          </div>

          {/* Impact */}
          <div className="lg:col-span-2">
            <h3 className="text-[#1a202c] mb-5" style={{ fontSize: "18px", fontWeight: 700 }}>Your Donation Impact</h3>
            <div className="space-y-4">
              {impacts.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-xl p-5 border border-[#e2e8f0] flex gap-4">
                  <div className="w-10 h-10 bg-[#eff6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#1a56db]" />
                  </div>
                  <div>
                    <div className="text-[#1a202c] text-sm mb-1" style={{ fontWeight: 600 }}>{title}</div>
                    <div className="text-[#64748b] text-sm" style={{ lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#fff7ed] rounded-xl p-5 border border-[#fed7aa]">
              <h4 className="text-[#92400e] mb-2" style={{ fontSize: "14px", fontWeight: 700 }}>Bank Transfer</h4>
              <div className="text-[#78350f] text-sm space-y-1">
                <p><strong>Account Name:</strong> Animal Care Birgunj</p>
                <p><strong>Bank:</strong> Rastriya Banijya Bank</p>
                <p><strong>Account No:</strong> 1234-5678-9012</p>
                <p><strong>Branch:</strong> Birgunj Main Branch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
