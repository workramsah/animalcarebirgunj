import { Heart, Syringe, Search, Home, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "1,240+", label: "Animals Rescued" },
  { value: "870+", label: "Successful Adoptions" },
  { value: "3,500+", label: "Medical Treatments" },
  { value: "120+", label: "Active Volunteers" },
];

const services = [
  {
    icon: Syringe,
    title: "Medical Care",
    desc: "Veterinary treatment, vaccinations, surgeries, and ongoing healthcare for injured and sick animals.",
    color: "#eff6ff",
    iconColor: "#1a56db",
  },
  {
    icon: Search,
    title: "Animal Rescue",
    desc: "24/7 emergency rescue operations for stray, injured, and abandoned animals across Birgunj.",
    color: "#fff7ed",
    iconColor: "#f59e0b",
  },
  {
    icon: Heart,
    title: "Rehabilitation",
    desc: "Specialized care programs to help animals recover and prepare for a loving forever home.",
    color: "#f0fdf4",
    iconColor: "#16a34a",
  },
  {
    icon: Home,
    title: "Adoption",
    desc: "Connecting rescued animals with caring families through our verified adoption program.",
    color: "#fdf4ff",
    iconColor: "#9333ea",
  },
];

const animals = [
  {
    name: "Bhuri",
    species: "Dog",
    breed: "Mixed Breed",
    age: "2 years",
    gender: "Female",
    status: "Available",
    img: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Kalu",
    species: "Cat",
    breed: "Domestic Shorthair",
    age: "1 year",
    gender: "Male",
    status: "Available",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop&auto=format",
  },
  {
    name: "Moti",
    species: "Dog",
    breed: "Labrador Mix",
    age: "3 years",
    gender: "Male",
    status: "Available",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop&auto=format",
  },
];

const articles = [
  {
    category: "Rescue Stories",
    title: "How We Saved 12 Dogs from Flooding in Narayani River Bank",
    date: "Magh 15, 2081 BS",
    excerpt: "A team of 8 volunteers worked through the night to rescue a group of stranded dogs when the river banks flooded after heavy monsoon rains.",
    img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400&h=250&fit=crop&auto=format",
  },
  {
    category: "Health Tips",
    title: "Essential Vaccination Guide for Pets in Nepal",
    date: "Poush 28, 2081 BS",
    excerpt: "Understanding which vaccines your pets need and when to get them is crucial for their health and the safety of the community.",
    img: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=250&fit=crop&auto=format",
  },
  {
    category: "Adoption",
    title: "Meet Sarita: How One Family Changed a Dog's Life Forever",
    date: "Poush 10, 2081 BS",
    excerpt: "Sarita the mixed-breed dog spent 8 months at our shelter before finding her perfect match — the Sharma family from Birgunj-12.",
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=250&fit=crop&auto=format",
  },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  Available: { bg: "#dcfce7", text: "#16a34a" },
  Adopted: { bg: "#dbeafe", text: "#1a56db" },
  Injured: { bg: "#fee2e2", text: "#dc2626" },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0f172a] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600&h=700&fit=crop&auto=format"
          alt="Happy dogs at animal shelter"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#f59e0b] text-white text-xs px-3 py-1 rounded-full mb-6" style={{ fontWeight: 600 }}>
              Birgunj, Nepal
            </span>
            <h1 className="text-white mb-6" style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.15 }}>
              Giving Animals a<br />
              <span className="text-[#f59e0b]">Second Chance</span>
            </h1>
            <p className="text-[#cbd5e1] mb-8" style={{ fontSize: "18px", lineHeight: 1.7 }}>
              Animal Care Birgunj rescues, rehabilitates, and rehomes animals in need. Every life matters — help us make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/adopt"
                className="flex items-center gap-2 bg-[#1a56db] hover:bg-[#1340a8] text-white px-6 py-3 rounded-xl transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Home className="w-5 h-5" />
                Adopt an Animal
              </Link>
              <Link
                href="/donate"
                className="flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-xl transition-colors"
                style={{ fontWeight: 600 }}
              >
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1a56db] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-white" style={{ fontSize: "32px", fontWeight: 800 }}>{stat.value}</div>
                <div className="text-[#bfdbfe]" style={{ fontSize: "13px", fontWeight: 400 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1a202c] mb-3" style={{ fontSize: "32px", fontWeight: 700 }}>What We Do</h2>
            <p className="text-[#64748b] max-w-xl mx-auto">Comprehensive animal welfare services for the animals of Birgunj and surrounding areas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl p-6 border border-[#e2e8f0] hover:border-[#93c5fd] transition-colors bg-white">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: s.color }}>
                  <s.icon className="w-6 h-6" style={{ color: s.iconColor }} />
                </div>
                <h3 className="text-[#1a202c] mb-2" style={{ fontSize: "16px", fontWeight: 600 }}>{s.title}</h3>
                <p className="text-[#64748b]" style={{ fontSize: "14px", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-[#1a202c]" style={{ fontSize: "32px", fontWeight: 700 }}>Animals Looking for Homes</h2>
              <p className="text-[#64748b] mt-1">Meet some of our wonderful animals waiting to be adopted.</p>
            </div>
            <Link
              href="/adopt"
              className="hidden sm:flex items-center gap-2 text-[#1a56db] hover:text-[#1340a8] transition-colors text-sm"
              style={{ fontWeight: 500 }}
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {animals.map((animal) => (
              <div key={animal.name} className="bg-white rounded-xl overflow-hidden border border-[#e2e8f0] hover:border-[#93c5fd] transition-all hover:shadow-md">
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
                  <Link
                    href="/adopt"
                    className="mt-4 block text-center w-full bg-[#eff6ff] hover:bg-[#dbeafe] text-[#1a56db] py-2.5 rounded-lg text-sm transition-colors"
                    style={{ fontWeight: 600 }}
                  >
                    Adopt Me →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/adopt"
              className="text-[#1a56db] flex items-center gap-1 mx-auto text-sm justify-center"
              style={{ fontWeight: 500 }}
            >
              View All Animals <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-[#1a202c]" style={{ fontSize: "32px", fontWeight: 700 }}>Latest Articles</h2>
              <p className="text-[#64748b] mt-1">Stories, tips, and updates from our team.</p>
            </div>
            <Link
              href="/articles"
              className="hidden sm:flex items-center gap-2 text-[#1a56db] hover:text-[#1340a8] transition-colors text-sm"
              style={{ fontWeight: 500 }}
            >
              All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.title}
                href="/articles"
                className="bg-white rounded-xl overflow-hidden border border-[#e2e8f0] hover:border-[#93c5fd] transition-all hover:shadow-md cursor-pointer block"
              >
                <img src={article.img} alt={article.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <span className="text-xs text-[#1a56db] bg-[#eff6ff] px-2.5 py-1 rounded-full" style={{ fontWeight: 600 }}>
                    {article.category}
                  </span>
                  <h3 className="text-[#1a202c] mt-3 mb-2" style={{ fontSize: "15px", fontWeight: 600, lineHeight: 1.4 }}>{article.title}</h3>
                  <p className="text-[#64748b] text-sm" style={{ lineHeight: 1.6 }}>{article.excerpt}</p>
                  <p className="text-[#94a3b8] text-xs mt-3">{article.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA Banner */}
      <section className="bg-[#1a56db] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-12 h-12 text-[#bfdbfe] mx-auto mb-4 fill-[#bfdbfe]" />
          <h2 className="text-white mb-4" style={{ fontSize: "32px", fontWeight: 700 }}>
            Your Donation Saves Lives
          </h2>
          <p className="text-[#bfdbfe] mb-8 max-w-xl mx-auto" style={{ lineHeight: 1.7 }}>
            Every rupee you donate goes directly towards medical care, food, shelter, and rehabilitation for rescued animals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-xl transition-colors"
              style={{ fontWeight: 600 }}
            >
              Donate Today
            </Link>
            <Link
              href="/about"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1a56db] px-8 py-3 rounded-xl transition-colors"
              style={{ fontWeight: 600 }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Member Highlights */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1a202c]" style={{ fontSize: "32px", fontWeight: 700 }}>Our Dedicated Team</h2>
            <p className="text-[#64748b] mt-1">Meet some of the passionate people behind Animal Care Birgunj.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Dr. Ramesh Thapa", role: "Chief Veterinarian", initials: "RT" },
              { name: "Sunita Sharma", role: "Rescue Coordinator", initials: "SS" },
              { name: "Bijay Mahato", role: "Adoption Officer", initials: "BM" },
              { name: "Priya Gupta", role: "Community Outreach", initials: "PG" },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 border border-[#e2e8f0] text-center hover:border-[#93c5fd] transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#eff6ff] flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#1a56db]" style={{ fontWeight: 700, fontSize: "18px" }}>{member.initials}</span>
                </div>
                <h4 className="text-[#1a202c]" style={{ fontSize: "14px", fontWeight: 600 }}>{member.name}</h4>
                <p className="text-[#64748b] text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/members"
              className="inline-flex items-center gap-2 text-[#1a56db] hover:text-[#1340a8] text-sm"
              style={{ fontWeight: 500 }}
            >
              Meet Full Team <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
