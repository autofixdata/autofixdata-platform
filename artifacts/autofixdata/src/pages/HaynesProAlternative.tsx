import { AlternativePageTemplate } from "./AlternativePage";

export default function HaynesProAlternative() {
  const tableData = [
    { feature: "Comprehensive Asian/Domestic Coverage", competitor: false, missing_reason: "Heavily skewed towards EU models only" },
    { feature: "Integrated Original OEM Manuals", competitor: false, missing_reason: "Often provides redraws instead of raw OEM text" },
    { feature: "Diagnostic Trouble Code Flowcharts", competitor: true },
    { feature: "Interactive Colour Wiring Diagrams", competitor: true },
    { feature: "Real-World Technician Fixes", competitor: false, missing_reason: "Lacks Identifix-style mechanic network data" },
  ];

  return (
    <AlternativePageTemplate
      competitorName="HaynesPro"
      competitorWeakness="unfiltered OEM procedures, deep US/Asian market coverage, and real-world verified fixes"
      competitorPrice="£110+"
      seoTitle="Top HaynesPro Alternative for Workshops | Auto Fix Data"
      seoDesc="Need a HaynesPro alternative that actually includes raw OEM data and better global coverage? Auto Fix Data delivers wiring and TSBs for 150M+ vehicles."
      tableData={tableData}
      pageSlug="haynespro-alternative"
    />
  );
}
