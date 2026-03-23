import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Shield } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { buildProductSchema, AGGREGATE_RATING, REVIEWS, SITE_URL } from "@/lib/richSnippets";

const trialSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid professional email required"),
  workshop: z.string().min(2, "Workshop name is required"),
  country: z.string().min(1, "Please select a country"),
  technicians: z.string().min(1, "Please select team size"),
});

type TrialForm = z.infer<typeof trialSchema>;

export default function FreeTrial() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const schema = JSON.stringify(buildProductSchema({
    name: "Auto Fix Data — Free 7-Day Trial",
    description: "Start a free 7-day trial of Auto Fix Data. Full access to OEM repair data, wiring diagrams, DTC codes and TSBs for 150M+ vehicles. No credit card required.",
    url: `${SITE_URL}/free-trial`,
    offers: [{
      "@type": "Offer",
      name: "Free 7-Day Trial",
      price: "0",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/free-trial`,
      description: "7-day full access trial — no credit card required. Instant access to all 5 databases.",
    }],
  }));

  const { register, handleSubmit, formState: { errors } } = useForm<TrialForm>({
    resolver: zodResolver(trialSchema)
  });

  const onSubmit = async (data: TrialForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, subject: "New Free Trial Request" }),
      });
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Form error", error);
    }
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEO 
        title="Start Your Free 7-Day Trial | Auto Fix Data Workshop Database"
        description="Get full access to Auto Fix Data for 7 days — no credit card required. OEM repair data, wiring diagrams, DTC codes and TSBs for 150M+ vehicles."
        schema={schema}
      />

      <div className="bg-afd-light min-h-[calc(100vh-200px)] py-16">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Value Prop */}
          <div>
            <span className="text-afd-blue font-bold tracking-wider uppercase text-sm mb-4 block">Professional Access</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-afd-navy mb-6 leading-tight">
              Start Your Free <br/>7-Day Trial
            </h1>
            <p className="text-xl text-afd-text mb-8">
              Experience the power of having all 5 major repair databases in a single interface. Built exclusively for professional automotive workshops.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Full access to OEM Repair Procedures & TSBs",
                "Interactive colour wiring diagrams & pinouts",
                "Complete DTC code library with test steps",
                "No credit card required for trial",
                "No automatic charges or hidden fees",
                "Instant access to 150M+ vehicle records"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-afd-yellow shrink-0 mt-0.5" />
                  <span className="text-afd-navy font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <Shield className="w-8 h-8 text-green-500 shrink-0" />
              <p className="text-sm text-afd-text">
                <strong className="text-afd-navy block">Data Security Guarantee</strong>
                Your information is securely encrypted and never sold to third parties. We only verify you are a professional workshop.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-afd-yellow"></div>
            
            {isSuccess ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-afd-navy mb-4">Thank You!</h3>
                <p className="text-afd-text text-lg mb-8">
                  We have received your trial request. In the meantime, you can chat with us on WhatsApp to get immediate access to your account!
                </p>
                <a
                  href="https://api.whatsapp.com/send/?phone=447367064215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#20b858] transition-all shadow-lg shadow-[#25D366]/20"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat with us on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-afd-navy mb-8">Create your account</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-afd-navy mb-2">First Name</label>
                      <input 
                        {...register("firstName")}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-afd-blue focus:ring-2 focus:ring-afd-blue/20 transition-all"
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-afd-navy mb-2">Last Name</label>
                      <input 
                        {...register("lastName")}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-afd-blue focus:ring-2 focus:ring-afd-blue/20 transition-all"
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-afd-navy mb-2">Work Email</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-afd-blue focus:ring-2 focus:ring-afd-blue/20 transition-all"
                      placeholder="john@yourgarage.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-afd-navy mb-2">Workshop / Company Name</label>
                    <input 
                      {...register("workshop")}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-afd-blue focus:ring-2 focus:ring-afd-blue/20 transition-all"
                      placeholder="JD Auto Repairs Ltd"
                    />
                    {errors.workshop && <p className="text-red-500 text-xs mt-1">{errors.workshop.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-afd-navy mb-2">Country</label>
                      <select 
                        {...register("country")}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-afd-blue focus:ring-2 focus:ring-afd-blue/20 transition-all text-afd-navy"
                      >
                        <option value="">Select...</option>
                        <option value="UK">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="IT">Italy</option>
                        <option value="ES">Spain</option>
                        <option value="OTHER">Other</option>
                      </select>
                      {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-afd-navy mb-2">Technicians</label>
                      <select 
                        {...register("technicians")}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-afd-blue focus:ring-2 focus:ring-afd-blue/20 transition-all text-afd-navy"
                      >
                        <option value="">Select...</option>
                        <option value="1">1 (Solo)</option>
                        <option value="2-5">2-5</option>
                        <option value="6-10">6-10</option>
                        <option value="11+">11+</option>
                      </select>
                      {errors.technicians && <p className="text-red-500 text-xs mt-1">{errors.technicians.message}</p>}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-afd-yellow text-black font-bold text-lg py-4 rounded-xl hover:bg-afd-yellow-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 shadow-lg shadow-afd-yellow/20"
                  >
                    {isSubmitting ? "Processing..." : "Start Free Trial"}
                  </button>
                  <p className="text-xs text-center text-afd-slate mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy. Professional workshops only.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
