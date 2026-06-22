import { Mail, Phone } from "lucide-react";

const staff = [
  { name: "Dr. Ramesh Thapa", role: "Chief Veterinarian & Co-Founder", initials: "RT", bio: "15+ years veterinary experience. Former government veterinarian, joined full-time in 2080 BS.", email: "ramesh@animalcarebirgunj.com", phone: "+977 980-1234567" },
  { name: "Sunita Sharma", role: "Rescue Coordinator", initials: "SS", bio: "Leads the 24/7 rescue team with over 400 successful operations to her credit.", email: "sunita@animalcarebirgunj.com", phone: "+977 980-2345678" },
  { name: "Bijay Mahato", role: "Adoption Officer", initials: "BM", bio: "Manages the full adoption process from screening to post-adoption support.", email: "bijay@animalcarebirgunj.com", phone: "+977 980-3456789" },
  { name: "Priya Gupta", role: "Community Outreach Lead", initials: "PG", bio: "Builds community awareness, manages volunteer programs and school outreach.", email: "priya@animalcarebirgunj.com", phone: "+977 980-4567890" },
  { name: "Krishna Yadav", role: "Shelter Manager", initials: "KY", bio: "Oversees daily shelter operations including feeding, cleaning, and general animal welfare.", email: "krishna@animalcarebirgunj.com", phone: "+977 980-5678901" },
  { name: "Anita Patel", role: "Fundraising & Events Manager", initials: "AP", bio: "Drives fundraising campaigns, donor relations, and community events.", email: "anita@animalcarebirgunj.com", phone: "+977 980-6789012" },
];

const volunteers = [
  { name: "Rahul Singh", role: "Weekend Rescue Volunteer", initials: "RS", since: "Shrawan 2081" },
  { name: "Meera Jha", role: "Veterinary Intern", initials: "MJ", since: "Ashadh 2081" },
  { name: "Prakash Thakur", role: "Social Media Volunteer", initials: "PT", since: "Poush 2080" },
  { name: "Kavita Mishra", role: "Adoption Event Organizer", initials: "KM", since: "Baisakh 2081" },
  { name: "Rohan Gupta", role: "Transport Volunteer", initials: "RG", since: "Kartik 2081" },
  { name: "Nisha Patel", role: "Animal Foster Parent", initials: "NP", since: "Chaitra 2080" },
  { name: "Amit Yadav", role: "Photography Volunteer", initials: "AY", since: "Magh 2081" },
  { name: "Sita Sharma", role: "Education Program Volunteer", initials: "SS", since: "Jestha 2081" },
];

const bgColors = ["bg-[#eff6ff]", "bg-[#fef3c7]", "bg-[#f0fdf4]", "bg-[#fdf4ff]", "bg-[#fff1f2]", "bg-[#f0f9ff]"];
const textColors = ["text-[#1a56db]", "text-[#92400e]", "text-[#166534]", "text-[#7e22ce]", "text-[#be123c]", "text-[#0369a1]"];

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Header */}
      <section className="bg-[#1a56db] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-3" style={{ fontSize: "38px", fontWeight: 800 }}>Our Team</h1>
          <p className="text-[#bfdbfe]">The passionate people who make Animal Care Birgunj possible.</p>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-[#1a202c]" style={{ fontSize: "28px", fontWeight: 700 }}>Staff Members</h2>
            <p className="text-[#64748b] mt-1">Full-time professionals dedicated to our mission.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member, i) => (
              <div key={member.name} className="bg-white rounded-xl p-6 border border-[#e2e8f0] hover:border-[#93c5fd] transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full ${bgColors[i % bgColors.length]} flex items-center justify-center flex-shrink-0`}>
                    <span className={`${textColors[i % textColors.length]}`} style={{ fontWeight: 700, fontSize: "18px" }}>{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-[#1a202c]" style={{ fontSize: "15px", fontWeight: 700 }}>{member.name}</h3>
                    <p className="text-[#1a56db] text-xs mt-0.5" style={{ fontWeight: 500 }}>{member.role}</p>
                  </div>
                </div>
                <p className="text-[#64748b] text-sm mb-5" style={{ lineHeight: 1.6 }}>{member.bio}</p>
                <div className="space-y-2 border-t border-[#e2e8f0] pt-4">
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[#64748b] hover:text-[#1a56db] text-xs transition-colors">
                    <Mail className="w-3.5 h-3.5" />{member.email}
                  </a>
                  <div className="flex items-center gap-2 text-[#64748b] text-xs">
                    <Phone className="w-3.5 h-3.5" />{member.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteers */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-[#1a202c]" style={{ fontSize: "28px", fontWeight: 700 }}>Volunteers</h2>
            <p className="text-[#64748b] mt-1">Community heroes who give their time and energy to help animals.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {volunteers.map((member, i) => (
              <div key={member.name} className="bg-white rounded-xl p-5 border border-[#e2e8f0] text-center hover:border-[#93c5fd] transition-colors">
                <div className={`w-14 h-14 rounded-full ${bgColors[(i + 2) % bgColors.length]} flex items-center justify-center mx-auto mb-3`}>
                  <span className={`${textColors[(i + 2) % textColors.length]}`} style={{ fontWeight: 700, fontSize: "16px" }}>{member.initials}</span>
                </div>
                <h4 className="text-[#1a202c]" style={{ fontSize: "14px", fontWeight: 600 }}>{member.name}</h4>
                <p className="text-[#64748b] text-xs mt-1">{member.role}</p>
                <p className="text-[#94a3b8] text-xs mt-2">Since {member.since}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-[#1a56db]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "30px", fontWeight: 700 }}>Become a Volunteer</h2>
          <p className="text-[#bfdbfe] mb-8" style={{ lineHeight: 1.7 }}>
            Join our growing team of volunteers. Whether you have a few hours a week or want to be fully involved, there is a place for you at Animal Care Birgunj.
          </p>
          <a
            href="mailto:info@animalcarebirgunj.com"
            className="inline-block bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-xl transition-colors"
            style={{ fontWeight: 600 }}
          >
            Apply to Volunteer
          </a>
        </div>
      </section>
    </div>
  );
}
