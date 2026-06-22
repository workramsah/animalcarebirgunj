import { Heart, Mail, MapPin, Share2, Camera, MessageCircle, Video } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a202c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1a56db] flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "15px" }}>Animal Care Birgunj</div>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">
              Saving lives since 2080 BS. A nonprofit committed to rescue, rehabilitation, medical care, and adoption of animals in Birgunj, Nepal.
            </p>
            <div className="flex gap-3">
              {[Share2, Camera, MessageCircle, Video].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-[#2d3748] hover:bg-[#1a56db] flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4 text-[#94a3b8] group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600, fontSize: "14px" }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/adopt", label: "Adopt an Animal" },
                { href: "/donate", label: "Donate" },
                { href: "/articles", label: "Articles" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94a3b8] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600, fontSize: "14px" }}>Services</h4>
            <ul className="space-y-2">
              {["Medical Care", "Animal Rescue", "Rehabilitation", "Adoption Services", "Report Injured Animal"].map((s) => (
                <li key={s}>
                  <span className="text-[#94a3b8] text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4" style={{ fontWeight: 600, fontSize: "14px" }}>Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#1a56db] mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-sm">Birgunj, Parsa, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1a56db] flex-shrink-0" />
                <a href="mailto:info@animalcarebirgunj.com" className="text-[#94a3b8] hover:text-white text-sm transition-colors">
                  info@animalcarebirgunj.com
                </a>
              </div>
              <Link
                href="/report"
                className="mt-2 block text-center w-full bg-[#f59e0b] hover:bg-[#d97706] text-white px-4 py-2 rounded-lg text-sm transition-colors"
                style={{ fontWeight: 500 }}
              >
                Report Injured Animal
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2d3748] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#64748b] text-sm">© 2081 BS Animal Care Birgunj. All rights reserved.</p>
          <p className="text-[#64748b] text-sm">Saving lives since 2080 BS</p>
        </div>
      </div>
    </footer>
  );
}
