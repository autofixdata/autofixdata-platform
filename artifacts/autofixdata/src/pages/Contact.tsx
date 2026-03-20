import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Mail, Phone, MapPin, MessageCircle, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Auto Fix Data",
    "url": "https://autofixdata.com/contact",
    "description": "Contact Auto Fix Data for sales, support or technical assistance.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Auto Fix Data",
      "telephone": "+19707171871",
      "email": "support@autofixdata.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "228 Park Ave S",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10000",
        "addressCountry": "US"
      }
    }
  });

  return (
    <Layout>
      <SEO
        title="Contact Auto Fix Data | Workshop Database Support & Sales"
        description="Contact Auto Fix Data for sales, technical support or billing enquiries. Based in New York, USA. Call +1 970-717-1871 or email our support team anytime."
        schema={schema}
        breadcrumb={[{ name: "Contact", url: "https://autofixdata.com/contact" }]}
      />

      <section className="bg-afd-navy py-16 px-6 text-center dark-section border-b border-white/5">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Auto Fix Data</h1>
        <p className="text-xl text-afd-slate max-w-2xl mx-auto">
          Our team is here to help your workshop get set up, troubleshoot issues, or find the right plan.
        </p>
      </section>

      {/* Contact Cards Row */}
      <section className="py-12 bg-white border-b border-gray-100 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <Phone className="w-5 h-5" />, label: "Phone / WhatsApp", value: "+1 970-717-1871", sub: "Mon–Fri 9am–6pm ET", href: "tel:+19707171871", color: "text-afd-blue" },
            { icon: <Mail className="w-5 h-5" />, label: "Support Email", value: "support@autofixdata.com", sub: "Response within 4 hours", href: "mailto:support@autofixdata.com", color: "text-afd-blue" },
            { icon: <Mail className="w-5 h-5" />, label: "Sales Email", value: "sales@autofixdata.com", sub: "New subscriptions & pricing", href: "mailto:sales@autofixdata.com", color: "text-afd-blue" },
            { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp Chat", value: "Message us now →", sub: "Fastest response channel", href: "https://api.whatsapp.com/send/?phone=447367064215", color: "text-[#25D366]" },
          ].map(({ icon, label, value, sub, href, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group p-5 rounded-2xl border border-gray-200 hover:border-afd-yellow hover:shadow-md transition-all bg-white flex flex-col gap-3"
            >
              <div className={`w-10 h-10 bg-afd-light rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
              <div>
                <div className="text-xs text-afd-slate font-medium mb-0.5">{label}</div>
                <div className="font-bold text-afd-navy text-sm group-hover:text-afd-blue transition-colors">{value}</div>
                <div className="text-xs text-afd-slate mt-0.5">{sub}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-afd-navy mb-2">Send us a message</h2>
            <p className="text-afd-text text-sm mb-6">We'll get back to you within one business day.</p>
            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-afd-navy mb-1">First Name</label>
                  <input type="text" name="first_name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-afd-blue text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-afd-navy mb-1">Last Name</label>
                  <input type="text" name="last_name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-afd-blue text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-afd-navy mb-1">Work Email</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-afd-blue text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-afd-navy mb-1">Phone Number</label>
                <input type="tel" name="phone" placeholder="+1 (___) ___-____" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-afd-blue text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-afd-navy mb-1">Subject</label>
                <select name="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-afd-blue text-sm bg-white">
                  <option>Sales Enquiry — New Subscription</option>
                  <option>Technical Support</option>
                  <option>Account / Billing</option>
                  <option>Partnership / Reseller</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-afd-navy mb-1">Message</label>
                <textarea name="message" rows={4} required placeholder="Tell us about your workshop and what you need..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-afd-blue text-sm resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-afd-yellow text-black font-bold py-4 rounded-xl hover:bg-afd-yellow-hover transition-all flex items-center justify-center gap-2 text-base shadow-lg shadow-afd-yellow/20">
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-6">

            {/* Office */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-afd-navy mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-afd-blue" /> Office Address
              </h3>
              <div className="text-sm text-afd-text leading-relaxed space-y-1">
                <div className="font-bold text-afd-navy">Auto Fix Data Inc.</div>
                <div>228 Park Ave S</div>
                <div>New York, NY 10000</div>
                <div className="font-semibold">United States</div>
              </div>
              <a
                href="https://maps.google.com/?q=228+Park+Ave+S+New+York+NY+10000"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs text-afd-blue hover:underline font-medium"
              >
                View on Google Maps →
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-afd-navy mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-afd-blue" /> Phone & WhatsApp
              </h3>
              <a href="tel:+19707171871" className="text-afd-navy font-bold text-xl hover:text-afd-blue transition-colors">
                +1 970-717-1871
              </a>
              <p className="text-afd-slate text-sm mt-1">Available Mon–Fri, 9am–6pm Eastern Time</p>
              <a
                href="https://api.whatsapp.com/send/?phone=447367064215"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 px-4 py-3 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:bg-[#20b858] transition-all w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-afd-navy mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-afd-blue" /> Business Hours
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM ET" },
                  { day: "Saturday", hours: "10:00 AM – 2:00 PM ET" },
                  { day: "Sunday", hours: "Closed" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-afd-slate">{day}</span>
                    <span className="font-semibold text-afd-navy">{hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-afd-slate mt-4 border-t border-gray-100 pt-4">
                Email support is monitored outside business hours. Critical subscription issues are handled within 2 hours.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
