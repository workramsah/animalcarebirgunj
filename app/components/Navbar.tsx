"use client";
import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/adopt", label: "Adopt" },
  { href: "/donate", label: "Donate" },
  { href: "/report", label: "Report Animal" },
  { href: "/articles", label: "Articles" },
  { href: "/members", label: "Members" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-[#e2e8f0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1a56db] flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <div className="text-left">
              <div className="text-[#1a56db] leading-tight" style={{ fontWeight: 700, fontSize: "14px" }}>Animal Care</div>
              <div className="text-[#64748b] leading-tight" style={{ fontWeight: 400, fontSize: "11px" }}>Birgunj, Nepal</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-colors text-sm ${
                  pathname === link.href
                    ? "bg-[#eff6ff] text-[#1a56db]"
                    : "text-[#475569] hover:bg-[#f8fafc] hover:text-[#1a202c]"
                }`}
                style={{ fontWeight: pathname === link.href ? 500 : 400 }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-4 py-2 rounded-lg transition-colors text-sm"
              style={{ fontWeight: 500 }}
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-[#475569] hover:bg-[#f1f5f9]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e8f0] px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-left px-3 py-2.5 rounded-lg transition-colors text-sm ${
                pathname === link.href
                  ? "bg-[#eff6ff] text-[#1a56db]"
                  : "text-[#475569] hover:bg-[#f8fafc]"
              }`}
              style={{ fontWeight: pathname === link.href ? 500 : 400 }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-4 py-2.5 rounded-lg transition-colors text-sm"
            style={{ fontWeight: 500 }}
          >
            <Heart className="w-4 h-4" />
            Donate Now
          </Link>
        </div>
      )}
    </nav>
  );
}
