"use client";
import { useState } from "react";
import {
  LayoutDashboard, FileText, PlusCircle, Dog, DollarSign,
  AlertTriangle, LogOut, Eye, Edit2, Trash2, Check, X,
  TrendingUp, Users, Heart, Menu
} from "lucide-react";

type AdminView = "login" | "dashboard" | "article-new" | "animal-form" | "donations" | "reports";

const recentReports = [
  { id: "ACB-1042", reporter: "Ramesh KC", location: "Ghadi Chowk, Birgunj-5", desc: "Injured dog, bleeding from paw", date: "Magh 14, 2081", status: "Resolved" },
  { id: "ACB-1043", reporter: "Sita Rai", location: "Adarsha Nagar, Birgunj-12", desc: "Stray cat with kittens, no shelter", date: "Magh 15, 2081", status: "In Progress" },
  { id: "ACB-1044", reporter: "Anil Sharma", location: "Bus Park Area, Birgunj-1", desc: "Dog hit by vehicle, unable to walk", date: "Magh 15, 2081", status: "Pending" },
  { id: "ACB-1045", reporter: "Priya Devi", location: "Maisthan, Birgunj-8", desc: "Abandoned puppies (4), very young", date: "Magh 16, 2081", status: "In Progress" },
];

const donations = [
  { id: "DON-0201", name: "Suresh Thapa", email: "suresh@email.com", amount: 2000, date: "Magh 15, 2081", message: "Keep up the great work!" },
  { id: "DON-0202", name: "Anita Jha", email: "anita@email.com", amount: 500, date: "Magh 14, 2081", message: "" },
  { id: "DON-0203", name: "Birgunj Lions Club", email: "lions@birgunj.org", amount: 25000, date: "Magh 12, 2081", message: "Monthly contribution" },
  { id: "DON-0204", name: "Mohan Yadav", email: "mohan@email.com", amount: 1000, date: "Magh 10, 2081", message: "For medical care" },
  { id: "DON-0205", name: "Priya Sharma", email: "priya@email.com", amount: 5000, date: "Magh 8, 2081", message: "In memory of my pet" },
];

const statusBadge = (status: string) => {
  const map: Record<string, { bg: string; text: string }> = {
    Resolved: { bg: "#dcfce7", text: "#16a34a" },
    "In Progress": { bg: "#fef3c7", text: "#92400e" },
    Pending: { bg: "#fee2e2", text: "#dc2626" },
  };
  const s = map[status] || { bg: "#f1f5f9", text: "#64748b" };
  return (
    <span className="text-xs px-2.5 py-1 rounded-full" style={{ fontWeight: 600, background: s.bg, color: s.text }}>
      {status}
    </span>
  );
};

export default function AdminPage() {
  const [view, setView] = useState<AdminView>("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [articleForm, setArticleForm] = useState({ title: "", category: "", body: "", thumbnail: "" });
  const [animalForm, setAnimalForm] = useState({ name: "", species: "", breed: "", age: "", gender: "", status: "Available", desc: "" });
  const [articleSaved, setArticleSaved] = useState(false);
  const [animalSaved, setAnimalSaved] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email === "admin@animalcarebirgunj.com" && loginData.password === "admin123") {
      setView("dashboard");
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (view === "login") {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#1a56db] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-white fill-white" />
            </div>
            <h1 className="text-[#1a202c]" style={{ fontSize: "24px", fontWeight: 800 }}>Admin Panel</h1>
            <p className="text-[#64748b] text-sm mt-1">Animal Care Birgunj</p>
          </div>
          <form onSubmit={handleLogin} className="bg-white rounded-2xl p-8 border border-[#e2e8f0] space-y-4">
            {loginError && (
              <div className="bg-[#fee2e2] text-[#dc2626] text-sm rounded-lg px-4 py-3">
                Invalid email or password. Try admin@animalcarebirgunj.com / admin123
              </div>
            )}
            <div>
              <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Email</label>
              <input
                type="email" required placeholder="admin@animalcarebirgunj.com"
                value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
              />
            </div>
            <div>
              <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Password</label>
              <input
                type="password" required placeholder="••••••••"
                value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
              />
            </div>
            <button type="submit" className="w-full bg-[#1a56db] hover:bg-[#1340a8] text-white py-2.5 rounded-lg transition-colors text-sm" style={{ fontWeight: 600 }}>
              Sign In
            </button>
            <p className="text-[#94a3b8] text-xs text-center">Demo: admin@animalcarebirgunj.com / admin123</p>
          </form>
        </div>
      </div>
    );
  }

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "article-new", label: "Post Article", icon: PlusCircle },
    { id: "animal-form", label: "Add Animal", icon: Dog },
    { id: "donations", label: "Donations", icon: DollarSign },
    { id: "reports", label: "Animal Reports", icon: AlertTriangle },
  ];

  const Sidebar = () => (
    <aside className="w-56 bg-[#1a202c] min-h-screen flex flex-col">
      <div className="p-5 border-b border-[#2d3748]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1a56db] rounded-lg flex items-center justify-center">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
          <div>
            <div className="text-white text-sm" style={{ fontWeight: 700 }}>ACB Admin</div>
            <div className="text-[#64748b] text-xs">Dashboard</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => { setView(id as AdminView); setSidebarOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              view === id ? "bg-[#1a56db] text-white" : "text-[#94a3b8] hover:bg-[#2d3748] hover:text-white"
            }`}
            style={{ fontWeight: view === id ? 600 : 400 }}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </nav>
      <div className="p-3">
        <button
          onClick={() => setView("login")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#94a3b8] hover:bg-[#2d3748] hover:text-white transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  );

  const renderContent = () => {
    switch (view) {
      case "dashboard":
        return (
          <div className="p-6">
            <h1 className="text-[#1a202c] mb-6" style={{ fontSize: "24px", fontWeight: 800 }}>Dashboard Overview</h1>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { icon: Dog, label: "Total Animals", value: "142", change: "+8 this week", color: "#1a56db", bg: "#eff6ff" },
                { icon: Users, label: "Total Adoptions", value: "870", change: "+12 this month", color: "#16a34a", bg: "#dcfce7" },
                { icon: DollarSign, label: "Donations (NPR)", value: "4,82,000", change: "+NPR 25,000 today", color: "#f59e0b", bg: "#fef3c7" },
                { icon: AlertTriangle, label: "Open Reports", value: "7", change: "3 pending action", color: "#dc2626", bg: "#fee2e2" },
              ].map(({ icon: Icon, label, value, change, color, bg }) => (
                <div key={label} className="bg-white rounded-xl p-5 border border-[#e2e8f0]">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[#64748b] text-xs" style={{ fontWeight: 500 }}>{label}</div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: bg }}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                  </div>
                  <div className="text-[#1a202c]" style={{ fontSize: "24px", fontWeight: 800 }}>{value}</div>
                  <div className="text-[#64748b] text-xs mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#16a34a]" />{change}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] mb-6">
              <div className="flex items-center justify-between p-5 border-b border-[#e2e8f0]">
                <h2 className="text-[#1a202c]" style={{ fontSize: "16px", fontWeight: 700 }}>Recent Animal Reports</h2>
                <button onClick={() => setView("reports")} className="text-[#1a56db] text-sm" style={{ fontWeight: 500 }}>View All →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      {["ID", "Reporter", "Location", "Status", "Action"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 text-[#64748b] text-xs" style={{ fontWeight: 600 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {recentReports.slice(0, 3).map((r) => (
                      <tr key={r.id} className="border-t border-[#f1f5f9] hover:bg-[#f8fafc]">
                        <td className="px-5 py-3 text-[#1a56db] text-xs" style={{ fontWeight: 600 }}>{r.id}</td>
                        <td className="px-5 py-3 text-[#1a202c] text-sm">{r.reporter}</td>
                        <td className="px-5 py-3 text-[#64748b] text-xs">{r.location}</td>
                        <td className="px-5 py-3">{statusBadge(r.status)}</td>
                        <td className="px-5 py-3">
                          <button className="text-[#1a56db] hover:text-[#1340a8]"><Eye className="w-4 h-4" /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Donations */}
            <div className="bg-white rounded-xl border border-[#e2e8f0]">
              <div className="flex items-center justify-between p-5 border-b border-[#e2e8f0]">
                <h2 className="text-[#1a202c]" style={{ fontSize: "16px", fontWeight: 700 }}>Recent Donations</h2>
                <button onClick={() => setView("donations")} className="text-[#1a56db] text-sm" style={{ fontWeight: 500 }}>View All →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      {["Donor", "Amount", "Date", "Message"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 text-[#64748b] text-xs" style={{ fontWeight: 600 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {donations.slice(0, 3).map((d) => (
                      <tr key={d.id} className="border-t border-[#f1f5f9] hover:bg-[#f8fafc]">
                        <td className="px-5 py-3">
                          <div className="text-[#1a202c] text-sm" style={{ fontWeight: 500 }}>{d.name}</div>
                          <div className="text-[#94a3b8] text-xs">{d.email}</div>
                        </td>
                        <td className="px-5 py-3 text-[#16a34a]" style={{ fontWeight: 700 }}>NPR {d.amount.toLocaleString()}</td>
                        <td className="px-5 py-3 text-[#64748b] text-xs">{d.date}</td>
                        <td className="px-5 py-3 text-[#64748b] text-xs">{d.message || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case "article-new":
        return (
          <div className="p-6 max-w-3xl">
            <h1 className="text-[#1a202c] mb-6" style={{ fontSize: "24px", fontWeight: 800 }}>Post New Article</h1>
            {articleSaved ? (
              <div className="bg-[#dcfce7] border border-[#bbf7d0] rounded-xl p-5 flex items-center gap-3">
                <Check className="w-5 h-5 text-[#16a34a]" />
                <div>
                  <div className="text-[#166534]" style={{ fontWeight: 600 }}>Article Published!</div>
                  <div className="text-[#16a34a] text-sm">"{articleForm.title}" has been published successfully.</div>
                </div>
                <button onClick={() => { setArticleSaved(false); setArticleForm({ title: "", category: "", body: "", thumbnail: "" }); }}
                  className="ml-auto text-[#16a34a]"><X className="w-4 h-4" /></button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setArticleSaved(true); }} className="bg-white rounded-2xl p-8 border border-[#e2e8f0] space-y-5">
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Article Title *</label>
                  <input required placeholder="Enter article title" value={articleForm.title} onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                    className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]" />
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Category *</label>
                  <select required value={articleForm.category} onChange={(e) => setArticleForm({ ...articleForm, category: e.target.value })}
                    className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] text-[#475569]">
                    <option value="">Select Category</option>
                    <option>Rescue Stories</option>
                    <option>Health Tips</option>
                    <option>Adoption</option>
                    <option>Community</option>
                  </select>
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Thumbnail Image URL</label>
                  <input placeholder="https://..." value={articleForm.thumbnail} onChange={(e) => setArticleForm({ ...articleForm, thumbnail: e.target.value })}
                    className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]" />
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Article Body *</label>
                  <textarea required placeholder="Write your article content here..." value={articleForm.body} onChange={(e) => setArticleForm({ ...articleForm, body: e.target.value })}
                    rows={10} className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] resize-y" />
                </div>
                <div className="flex gap-3">
                  <button type="submit" className="bg-[#1a56db] hover:bg-[#1340a8] text-white px-6 py-2.5 rounded-lg text-sm transition-colors" style={{ fontWeight: 600 }}>
                    Publish Article
                  </button>
                  <button type="button" className="bg-[#f8fafc] border border-[#e2e8f0] text-[#475569] px-6 py-2.5 rounded-lg text-sm hover:bg-[#f1f5f9] transition-colors" style={{ fontWeight: 500 }}>
                    Save Draft
                  </button>
                </div>
              </form>
            )}
          </div>
        );

      case "animal-form":
        return (
          <div className="p-6 max-w-3xl">
            <h1 className="text-[#1a202c] mb-6" style={{ fontSize: "24px", fontWeight: 800 }}>Add / Edit Animal</h1>
            {animalSaved ? (
              <div className="bg-[#dcfce7] border border-[#bbf7d0] rounded-xl p-5 flex items-center gap-3">
                <Check className="w-5 h-5 text-[#16a34a]" />
                <div>
                  <div className="text-[#166534]" style={{ fontWeight: 600 }}>Animal Saved!</div>
                  <div className="text-[#16a34a] text-sm">"{animalForm.name}" has been added to the adoption portal.</div>
                </div>
                <button onClick={() => { setAnimalSaved(false); setAnimalForm({ name: "", species: "", breed: "", age: "", gender: "", status: "Available", desc: "" }); }}
                  className="ml-auto text-[#16a34a]"><X className="w-4 h-4" /></button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setAnimalSaved(true); }} className="bg-white rounded-2xl p-8 border border-[#e2e8f0] space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Animal Name *</label>
                    <input required placeholder="e.g., Bhuri" value={animalForm.name} onChange={(e) => setAnimalForm({ ...animalForm, name: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]" />
                  </div>
                  <div>
                    <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Species *</label>
                    <select required value={animalForm.species} onChange={(e) => setAnimalForm({ ...animalForm, species: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] text-[#475569]">
                      <option value="">Select Species</option>
                      <option>Dog</option><option>Cat</option><option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Breed</label>
                    <input placeholder="e.g., Mixed Breed" value={animalForm.breed} onChange={(e) => setAnimalForm({ ...animalForm, breed: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]" />
                  </div>
                  <div>
                    <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Age</label>
                    <input placeholder="e.g., 2 years" value={animalForm.age} onChange={(e) => setAnimalForm({ ...animalForm, age: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]" />
                  </div>
                  <div>
                    <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Gender</label>
                    <select value={animalForm.gender} onChange={(e) => setAnimalForm({ ...animalForm, gender: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] text-[#475569]">
                      <option value="">Select Gender</option>
                      <option>Male</option><option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Status</label>
                    <select value={animalForm.status} onChange={(e) => setAnimalForm({ ...animalForm, status: e.target.value })}
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] text-[#475569]">
                      <option>Available</option><option>Adopted</option><option>Injured</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Photos (Upload)</label>
                  <div className="border-2 border-dashed border-[#e2e8f0] rounded-xl p-6 text-center hover:border-[#1a56db] transition-colors cursor-pointer">
                    <p className="text-[#64748b] text-sm">Click to upload photos</p>
                    <p className="text-[#94a3b8] text-xs mt-1">JPEG, PNG — Max 5MB each</p>
                  </div>
                </div>
                <div>
                  <label className="text-[#475569] text-xs mb-1.5 block" style={{ fontWeight: 500 }}>Description *</label>
                  <textarea required placeholder="Describe the animal's personality, health, and history..." value={animalForm.desc} onChange={(e) => setAnimalForm({ ...animalForm, desc: e.target.value })}
                    rows={4} className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] resize-none" />
                </div>
                <button type="submit" className="bg-[#1a56db] hover:bg-[#1340a8] text-white px-6 py-2.5 rounded-lg text-sm transition-colors" style={{ fontWeight: 600 }}>
                  Save Animal
                </button>
              </form>
            )}
          </div>
        );

      case "donations":
        return (
          <div className="p-6">
            <h1 className="text-[#1a202c] mb-6" style={{ fontSize: "24px", fontWeight: 800 }}>Donation Submissions</h1>
            <div className="bg-white rounded-xl border border-[#e2e8f0]">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      {["ID", "Donor Name", "Email", "Amount (NPR)", "Date", "Message"].map((h) => (
                        <th key={h} className="text-left px-5 py-3 text-[#64748b] text-xs border-b border-[#e2e8f0]" style={{ fontWeight: 600 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {donations.map((d) => (
                      <tr key={d.id} className="border-t border-[#f1f5f9] hover:bg-[#f8fafc]">
                        <td className="px-5 py-3 text-[#94a3b8] text-xs">{d.id}</td>
                        <td className="px-5 py-3 text-[#1a202c] text-sm" style={{ fontWeight: 500 }}>{d.name}</td>
                        <td className="px-5 py-3 text-[#64748b] text-xs">{d.email}</td>
                        <td className="px-5 py-3 text-[#16a34a]" style={{ fontWeight: 700 }}>{d.amount.toLocaleString()}</td>
                        <td className="px-5 py-3 text-[#64748b] text-xs">{d.date}</td>
                        <td className="px-5 py-3 text-[#64748b] text-xs max-w-xs truncate">{d.message || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-[#e2e8f0] flex items-center justify-between">
                <span className="text-[#64748b] text-xs">{donations.length} entries</span>
                <span className="text-[#1a202c] text-sm" style={{ fontWeight: 700 }}>
                  Total: NPR {donations.reduce((s, d) => s + d.amount, 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        );

      case "reports":
        return (
          <div className="p-6">
            <h1 className="text-[#1a202c] mb-6" style={{ fontSize: "24px", fontWeight: 800 }}>Animal Reports</h1>
            <div className="bg-white rounded-xl border border-[#e2e8f0]">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#f8fafc]">
                      {["Report ID", "Reporter", "Location", "Description", "Date", "Status", "Actions"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-[#64748b] text-xs border-b border-[#e2e8f0]" style={{ fontWeight: 600 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {recentReports.map((r) => (
                      <tr key={r.id} className="border-t border-[#f1f5f9] hover:bg-[#f8fafc]">
                        <td className="px-4 py-3 text-[#1a56db] text-xs" style={{ fontWeight: 600 }}>{r.id}</td>
                        <td className="px-4 py-3 text-[#1a202c] text-sm">{r.reporter}</td>
                        <td className="px-4 py-3 text-[#64748b] text-xs max-w-[120px] truncate">{r.location}</td>
                        <td className="px-4 py-3 text-[#64748b] text-xs max-w-[160px] truncate">{r.desc}</td>
                        <td className="px-4 py-3 text-[#94a3b8] text-xs">{r.date}</td>
                        <td className="px-4 py-3">{statusBadge(r.status)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button className="text-[#1a56db] hover:text-[#1340a8] p-1 rounded"><Eye className="w-3.5 h-3.5" /></button>
                            <button className="text-[#64748b] hover:text-[#1a202c] p-1 rounded"><Edit2 className="w-3.5 h-3.5" /></button>
                            <button className="text-[#dc2626] hover:text-[#b91c1c] p-1 rounded"><Trash2 className="w-3.5 h-3.5" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Desktop Sidebar */}
      <div className="hidden md:block flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="w-56 flex-shrink-0">
            <Sidebar />
          </div>
          <div className="flex-1 bg-black/50" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white border-b border-[#e2e8f0] px-6 py-4 flex items-center gap-4">
          <button className="md:hidden text-[#475569]" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <span className="text-[#1a202c] text-sm" style={{ fontWeight: 600 }}>
              {navItems.find((n) => n.id === view)?.label || "Admin"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#eff6ff] rounded-full flex items-center justify-center">
              <span className="text-[#1a56db] text-xs" style={{ fontWeight: 700 }}>AD</span>
            </div>
            <span className="text-[#475569] text-sm hidden sm:block">Administrator</span>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
