import hrLogo from "./assets/logo-horizontal.png";
import aboutImage from "./assets/hrinboxabouttrial.webp";
import "./App.css";

import { useState } from "react";

export default function HRinBoxLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 lg:px-20 py-4   sticky top-0 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm z-50">
        <div>
          <img
            src={hrLogo}
            alt="HRinBox"
            className="h-12 w-auto -ml-6 md:ml-0"
          />
        </div>

       <>
  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center gap-8 text-sm font-medium">
    <a
      href="#services"
      className="hover:text-yellow-500 transition-all duration-300"
    >
      Services
    </a>

    <a
      href="#about"
      className="hover:text-yellow-500 transition-all duration-300"
    >
      About
    </a>

    <a
      href="#contact"
      className="hover:text-yellow-500 transition-all duration-300"
    >
      Contact
    </a>

    <a
      href="https://wa.me/917776028592?text=Hi%20HRinBox,%0A%0AI'd%20like%20to%20book%20a%20free%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
    >
  Book a Consultation
    </a>

  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden text-3xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

    {menuOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 z-50">
    <a
      href="#services"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-3 hover:bg-yellow-50"
    >
      Services
    </a>

    <a
      href="#about"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-3 hover:bg-yellow-50"
    >
      About
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
      className="block px-6 py-3 hover:bg-yellow-50"
    >
      Contact
    </a>

    <a
        href="https://wa.me/917776028592?text=Hi%20HRinBox,%0A%0AI'd%20like%20to%20book%20a%20free%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMenuOpen(false)}
        className="block mx-6 mt-4 bg-black text-white text-center py-3 rounded-2xl font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300"
>
         Book a Consultation
    </a>

  </div>
)}

</>

      </nav>

      {/* Hero Section */}
      <section className="px-6 sm:px-8 lg:px-20 py-10 sm:py-14 lg:py-28 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-gradient-to-br from-white via-yellow-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl opacity-40"></div>

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
        <div>
          <p className="uppercase tracking-[4px] text-yellow-500 font-semibold mb-5 text-sm">
            READY-TO-USE HR RESOURCES
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight max-w-3xl">
            <>
  Everything You Need <br />
To Build <span className="text-yellow-500">Better HR</span>
</>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8 mb-8 max-w-xl">
            HRinBox gives you ready-to-use HR templates, Google Sheets dashboards, policy documents, toolkits, and practical resources to build a professional HR system for your business.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center bg-black text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
            >
              Explore Resources
              </a>

            <a
              href="https://wa.me/917776028592?text=Hi%20HRinBox,%0A%0AI'd%20like%20to%20know%20more%20about%20your%20HR%20resources.%0A%0ABusiness%20Name:%0AIndustry:%0ANumber%20of%20Employees:%0A%0APlease%20guide%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-black hover:border-yellow-500 hover:bg-yellow-400 hover:text-black transition-all duration-300 px-8 py-4 rounded-2xl font-semibold"
            >
              Contact on WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-12 text-center">

  <div>
    <h3 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
      HR
    </h3>
    <p className="text-gray-500 mt-1 text-sm sm:text-base whitespace-nowrap">
      Templates
    </p>
  </div>

  <div>
    <h3 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
      Google
    </h3>
    <p className="text-gray-500 mt-1 text-sm sm:text-base whitespace-nowrap">
      Sheets Dashboards
    </p>
  </div>

  <div>
    <h3 className="text-2xl sm:text-3xl font-bold whitespace-nowrap">
      HR
    </h3>
    <p className="text-gray-500 mt-1 text-sm sm:text-base whitespace-nowrap">
      Toolkits
    </p>
  </div>

</div>
        </div>

        <div className="relative">

  <div className="absolute inset-0 bg-yellow-100 blur-3xl opacity-60 rounded-full"></div>

  <div className="relative bg-white rounded-[35px] p-8 border border-gray-100 shadow-[0_25px_80px_rgba(0,0,0,0.12)] min-h-[520px]">
    
    <div className="flex items-center justify-between mb-8">

  <div>

    <h3 className="text-2xl font-bold">
      HR Resource Library
    </h3>

    <p className="text-gray-500 text-sm mt-1">
      Templates • Toolkits • Dashboards
    </p>

  </div>

</div>

<div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-4">

  <div className="flex items-center justify-between">

    <div>

      <h4 className="font-semibold text-lg">
        Employee Handbook
      </h4>

      <p className="text-sm text-gray-500 mt-1">
        PDF Template
      </p>

    </div>

    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
      Ready
    </span>

  </div>

</div>

<div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-4">

  <div className="flex items-center justify-between">

    <div>

      <h4 className="font-semibold text-lg">
        HR Dashboard Templates
      </h4>

      <p className="text-sm text-gray-500 mt-1">
        Google Sheets Dashboard
      </p>

    </div>

    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
      Ready
    </span>

  </div>

</div>

<div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-4">

  <div className="flex items-center justify-between">

    <div>

      <h4 className="font-semibold text-lg">
        HR Toolkit Bundles
      </h4>

      <p className="text-sm text-gray-500 mt-1">
        Policies • Forms • Checklists
      </p>

    </div>

    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
      Ready
    </span>

  </div>

</div>

  </div>


</div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 lg:px-20 py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold uppercase tracking-[3px] mb-4">
            OUR SOLUTIONS
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Everything You Need To Build Better HR
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-8">
            If you're runing a small business and finding HR management challenging, HRinBox is your one-stop solution. Get access to a comprehensive ready-made HR Toolkit with professionally designed templates, policies, formats, and trackers to simplify your HR operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
  {
    title: "HR Templates",
     icon: "📄",
    description:
      "Ready-to-use HR letters, forms, policies, employee handbooks, and essential business documents.",
  },
  {
    title: "HR Dashboard Templates",
     icon: "📊",
    description:
      "Google Sheets and Excel dashboards for attendance, payroll, leave, recruitment, and HR reporting.",
  },
  {
    title: "HR Policies",
     icon: "📘",
    description:
      "Ready-to-use HR policies covering leave, attendance, code of conduct, POSH, and workplace compliance.",
  },
  {
    title: "HR Toolkits",
     icon: "🧰",
    description:
      "Complete HR starter kits containing templates, checklists, forms, and onboarding resources.",
  },
  {
    title: "Custom HR Setup",
     icon: "⚙️",
    description:
      "Industry-specific HR templates, policies, dashboards, and document setup customized for your business.",
  },
  {
    title: "Free Resources",
     icon: "🎁",
    description:
      "Download free HR templates, guides, checklists, and sample documents before purchasing premium resources.",
  },
].map((service) => (
            <div
              key={service.title}
              className="group bg-white/80 backdrop-blur-xl p-8 rounded-[32px] shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-white/40 hover:-translate-y-3 overflow-hidden relative"
            >
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-200 flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>

              <p className="text-gray-600 leading-7">
                {service.description}
                </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 lg:px-20 py-28 grid lg:grid-cols-2 gap-20 items-center bg-white relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-3xl opacity-20"></div>
        <div>
          <img
            src={aboutImage}
            alt="HR Team"
            className="rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.12)] object-cover h-full hover:scale-[1.04] hover:rotate-1 transition-all duration-700"
          />
        </div>

        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-[3px] mb-4">
            ABOUT HRINBOX
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tight">
            Everything You Need To Build A Professional HR System
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            HRinBox provides ready-to-use HR templates, policies, dashboard templates, toolkits, and customized HR setup packages that help businesses build professional HR systems without hiring expensive consultants or HR software.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-10 items-stretch">
            <div className="bg-white rounded-[30px] p-7 min-h-[220px] flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-3 leading-tight min-h-[108px]">Ready-to-Use</h3>
              <p className="text-gray-600">Templates & Documents</p>
            </div>

            <div className="bg-white rounded-[30px] p-7 min-h-[220px] flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-3 leading-tight min-h-[108px]">Google Sheets</h3>
              <p className="text-gray-600">HR Dashboards</p>
            </div>

            <div className="bg-white rounded-[30px] p-7 min-h-[220px] flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-3 leading-tight min-h-[108px]">One-Time</h3>
              <p className="text-gray-600">Custom HR Setup</p>
            </div>

            <div className="bg-white rounded-[30px] p-7 min-h-[220px] flex flex-col border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-3 leading-tight min-h-[108px]">Industry</h3>
              <p className="text-gray-600">Specific Solutions </p>
            </div>
          </div>

        </div>
      </section>
      

      {/* Industries We Serve */}
<section className="py-16 bg-white overflow-hidden">
  <div className="text-center mb-12">
    <h3 className="text-4xl font-black">
      Industries We Serve
    </h3>
    <p className="text-gray-600 mt-3">
      HR solutions designed for businesses across multiple industries.
    </p>
  </div>

  <div className="overflow-hidden">
    <div className="flex gap-4 whitespace-nowrap animate-marquee">
      {[
        "Startups",
        "IT Companies",
        "Manufacturing",
        "Retail",
        "Healthcare",
        "Education",
        "Hospitality",
        "Logistics",
        "Construction",
        "Professional Services",

        // Duplicate for seamless scrolling
        "Startups",
        "IT Companies",
        "Manufacturing",
        "Retail",
        "Healthcare",
        "Education",
        "Hospitality",
        "Logistics",
        "Construction",
        "Professional Services",
      ].map((industry, index) => (
        <span
          key={index}
          className="px-6 py-3 rounded-full border border-yellow-300 bg-yellow-50 font-medium text-gray-800 hover:bg-yellow-400 transition-all duration-300"
        >
          {industry}
        </span>
      ))}
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section id="contact" className="px-5 md:px-8 lg:px-20 py-10 md:py-16">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-[36px] md:rounded-[50px] p-7 md:p-10 lg:p-16 text-center relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-10 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[4px] text-yellow-400 font-semibold mb-5">
              NEED HELP CHOOSING?
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 md:mb-5 leading-tight lg:leading-[1.05] tracking-tight max-w-4xl mx-auto">
              We'll Help You Choose The Right HR Resources
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8 max-w-xl mx-auto mb-8 md:mb-10">
              Book a free consultation to discuss your HR requirements and we'll recommend the right templates, dashboards, policies, or customized setup package for your business.
            </p>

            <a
              href="https://wa.me/917776028592?text=Hi%20HRinBox,%0A%0AI'd%20like%20to%20book%20a%20free%20consultation.%0A%0ABusiness%20Name:%0AIndustry:%0ANumber%20of%20Employees:%0A%0AI'm%20interested%20in:%0A-%20HR%20Templates%0A-%20HR%20Policies%0A-%20HR%20Dashboard%20Templates%0A-%20HR%20Toolkit%20Bundles%0A-%20Custom%20HR%20Setup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition duration-300"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 lg:px-20 py-10 border-t border-gray-100 flex flex-col md:flex-row gap-5 justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">
            HR<span className="text-yellow-500">in</span>Box
          </h2>
        </div>

        <p className="text-gray-500 text-center md:text-right">
          © 2026 HRinBox. All rights reserved.
        </p>
      </footer>
      <a
  href="https://wa.me/917776028592?text=Hello%20HRinBox%2C%20I%20would%20like%20to%20know%20more%20about%20your%20HR%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] z-50 transition-all duration-300 hover:scale-110"
>
  💬
</a>
    </div>
  );
}
