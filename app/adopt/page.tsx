"use client";
import { useState } from "react";
import { Search, Filter, X } from "lucide-react";

interface Animal {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: string;
  gender: string;
  status: string;
  img: string;
  desc: string;
}

const animals: Animal[] = [
  { id: 1, name: "Bhuri", species: "Dog", breed: "Mixed Breed", age: "2 years", gender: "Female", status: "Available", img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop&auto=format", desc: "Bhuri is a gentle, playful dog who loves cuddles and long walks. She is vaccinated and spayed." },
  { id: 2, name: "Kalu", species: "Cat", breed: "Domestic Shorthair", age: "1 year", gender: "Male", status: "Available", img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop&auto=format", desc: "Kalu is an affectionate indoor cat, great with children and other pets." },
  { id: 3, name: "Moti", species: "Dog", breed: "Labrador Mix", age: "3 years", gender: "Male", status: "Available", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&auto=format", desc: "Moti is a loyal and energetic dog. Fully vaccinated and neutered, loves outdoor activities." },
  { id: 4, name: "Gori", species: "Dog", breed: "Indian Spitz", age: "6 months", gender: "Female", status: "Available", img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop&auto=format", desc: "Gori is a small, fluffy puppy with lots of energy. Great for families." },
  { id: 5, name: "Raja", species: "Dog", breed: "German Shepherd Mix", age: "4 years", gender: "Male", status: "Adopted", img: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop&auto=format", desc: "Raja found his forever home last month. Thank you to the Sharma family!" },
  { id: 6, name: "Mitthu", species: "Cat", breed: "Persian Mix", age: "2 years", gender: "Female", status: "Available", img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=300&fit=crop&auto=format", desc: "Mitthu is a calm, elegant cat who loves window spots and quiet homes." },
  { id: 7, name: "Sona", species: "Dog", breed: "Beagle Mix", age: "1 year", gender: "Female", status: "Injured", img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400&h=300&fit=crop&auto=format", desc: "Sona is recovering from a leg injury and will be available for adoption soon." },
  { id: 8, name: "Tikka", species: "Cat", breed: "Tabby", age: "3 years", gender: "Male", status: "Available", img: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=400&h=300&fit=crop&auto=format", desc: "Tikka is an independent, low-maintenance cat, perfect for working professionals." },
  { id: 9, name: "Bahadur", species: "Dog", breed: "Rottweiler Mix", age: "5 years", gender: "Male", status: "Available", img: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=400&h=300&fit=crop&auto=format", desc: "Bahadur is a gentle giant with a calm temperament. Neutered and fully vaccinated." },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Available: { bg: "#dcfce7", text: "#16a34a" },
  Adopted: { bg: "#dbeafe", text: "#1a56db" },
  Injured: { bg: "#fee2e2", text: "#dc2626" },
};

export default function AdoptPage() {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [filterSpecies, setFilterSpecies] = useState("All");
  const [filterGender, setFilterGender] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = animals.filter((a) => {
    if (filterSpecies !== "All" && a.species !== filterSpecies) return false;
    if (filterGender !== "All" && a.gender !== filterGender) return false;
    if (filterStatus !== "All" && a.status !== filterStatus) return false;
    if (search && !a.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (selectedAnimal) {
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => { setSelectedAnimal(null); setSubmitted(false); }}
            className="flex items-center gap-2 text-[#1a56db] mb-8 hover:text-[#1340a8] text-sm"
            style={{ fontWeight: 500 }}
          >
            ← Back to all animals
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="rounded-2xl overflow-hidden mb-4">
                <img src={selectedAnimal.img} alt={selectedAnimal.name} className="w-full h-72 object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[selectedAnimal.img, selectedAnimal.img, selectedAnimal.img].map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden">
                    <img src={img} alt="" className="w-full h-20 object-cover opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-[#1a202c]" style={{ fontSize: "32px", fontWeight: 800 }}>{selectedAnimal.name}</h1>
                <span
                  className="text-xs px-2.5 py-1 rounded-full"
                  style={{ fontWeight: 600, background: statusColors[selectedAnimal.status].bg, color: statusColors[selectedAnimal.status].text }}
                >
                  {selectedAnimal.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  ["Species", selectedAnimal.species],
                  ["Breed", selectedAnimal.breed],
                  ["Age", selectedAnimal.age],
                  ["Gender", selectedAnimal.gender],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#f8fafc] rounded-lg px-4 py-3">
                    <div className="text-[#94a3b8] text-xs">{label}</div>
                    <div className="text-[#1a202c] text-sm" style={{ fontWeight: 600 }}>{value}</div>
                  </div>
                ))}
              </div>
              <p className="text-[#475569] mb-6" style={{ lineHeight: 1.8 }}>{selectedAnimal.desc}</p>

              {selectedAnimal.status === "Available" && (
                <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
                  <h3 className="text-[#1a202c] mb-4" style={{ fontSize: "18px", fontWeight: 700 }}>Adoption Inquiry</h3>
                  {submitted ? (
                    <div className="bg-[#dcfce7] text-[#16a34a] rounded-xl p-4 text-center text-sm" style={{ fontWeight: 500 }}>
                      ✓ Your inquiry has been submitted! We'll contact you within 24 hours.
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                      <input
                        required
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                      />
                      <input
                        required
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                      />
                      <input
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
                      />
                      <textarea
                        placeholder="Tell us about yourself and your home environment"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] resize-none"
                      />
                      <button type="submit" className="w-full bg-[#1a56db] hover:bg-[#1340a8] text-white py-3 rounded-lg transition-colors text-sm" style={{ fontWeight: 600 }}>
                        Submit Adoption Inquiry
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-[#1a56db] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-3" style={{ fontSize: "38px", fontWeight: 800 }}>Adopt an Animal</h1>
          <p className="text-[#bfdbfe]">Every animal deserves a loving home. Find your perfect companion today.</p>
        </div>
      </section>

      {/* Filters */}
      <div className="bg-white border-b border-[#e2e8f0] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
              <input
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-[#e2e8f0] rounded-lg text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc]"
              />
            </div>
            {[
              { label: "Species", state: filterSpecies, set: setFilterSpecies, options: ["All", "Dog", "Cat"] },
              { label: "Gender", state: filterGender, set: setFilterGender, options: ["All", "Male", "Female"] },
              { label: "Status", state: filterStatus, set: setFilterStatus, options: ["All", "Available", "Adopted", "Injured"] },
            ].map(({ label, state, set, options }) => (
              <select
                key={label}
                value={state}
                onChange={(e) => set(e.target.value)}
                className="border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#1a56db] bg-[#f8fafc] text-[#475569]"
              >
                {options.map((o) => <option key={o}>{o === "All" ? `${label}: All` : o}</option>)}
              </select>
            ))}
            {(filterSpecies !== "All" || filterGender !== "All" || filterStatus !== "All" || search) && (
              <button
                onClick={() => { setFilterSpecies("All"); setFilterGender("All"); setFilterStatus("All"); setSearch(""); }}
                className="flex items-center gap-1 text-[#dc2626] text-sm"
                style={{ fontWeight: 500 }}
              >
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-[#64748b] text-sm mb-6">{filtered.length} animal{filtered.length !== 1 ? "s" : ""} found</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-xl overflow-hidden border border-[#e2e8f0] hover:border-[#93c5fd] transition-all hover:shadow-md cursor-pointer"
              onClick={() => setSelectedAnimal(animal)}
            >
              <div className="relative">
                <img src={animal.img} alt={animal.name} className="w-full h-52 object-cover" />
                <span
                  className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full"
                  style={{ fontWeight: 600, background: statusColors[animal.status].bg, color: statusColors[animal.status].text }}
                >
                  {animal.status}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-[#1a202c]" style={{ fontSize: "18px", fontWeight: 700 }}>{animal.name}</h3>
                <p className="text-[#64748b] text-sm mt-1">{animal.breed} · {animal.age} · {animal.gender}</p>
                <p className="text-[#94a3b8] text-sm mt-2 line-clamp-2">{animal.desc}</p>
                <button className="mt-4 w-full bg-[#eff6ff] hover:bg-[#dbeafe] text-[#1a56db] py-2.5 rounded-lg text-sm transition-colors" style={{ fontWeight: 600 }}>
                  View Details →
                </button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-20 text-[#94a3b8]">
              <Filter className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No animals match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
