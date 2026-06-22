import { Heart, Target, Eye, Award, Users, Calendar } from "lucide-react";

export default function AboutPage() {
  const timeline = [
    { year: "2080 BS", event: "Organization Founded", desc: "Animal Care Birgunj was established by a group of animal lovers in Birgunj." },
    { year: "2080 BS", event: "First Rescue Operation", desc: "Rescued 23 stray dogs and provided emergency veterinary care." },
    { year: "2081 BS", event: "Shelter Established", desc: "Opened our permanent shelter facility capable of housing 80+ animals." },
    { year: "2081 BS", event: "Adoption Program Launch", desc: "Launched a formal adoption program connecting animals with loving families." },
    { year: "2081 BS", event: "1,000 Animals Rescued", desc: "Celebrated a major milestone — 1,000 animals rescued and cared for." },
  ];

  const team = [
    { name: "Dr. Ramesh Thapa", role: "Chief Veterinarian & Co-Founder", initials: "RT", bio: "15+ years veterinary experience. Former government veterinarian, now dedicated to street animal welfare." },
    { name: "Sunita Sharma", role: "Rescue Coordinator", initials: "SS", bio: "Leads the 24/7 rescue team with over 400 successful rescue operations." },
    { name: "Bijay Mahato", role: "Adoption Officer", initials: "BM", bio: "Manages the adoption process, home checks, and post-adoption support." },
    { name: "Priya Gupta", role: "Community Outreach Lead", initials: "PG", bio: "Builds community awareness and manages volunteer programs across Birgunj." },
    { name: "Krishna Yadav", role: "Shelter Manager", initials: "KY", bio: "Oversees daily shelter operations, feeding, and general animal welfare." },
    { name: "Anita Patel", role: "Fundraising & Events", initials: "AP", bio: "Drives fundraising campaigns and community events to support the organization." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a56db] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4" style={{ fontSize: "40px", fontWeight: 800 }}>About Us</h1>
          <p className="text-[#bfdbfe] max-w-xl mx-auto" style={{ fontSize: "17px", lineHeight: 1.7 }}>
            We are a nonprofit animal welfare organization based in Birgunj, Nepal — dedicated to rescuing, rehabilitating, and rehoming animals in need.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#eff6ff] rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#1a56db] rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#1a202c] mb-4" style={{ fontSize: "24px", fontWeight: 700 }}>Our Mission</h2>
              <p className="text-[#475569]" style={{ lineHeight: 1.8 }}>
                To rescue, rehabilitate, and rehome animals in need across Birgunj and surrounding areas of Parsa district. We provide comprehensive medical care, safe shelter, and loving environments to help every animal thrive — and connect them with responsible, caring families.
              </p>
            </div>
            <div className="bg-[#fff7ed] rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#f59e0b] rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#1a202c] mb-4" style={{ fontSize: "24px", fontWeight: 700 }}>Our Vision</h2>
              <p className="text-[#475569]" style={{ lineHeight: 1.8 }}>
                A Birgunj where no animal suffers from neglect, abuse, or lack of medical care. We envision a compassionate community where humans and animals coexist with respect and mutual care — where every stray animal has a safe path to a loving home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story with Image */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#f59e0b] text-sm" style={{ fontWeight: 600 }}>Our Story</span>
              <h2 className="text-[#1a202c] mt-2 mb-6" style={{ fontSize: "32px", fontWeight: 700 }}>
                Born from Compassion,<br />Built by Community
              </h2>
              <div className="space-y-4 text-[#475569]" style={{ lineHeight: 1.8 }}>
                <p>
                  Animal Care Birgunj was founded in 2080 BS by a small group of passionate animal lovers who could no longer watch stray animals suffer on the streets of Birgunj without taking action.
                </p>
                <p>
                  What began as weekend rescues and home-based veterinary care quickly grew into a full-fledged organization with a dedicated shelter, a team of professionals, and a network of over 120 active volunteers.
                </p>
                <p>
                  Today, we operate Birgunj's most active animal welfare center — running rescue operations, veterinary clinics, rehabilitation programs, and adoption drives throughout the year.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { icon: Award, value: "1,240+", label: "Rescued" },
                  { icon: Users, value: "120+", label: "Volunteers" },
                  { icon: Heart, value: "870+", label: "Adopted" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="bg-white rounded-xl p-4 border border-[#e2e8f0] text-center">
                    <Icon className="w-5 h-5 text-[#1a56db] mx-auto mb-2" />
                    <div className="text-[#1a202c]" style={{ fontWeight: 700, fontSize: "22px" }}>{value}</div>
                    <div className="text-[#64748b] text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=700&h=500&fit=crop&auto=format"
                alt="Volunteers caring for animals"
                className="w-full h-full object-cover"
                style={{ maxHeight: "480px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1a202c]" style={{ fontSize: "32px", fontWeight: 700 }}>Meet Our Team</h2>
            <p className="text-[#64748b] mt-2">Dedicated professionals and volunteers who make it all possible.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 border border-[#e2e8f0] hover:border-[#93c5fd] transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#eff6ff] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#1a56db]" style={{ fontWeight: 700, fontSize: "18px" }}>{member.initials}</span>
                  </div>
                  <div>
                    <h4 className="text-[#1a202c]" style={{ fontSize: "15px", fontWeight: 600 }}>{member.name}</h4>
                    <p className="text-[#1a56db] text-xs">{member.role}</p>
                  </div>
                </div>
                <p className="text-[#64748b] text-sm" style={{ lineHeight: 1.6 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#1a202c]" style={{ fontSize: "32px", fontWeight: 700 }}>Our Journey</h2>
            <p className="text-[#64748b] mt-2">Key milestones in our organization's history.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#e2e8f0]" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#1a56db] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white rounded-xl p-5 border border-[#e2e8f0] flex-1">
                    <div className="text-[#f59e0b] text-xs mb-1" style={{ fontWeight: 600 }}>{item.year}</div>
                    <h4 className="text-[#1a202c] mb-1" style={{ fontSize: "15px", fontWeight: 600 }}>{item.event}</h4>
                    <p className="text-[#64748b] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
