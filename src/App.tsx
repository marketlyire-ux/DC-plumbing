import React, { useState } from "react";
import {
  Phone,
  Star,
  CheckCircle,
  Clock,
  Flame,
  Droplets,
  ShieldCheck,
  Menu,
  MapPin,
  X,
} from "lucide-react";

const phone = "086 078 6077";
const phoneHref = "tel:0860786077";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">DC Heating & Plumbing</h1>
            <p className="text-xs text-slate-400">Heating · Plumbing · Boiler Services</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <a
            href={phoneHref}
            className="hidden sm:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
          >
            <Phone size={16} /> Call Now
          </a>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/10 px-5 py-4 space-y-3">
            <a href="#services" onClick={() => setMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white transition-colors">Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 text-slate-300 hover:text-white transition-colors">Contact</a>
            <a
              href={phoneHref}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-semibold transition-colors mt-2"
            >
              <Phone size={18} /> Call {phone}
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full mb-6 text-sm">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span>5.0 Rated Local Plumbing Service</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              Reliable Heating &{" "}
              <span className="text-orange-400">Plumbing Services</span> You Can Trust
            </h2>

            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Professional plumbing, boiler replacement and heating services with
              fast response times, clear communication and quality workmanship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={phoneHref}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-500/20"
              >
                <Phone size={20} /> Call {phone}
              </a>
              <a
                href="#contact"
                className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold text-lg text-center transition-colors"
              >
                Request a Quote
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              <TrustItem text="Boiler Replacement" />
              <TrustItem text="Efficient Service" />
              <TrustItem text="Local Plumber" />
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-2">Need urgent help?</h3>
            <p className="text-slate-400 text-sm mb-6">We're ready to take your call.</p>

            <div className="space-y-4">
              <InfoCard
                icon={<Phone size={20} />}
                title="Call Directly"
                text={phone}
                href={phoneHref}
              />
              <InfoCard
                icon={<Clock size={20} />}
                title="Opening Time"
                text="Opens 7:30 AM Monday"
              />
              <InfoCard
                icon={<MapPin size={20} />}
                title="Service Area"
                text="Local heating & plumbing services"
              />
            </div>

            <a
              href={phoneHref}
              className="mt-8 block text-center bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-orange-500/20 text-lg"
            >
              Tap to Call Now
            </a>

            <p className="text-center text-slate-500 text-xs mt-3">
              No hold music. Speak to us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-orange-500 py-6 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <StatItem value="5.0★" label="Google Rating" />
          <StatItem value="10+" label="5-Star Reviews" />
          <StatItem value="Fast" label="Response Times" />
          <StatItem value="Local" label="Trusted Service" />
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-24 px-5 bg-white text-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 tracking-tight">
              Heating & Plumbing Services
            </h2>
            <p className="text-slate-500 text-lg">
              From emergency repairs to full boiler replacements — we handle it all with care and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Flame size={26} />}
              title="Boiler Replacement"
              text="Clear, efficient boiler replacement service for homes and businesses. We'll guide you through the best options and install with minimal disruption."
            />
            <ServiceCard
              icon={<Droplets size={26} />}
              title="Plumbing Repairs"
              text="Help with leaks, pipework, repairs and general plumbing issues. Fast diagnosis, clean workmanship, and lasting solutions."
            />
            <ServiceCard
              icon={<ShieldCheck size={26} />}
              title="Heating Services"
              text="Reliable heating support with a focus on quality and customer care. Keeping your home warm when it matters most."
            />
          </div>

          <div className="text-center mt-12">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-orange-500/20"
            >
              <Phone size={20} /> Call for a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-5 bg-slate-50 text-slate-950">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Customer Reviews</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-6 tracking-tight">
            Rated 5.0 by Customers
          </h2>

          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={28} className="text-yellow-500 fill-yellow-500" />
            ))}
          </div>

          <p className="text-slate-500 font-medium mb-12">5.0 rating from 10 reviews on Google</p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ReviewCard
              name="Local Customer"
              text="Known for boiler replacement work and efficient service. Would highly recommend to anyone looking for a reliable local plumber."
            />
            <ReviewCard
              name="Local Customer"
              text="A strong local option for customers looking for dependable heating and plumbing help. Arrived on time and got the job done quickly."
            />
            <ReviewCard
              name="Local Customer"
              text="Very professional from start to finish. Explained everything clearly and the work was done to a great standard. Highly recommend."
            />
            <ReviewCard
              name="Local Customer"
              text="Excellent service. Sorted our heating issue the same day. Fair pricing and great communication throughout. Will definitely use again."
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-5 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Need a Plumber or Heating Specialist?
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Call today to speak directly with DC Heating & Plumbing. Fast response, honest advice, quality work.
          </p>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-colors shadow-xl shadow-orange-500/20"
          >
            <Phone size={24} /> Call {phone}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-5 bg-slate-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4 tracking-tight">
              Request a Free Quote
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Leave your details and a short message about the job. We'll get back to you promptly, or call us directly for the fastest response.
            </p>

            <div className="space-y-4">
              <ContactLine icon={<Phone size={18} />} text={phone} href={phoneHref} />
              <ContactLine icon={<Clock size={18} />} text="Opens 7:30 AM Monday" />
              <ContactLine icon={<MapPin size={18} />} text="Local heating & plumbing specialist" />
            </div>

            <div className="mt-10 p-5 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-slate-300 text-sm font-medium mb-1">Prefer to call?</p>
              <a
                href={phoneHref}
                className="text-orange-400 hover:text-orange-300 font-bold text-xl transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>

          <form className="bg-white text-slate-950 p-8 rounded-3xl shadow-2xl space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
              <input className="field-input" placeholder="John Smith" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
              <input className="field-input" type="tel" placeholder="08X XXX XXXX" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed</label>
              <input className="field-input" placeholder="e.g. Boiler replacement" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Tell us about the job</label>
              <textarea className="field-input h-28 resize-none" placeholder="Brief description of the work needed..." />
            </div>
            <button
              type="button"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-orange-500/20"
            >
              Request Callback
            </button>
            <p className="text-xs text-slate-400 text-center">
              For fastest response, call us directly on{" "}
              <a href={phoneHref} className="text-orange-500 font-medium hover:underline">
                {phone}
              </a>
            </p>
          </form>
        </div>
      </section>

      <footer className="py-8 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div>
            <span className="font-semibold text-white">DC Heating & Plumbing</span>
            <span className="mx-2">·</span>
            <span>Heating · Plumbing · Boiler Services</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={phoneHref} className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
              {phone}
            </a>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>
        </div>
      </footer>

      <style>{`
        .field-input {
          width: 100%;
          border: 1.5px solid #e2e8f0;
          padding: 12px 14px;
          border-radius: 10px;
          outline: none;
          font-size: 0.95rem;
          transition: border-color 0.15s, box-shadow 0.15s;
          background: #f8fafc;
        }
        .field-input:focus {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.15);
          background: #fff;
        }
      `}</style>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-orange-100 text-sm mt-0.5">{label}</div>
    </div>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-slate-300">
      <CheckCircle className="text-orange-400 shrink-0" size={18} />
      <span className="text-sm">{text}</span>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl transition-colors">
      <div className="text-orange-400 shrink-0 mt-0.5">{icon}</div>
      <div>
        <h4 className="font-semibold text-sm text-slate-400">{title}</h4>
        <p className="text-white font-medium">{text}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : <div>{content}</div>;
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 border border-orange-100">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{text}</p>
    </div>
  );
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <p className="text-slate-700 leading-relaxed mb-4">{text}</p>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 text-xs font-bold">
          {name[0]}
        </div>
        <span className="text-slate-500 text-sm font-medium">{name}</span>
      </div>
    </div>
  );
}

function ContactLine({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
      <div className="text-orange-400 shrink-0">{icon}</div>
      <span>{text}</span>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : <div>{inner}</div>;
}
