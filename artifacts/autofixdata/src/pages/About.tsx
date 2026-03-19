import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About Auto Fix Data | Professional Workshop Repair Database Platform"
        description="Auto Fix Data is a professional automotive workshop repair data platform serving 10,000+ workshops across UK, US, Europe and Argentina. Our story, mission and markets."
      />
      
      <section className="bg-afd-navy py-24 px-6 text-center dark-section border-b border-afd-border">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About Auto Fix Data</h1>
        <p className="text-xl text-afd-slate max-w-2xl mx-auto">
          Empowering professional technicians with the data they need to fix vehicles right the first time.
        </p>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="max-w-[800px] mx-auto prose prose-lg prose-blue">
          <h2 className="text-afd-navy font-bold">Our Story</h2>
          <p className="text-afd-text">
            Auto Fix Data was founded to solve a critical problem in the independent garage sector: the fragmentation of repair data. Modern vehicles are too complex to rely on a single source of truth, yet subscribing to ALLDATA, AutoData, Mitchell1, and Haynes Pro individually is financially impossible for most independent workshops.
          </p>
          <p className="text-afd-text">
            We built a platform that aggregates these industry-standard databases into a single, seamless subscription model. Today, we serve over 10,000 workshops globally, ensuring that when a difficult job rolls into the bay, the technician has the OEM data required to diagnose and repair it profitably.
          </p>

          <h2 className="text-afd-navy font-bold mt-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
            <div className="bg-afd-light p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-afd-navy mb-2">Professional Grade</h3>
              <p className="text-afd-text text-sm">We only serve registered businesses. Our data is unedited and factory-level.</p>
            </div>
            <div className="bg-afd-light p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-afd-navy mb-2">Transparent</h3>
              <p className="text-afd-text text-sm">Clear pricing, no hidden fees, and easily accessible support.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
