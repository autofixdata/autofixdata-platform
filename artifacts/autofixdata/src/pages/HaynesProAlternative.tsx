import { AlternativePageTemplate } from "./AlternativePage";

export default function HaynesProAlternative() {
  const tableData = [
    { feature: "VESA Interactive Wiring", competitor: true },
    { feature: "Smart Diagnostics", competitor: true },
    { feature: "Raw Unedited OEM Manuals", competitor: false },
    { feature: "Direct-Hit / Real World Fixes", competitor: false },
    { feature: "Heavy US Domestic Coverage", competitor: false },
  ];

  return (
    <AlternativePageTemplate
      competitorName="Haynes Pro"
      competitorWeakness="access to raw unedited OEM manuals and a broader database of real-world verified fixes"
      seoTitle="Best Haynes Pro Alternative for Professional Workshops | AutoFixData"
      seoDesc="Searching for a Haynes Pro alternative? AutoFixData provides OEM-verified repair data, wiring diagrams and TSBs for 150M+ vehicles. Free trial."
      tableData={tableData}
      pageSlug="haynespro-alternative"
    />
  );
}

