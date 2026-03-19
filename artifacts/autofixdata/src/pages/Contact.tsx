import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <SEO 
        title="Contact Auto Fix Data | Workshop Database Support & Sales"
        description="Get in touch with Auto Fix Data for sales, support or partnership enquiries. Serving professional workshops across UK, US, Europe and Argentina."
      />
      
      <section className="bg-afd-navy py-16 px-6 text-center dark-section border-b border-afd-border">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Auto Fix Data</h1>
        <p className="text-xl text-afd-slate max-w-2xl mx-auto">
          Our support team is here to help your workshop succeed.
        </p>
      </section>

      <section className="py-20 bg-afd-light px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-afd-navy mb-6">Send us a message</h2>
            <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-afd-navy mb-1">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-afd-blue" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-afd-navy mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-afd-blue" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-afd-navy mb-1">Subject</label>
                <select name="subject" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-afd-blue">
                  <option>Sales Enquiry</option>
                  <option>Technical Support</option>
                  <option>Account/Billing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-afd-navy mb-1">Message</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-afd-blue"></textarea>
              </div>
              <button type="submit" className="w-full bg-afd-yellow text-black font-bold py-3 rounded-lg hover:bg-afd-yellow-hover">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-afd-navy mb-6">Contact Information</h2>
              <p className="text-afd-text mb-8 leading-relaxed">
                For the fastest response, please use the contact form or email our support desk. Phone support is available for current subscribers.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-afd-blue" />
              </div>
              <div>
                <h4 className="font-bold text-afd-navy">Email Us</h4>
                <p className="text-afd-slate text-sm">support@autofixdata.com</p>
                <p className="text-afd-slate text-sm">sales@autofixdata.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-afd-blue" />
              </div>
              <div>
                <h4 className="font-bold text-afd-navy">Global Head Office</h4>
                <p className="text-afd-slate text-sm">Auto Fix Data Ltd.</p>
                <p className="text-afd-slate text-sm">London, United Kingdom</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
