import { AlternativePageTemplate } from "./AlternativePage";

export default function AutodataAlternative() {
  const tableData = [
    { feature: "Service Intervals & Specs", competitor: true },
    { feature: "Component Locations", competitor: true },
    { feature: "Full OEM Step-by-Step Procedures", competitor: false },
    { feature: "Unedited Factory TSBs", competitor: false },
    { feature: "US & Asian Import Coverage", competitor: false },
  ];

  return (
    <AlternativePageTemplate
      competitorName="AutoData"
      competitorWeakness="the deeper OEM-level procedures and complex diagnostic flowcharts required for heavy repairs"
      seoTitle="Best AutoData Alternative for Workshop Technicians | AutoFixData"
      seoDesc="Looking for an AutoData alternative? AutoFixData provides OEM-verified repair data, wiring diagrams and DTC codes for 150M+ vehicles. Trusted by 10,000+ garages."
      tableData={tableData}
      pageSlug="autodata-alternative"
    />
  );
}

