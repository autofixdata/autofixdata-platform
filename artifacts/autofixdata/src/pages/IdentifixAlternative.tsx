import { AlternativePageTemplate } from "./AlternativePage";

export default function IdentifixAlternative() {
  const tableData = [
    { feature: "Real-world Verified Fixes", competitor: true },
    { feature: "DTC Search Engine", competitor: true },
    { feature: "Complete OEM Service Manuals", competitor: false },
    { feature: "Interactive VESA Wiring Diagrams", competitor: false },
    { feature: "Modern European Coverage", competitor: false },
  ];

  return (
    <AlternativePageTemplate
      competitorName="Identifix Direct-Hit"
      competitorWeakness="full complete OEM service manuals and interactive European wiring schematics alongside fix data"
      seoTitle="Best Identifix Alternative for Diagnostic Workshops | AutoFixData"
      seoDesc="Looking for an Identifix Direct-Hit alternative? AutoFixData provides OEM repair data, DTC codes and real-world diagnostic data for 150M+ vehicles."
      tableData={tableData}
      pageSlug="identifix-alternative"
    />
  );
}

