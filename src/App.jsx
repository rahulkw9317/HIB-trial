export default function HRinBoxLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 lg:px-20 py-5 sticky top-0 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm z-50">
        <div>
          <h1 className="text-3xl font-black tracking-tight">
            HR<span className="text-yellow-500">in</span>Box
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-yellow-500 transition-all duration-300 hover:-translate-y-0.5">
            Services
          </a>
          <a href="#about" className="hover:text-yellow-500 transition-all duration-300 hover:-translate-y-0.5">
            About
          </a>
          <a href="#contact" className="hover:text-yellow-500 transition-all duration-300 hover:-translate-y-0.5">
            Contact
          </a>
        </div>

        <button className="bg-black text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 px-6 py-3 rounded-2xl font-semibold shadow-xl hover:scale-105">
          Book Consultation
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 lg:px-20 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center bg-gradient-to-br from-white via-yellow-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl opacity-40"></div>

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-3xl opacity-30"></div>
        <div>
          <p className="uppercase tracking-[4px] text-yellow-500 font-semibold mb-5 text-sm">
            Smart HR Solutions
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-6 tracking-tight max-w-3xl">
            <>
  Premium HR Solutions <br />
  For <span className="text-yellow-500">Growing Businesses</span>
</>
          </h2>

          <p className="text-lg text-gray-600 leading-8 mb-8 max-w-xl">
            Helping businesses simplify recruitment, payroll, compliance, and workforce management with modern HR solutions designed for growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-black text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:scale-105">
              Get Started
            </button>

            <button className="border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 rounded-2xl font-semibold hover:scale-105">
              Learn More
            </button>
          </div>
          <div className="flex flex-wrap gap-10 mt-12">

  <div>
    <h3 className="text-3xl font-bold">100+</h3>
    <p className="text-gray-500 mt-1">Businesses Supported</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">24/7</h3>
    <p className="text-gray-500 mt-1">HR Assistance</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">Fast</h3>
    <p className="text-gray-500 mt-1">Recruitment Process</p>
  </div>

</div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-yellow-100 blur-3xl opacity-60 rounded-full"></div>

          <div className="relative bg-white/90 backdrop-blur-xl border border-white/40 rounded-[35px] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">
            <div className="flex items-center justify-between mb-8">
              <div>
  <h3 className="text-2xl font-bold tracking-tight">
    HR Dashboard
  </h3>

  <p className="text-gray-500 text-sm mt-1">
    Workforce Insights & Operations
  </p>
</div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                Active
              </span>
            </div>

            <div className="space-y-5">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <p className="text-sm text-gray-500 mb-2">Recruitment</p>
                <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-[85%] h-full bg-yellow-500 rounded-full"></div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Payroll Management</p>
                <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-[70%] h-full bg-black rounded-full"></div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Compliance Support</p>
                <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
                  <div className="w-[90%] h-full bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Trusted By Section */}

<section className="px-8 lg:px-20 py-14 border-y border-gray-100 bg-white">

  <div className="text-center mb-10">
    <p className="text-gray-500 uppercase tracking-[4px] text-sm font-semibold">
      Trusted By Growing Businesses
    </p>
  </div>

  <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 text-2xl font-bold text-gray-300">

    <div className="hover:text-black transition duration-300">
      TECHCORP
    </div>

    <div className="hover:text-black transition duration-300">
      FINEDGE
    </div>

    <div className="hover:text-black transition duration-300">
      NOVA HR
    </div>

    <div className="hover:text-black transition duration-300">
      GROWIFY
    </div>

    <div className="hover:text-black transition duration-300">
      NEXTBIZ
    </div>

  </div>

</section>
      {/* Services Section */}
      <section id="services" className="px-8 lg:px-20 py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold uppercase tracking-[3px] mb-4">
            Our Services
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Complete HR Solutions Under One Roof
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-8">
            We provide scalable HR services that help businesses improve
            efficiency, manage talent, and stay compliant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Recruitment & Hiring",
            "Payroll Management",
            "HR Compliance",
            "Employee Management",
            "Staffing Solutions",
            "HR Consulting",
          ].map((service) => (
            <div
              key={service}
              className="group bg-white/80 backdrop-blur-xl p-8 rounded-[32px] shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 border border-white/40 hover:-translate-y-3 overflow-hidden relative"
            >
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-200 flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:scale-110 transition-all duration-300">
                💼
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service}</h3>

              <p className="text-gray-600 leading-7">
                Professional HR support tailored to help businesses operate more
                efficiently and focus on growth.
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
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="HR Team"
            className="rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.12)] object-cover h-full hover:scale-[1.04] hover:rotate-1 transition-all duration-700"
          />
        </div>

        <div>
          <p className="text-yellow-500 font-semibold uppercase tracking-[3px] mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-black mb-8 leading-[1.1] tracking-tight">
            Building Better Workforces With Smarter HR Management
          </h2>

          <p className="text-gray-600 leading-8 mb-8">
            HRinBox focuses on helping businesses simplify operations,
            strengthen compliance, and improve workforce management through
            efficient HR systems and expert support.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-[30px] p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-gray-600">Successful HR Solutions</p>
            </div>

            <div className="bg-white rounded-[30px] p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">24/7</h3>
              <p className="text-gray-600">Client Support</p>
            </div>

            <div className="bg-white rounded-[30px] p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Fast</h3>
              <p className="text-gray-600">Recruitment Process</p>
            </div>

            <div className="bg-white rounded-[30px] p-7 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-3xl font-bold mb-2">Trusted</h3>
              <p className="text-gray-600">Business Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 lg:px-20 py-24">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-[50px] p-12 lg:p-24 text-center relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-400 opacity-10 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[4px] text-yellow-400 font-semibold mb-5">
              Let’s Work Together
            </p>

            <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight max-w-5xl mx-auto">
              Let HRinBox Handle Your HR While You Focus On Growth
            </h2>

            <p className="text-gray-300 text-lg leading-8 max-w-2xl mx-auto mb-10">
              Simplify your hiring, payroll, and compliance with modern HR
              solutions designed for growing businesses.
            </p>

            <button className="bg-yellow-500 hover:bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 lg:px-20 py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-3xl opacity-30"></div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-yellow-500 font-semibold uppercase tracking-[3px] mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Ready To Transform Your HR Operations?
          </h2>

          <p className="text-gray-600 leading-8 mb-10">
            Reach out to HRinBox today and discover smarter HR solutions for
            your business.
          </p>

          <div className="bg-white/90 backdrop-blur-xl rounded-[40px] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-white/40 space-y-6 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 focus:bg-white transition-all duration-300"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 focus:bg-white transition-all duration-300"
            />

            <textarea
              placeholder="Tell us about your requirement"
              rows="5"
              className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 focus:bg-white transition-all duration-300"
            ></textarea>

            <button className="w-full bg-black text-white hover:bg-yellow-500 hover:text-black transition-all duration-300 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02]">
              Send Inquiry
            </button>
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
  href="https://wa.me/917507031996?text=Hello%20HRinBox%2C%20I%20would%20like%20to%20know%20more%20about%20your%20HR%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-[0_10px_40px_rgba(0,0,0,0.25)] z-50 transition-all duration-300 hover:scale-110"
>
  💬
</a>
    </div>
  );
}
