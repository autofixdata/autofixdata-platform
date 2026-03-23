import { AlternativePageTemplate } from "./AlternativePage";

export default function Mitchell1Alternative() {
  const tableData = [
    { feature: "Transparent Subscription Pricing", competitor: false, missing_reason: "Complex enterprise tiering and hidden fees" },
    { feature: "Lightning Fast Cloud Rendering", competitor: false, missing_reason: "Notoriously slow and heavy application" },
    { feature: "Direct OEM Sourced Wiring Diagrams", competitor: true },
    { feature: "Integrated Shop Management Options", competitor: true },
    { feature: "Mobile-Optimized Interface", competitor: false, missing_reason: "Clunky on tablets in the bay" },
  ];

  return (
    <AlternativePageTemplate
      competitorName="Mitchell1"
      competitorWeakness="a fast, responsive interface and transparent, affordable pricing plans"
      competitorPrice="£169+"
      seoTitle="Best Mitchell 1 ProDemand Alternative | Auto Fix Data"
      seoDesc="Is Mitchell1 ProDemand too slow or expensive? Auto Fix Data is the fastest, most cost-effective alternative for ProDemand OEM workshop data and wiring."
      tableData={tableData}
      pageSlug="mitchell1-alternative"
    />
  );
}
