import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { CheckCircle2, Shield } from "lucide-react";
import { useEffect } from "react";
import { buildProductSchema, SITE_URL } from "@/lib/richSnippets";

export default function FreeTrial() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.autodatalogin.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          <div className="w-[121%] max-w-[664px] mx-auto overflow-hidden">
            <iframe
                src="https://link.autodatalogin.com/widget/form/4tQbweI60VyYW02nlcVf"
                style={{width:"100%",height:"100%",border:"none",borderRadius:"12px"}}
                id="inline-4tQbweI60VyYW02nlcVf" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Start Your Free 7-Day Trial"
                data-height="671"
                data-layout-iframe-id="inline-4tQbweI60VyYW02nlcVf"
                data-form-id="4tQbweI60VyYW02nlcVf"
                title="Start Your Free 7-Day Trial"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
