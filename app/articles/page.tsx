"use client";
import { useState } from "react";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface Article {
  id: number;
  category: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  img: string;
  body: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: "Rescue Stories",
    title: "How We Saved 12 Dogs from Flooding in Narayani River Bank",
    date: "Magh 15, 2081 BS",
    author: "Sunita Sharma",
    excerpt: "A team of 8 volunteers worked through the night to rescue a group of stranded dogs when the river banks flooded after heavy monsoon rains.",
    img: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=800&h=400&fit=crop&auto=format",
    body: `It was 11pm on a Tuesday when we received the call. The Narayani river had breached its banks after three days of continuous monsoon rain, and a group of approximately 12 dogs had been stranded on a small elevated patch of land surrounded by floodwater.\n\nOur rescue coordinator Sunita immediately assembled a team of 8 volunteers, including our chief veterinarian Dr. Ramesh Thapa. Equipped with rubber boats, ropes, and animal carriers, the team made their way to the site through waterlogged streets.\n\nThe rescue operation took nearly four hours. The dogs were frightened and some were showing signs of exhaustion and mild hypothermia. Our team carefully loaded them into carriers and transported them to our shelter.\n\nAll 12 dogs received immediate veterinary care. Two required treatment for minor injuries. After three days of monitoring and care, all 12 were healthy and available for adoption. Within two weeks, 9 of the 12 had been adopted into loving homes.`,
  },
  {
    id: 2,
    category: "Health Tips",
    title: "Essential Vaccination Guide for Pets in Nepal",
    date: "Poush 28, 2081 BS",
    author: "Dr. Ramesh Thapa",
    excerpt: "Understanding which vaccines your pets need and when to get them is crucial for their health and the safety of the community.",
    img: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=400&fit=crop&auto=format",
    body: `Vaccination is the single most important thing you can do to protect your pet's health. Here's a complete guide to the vaccines your pets need in Nepal.\n\n**For Dogs:**\n- Distemper, Parvovirus, Adenovirus (DHPPi): Core vaccine, first dose at 6-8 weeks\n- Rabies: Mandatory by law, first dose at 12-16 weeks\n- Leptospirosis: Especially important in flood-prone areas like Birgunj\n- Kennel Cough (Bordetella): Recommended if your dog socializes with other dogs\n\n**For Cats:**\n- Feline Herpesvirus, Calicivirus, Panleukopenia (FVRCP): Core vaccine\n- Rabies: Recommended for outdoor cats\n\n**Booster Schedule:**\nMost vaccines require annual or triennial boosters. Work with your vet to create a personalized vaccination schedule for your pet.\n\nAnimal Care Birgunj offers low-cost vaccination camps every month. Contact us to find the next date.`,
  },
  {
    id: 3,
    category: "Adoption",
    title: "Meet Sarita: How One Family Changed a Dog's Life Forever",
    date: "Poush 10, 2081 BS",
    author: "Bijay Mahato",
    excerpt: "Sarita the mixed-breed dog spent 8 months at our shelter before finding her perfect match — the Sharma family from Birgunj-12.",
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=400&fit=crop&auto=format",
    body: `Sarita arrived at our shelter in Shrawan 2081. She was found near the Ghadi Chowk area — malnourished, with a skin condition, and extremely fearful of humans. It took our team weeks just to earn her trust enough to approach her.\n\nFor eight months, Sarita lived at our shelter. She received treatment for her skin condition, was vaccinated, spayed, and slowly, through the patient work of our staff and volunteers, began to show her true personality — playful, loyal, and deeply affectionate.\n\nWhen the Sharma family came for an adoption visit in Magh 2081, they weren't sure which dog they wanted. Their 8-year-old daughter, Anisha, sat on the floor near Sarita's kennel and began talking softly. Sarita approached. It was instant love.\n\nThree months later, Sarita is now "Sheru" in the Sharma household. Anisha says Sheru sleeps at the foot of her bed every night. "She waited 8 months for us," says Mr. Sharma. "We're so grateful she did."`,
  },
  {
    id: 4,
    category: "Community",
    title: "Animal Care Birgunj Celebrates 1 Year of Operations",
    date: "Shrawan 5, 2081 BS",
    author: "Priya Gupta",
    excerpt: "One year after founding, we reflect on everything the community has helped us achieve — and share our plans for the year ahead.",
    img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=400&fit=crop&auto=format",
    body: `One year ago, Animal Care Birgunj was just an idea shared between a handful of animal lovers over chai at a tea shop in Ghanta Ghar. Today, we operate a 120-capacity shelter, have completed over 1,200 rescues, and have successfully rehomed more than 870 animals.\n\nNone of this would have been possible without the extraordinary support of the Birgunj community. From the business owners who donate supplies, to the volunteers who give their weekends, to the families who opened their homes to our animals — this is your achievement as much as ours.\n\nAs we enter our second year, we are planning to launch a community spay/neuter program targeting the street animal population of Birgunj. Studies show that systematic spay/neuter programs reduce street animal populations humanely and effectively within 3-5 years. We believe Birgunj can become a model city for humane animal management in Nepal.`,
  },
  {
    id: 5,
    category: "Health Tips",
    title: "Rabies Prevention: What Every Birgunj Resident Should Know",
    date: "Mangsir 20, 2081 BS",
    author: "Dr. Ramesh Thapa",
    excerpt: "Rabies remains a serious public health concern in Nepal. Learn how to protect yourself, your family, and your pets.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=400&fit=crop&auto=format",
    body: `Rabies is a fatal but entirely preventable disease. Nepal reports approximately 100 human deaths from rabies annually, with the majority caused by dog bites. The good news: with proper vaccination and awareness, rabies deaths can be reduced to near zero.\n\n**If you are bitten by an animal:**\n1. Wash the wound immediately with soap and water for at least 15 minutes\n2. Go to the nearest hospital immediately for Post-Exposure Prophylaxis (PEP)\n3. Do not wait — PEP is only effective when administered promptly\n\n**Protect your pets:**\n- Vaccinate your dog or cat against rabies every year\n- Keep vaccination records updated\n\n**Help stray animals:**\n- Do not approach stray animals you don't know\n- If you see a stray animal behaving unusually (aggression, confusion, foaming at mouth), call Animal Care Birgunj immediately\n\nAnimal Care Birgunj conducts free rabies vaccination camps for community animals. Contact us to organize one in your neighborhood.`,
  },
  {
    id: 6,
    category: "Rescue Stories",
    title: "Operation Monsoon: 3 Months of Emergency Animal Rescue",
    date: "Kartik 8, 2081 BS",
    author: "Sunita Sharma",
    excerpt: "The 2081 monsoon season brought unprecedented flooding to Birgunj. Here's how our team responded to save hundreds of animals.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=400&fit=crop&auto=format",
    body: `The monsoon of 2081 BS was one of the most intense Birgunj had seen in decades. Between Ashadh and Ashwin, our team conducted over 180 emergency animal rescue operations across the district.\n\nWe rescued dogs, cats, goats, and even cattle stranded by floodwaters. We coordinated with local ward offices and the Nepal Army to access severely flooded areas. Our veterinary team set up temporary treatment camps in five different locations across the city.\n\nThe challenges were immense — flooded roads, equipment limitations, and the sheer scale of need pushed our team to its limits. But the community response was equally extraordinary. Over 60 new volunteers joined during the monsoon. Local businesses donated food, medical supplies, and cash.\n\nTotal animals rescued during the 2081 monsoon: 347. Animals requiring veterinary treatment: 218. Animals successfully rehomed after recovery: 156.\n\nThank you, Birgunj.`,
  },
];

const categories = ["All", "Rescue Stories", "Health Tips", "Adoption", "Community"];

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Rescue Stories": { bg: "#fee2e2", text: "#dc2626" },
  "Health Tips": { bg: "#dcfce7", text: "#16a34a" },
  "Adoption": { bg: "#dbeafe", text: "#1a56db" },
  "Community": { bg: "#fef3c7", text: "#92400e" },
};

const ITEMS_PER_PAGE = 4;

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = articles.filter((a) => activeCategory === "All" || a.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  if (selectedArticle) {
    const related = articles.filter((a) => a.id !== selectedArticle.id && a.category === selectedArticle.category).slice(0, 2);
    return (
      <div className="min-h-screen bg-[#f8fafc]">
        <div className="relative h-72 bg-[#0f172a]">
          <img src={selectedArticle.img} alt={selectedArticle.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <div className="bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-sm">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-[#1a56db] mb-6 hover:text-[#1340a8] text-sm"
              style={{ fontWeight: 500 }}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Articles
            </button>
            <span className="text-xs px-2.5 py-1 rounded-full" style={{ fontWeight: 600, background: categoryColors[selectedArticle.category]?.bg, color: categoryColors[selectedArticle.category]?.text }}>
              {selectedArticle.category}
            </span>
            <h1 className="text-[#1a202c] mt-4 mb-4" style={{ fontSize: "28px", fontWeight: 800, lineHeight: 1.3 }}>{selectedArticle.title}</h1>
            <div className="flex items-center gap-4 text-[#94a3b8] text-sm mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{selectedArticle.date}</span>
              <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{selectedArticle.author}</span>
            </div>
            <div className="text-[#475569] space-y-4" style={{ lineHeight: 1.9, fontSize: "15px" }}>
              {selectedArticle.body.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-10 mb-12">
              <h3 className="text-[#1a202c] mb-5" style={{ fontSize: "20px", fontWeight: 700 }}>Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {related.map((a) => (
                  <div key={a.id} className="bg-white rounded-xl overflow-hidden border border-[#e2e8f0] cursor-pointer hover:border-[#93c5fd] transition-colors" onClick={() => setSelectedArticle(a)}>
                    <img src={a.img} alt={a.title} className="w-full h-36 object-cover" />
                    <div className="p-4">
                      <h4 className="text-[#1a202c] text-sm" style={{ fontWeight: 600, lineHeight: 1.4 }}>{a.title}</h4>
                      <p className="text-[#94a3b8] text-xs mt-1">{a.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <section className="bg-[#1a56db] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-3" style={{ fontSize: "38px", fontWeight: 800 }}>Articles & Stories</h1>
          <p className="text-[#bfdbfe]">Rescue stories, health tips, and news from Animal Care Birgunj.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setPage(1); }}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeCategory === cat
                  ? "bg-[#1a56db] text-white"
                  : "bg-white text-[#475569] border border-[#e2e8f0] hover:border-[#1a56db] hover:text-[#1a56db]"
              }`}
              style={{ fontWeight: activeCategory === cat ? 600 : 400 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {paginated.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl overflow-hidden border border-[#e2e8f0] hover:border-[#93c5fd] transition-all hover:shadow-md cursor-pointer flex flex-col"
              onClick={() => setSelectedArticle(article)}
            >
              <img src={article.img} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs px-2.5 py-1 rounded-full inline-block w-fit mb-3"
                  style={{ fontWeight: 600, background: categoryColors[article.category]?.bg || "#f1f5f9", color: categoryColors[article.category]?.text || "#64748b" }}>
                  {article.category}
                </span>
                <h3 className="text-[#1a202c] mb-2 flex-1" style={{ fontSize: "17px", fontWeight: 700, lineHeight: 1.4 }}>{article.title}</h3>
                <p className="text-[#64748b] text-sm mb-4" style={{ lineHeight: 1.6 }}>{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8] text-xs">{article.date}</span>
                  <span className="text-[#1a56db] text-sm" style={{ fontWeight: 500 }}>Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg border border-[#e2e8f0] text-sm text-[#475569] hover:border-[#1a56db] disabled:opacity-40 transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-9 h-9 rounded-lg text-sm transition-colors ${
                  p === page ? "bg-[#1a56db] text-white" : "border border-[#e2e8f0] text-[#475569] hover:border-[#1a56db]"
                }`}
                style={{ fontWeight: p === page ? 600 : 400 }}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg border border-[#e2e8f0] text-sm text-[#475569] hover:border-[#1a56db] disabled:opacity-40 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
