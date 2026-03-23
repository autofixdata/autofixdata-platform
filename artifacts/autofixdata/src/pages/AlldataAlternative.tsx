import { AlternativePageTemplate } from "./AlternativePage";

export default function AlldataAlternative() {
  const tableData = [
    { feature: "Full European Vehicle Coverage", competitor: false, missing_reason: "Historically weak on EU specific models" },
    { feature: "Integrated Real-World Fixes (Identifix)", competitor: false, missing_reason: "Requires entirely separate subscription" },
    { feature: "Interactive Colour Wiring Diagrams", competitor: false, missing_reason: "Uses unedited, hard-to-read static PDFs" },
    { feature: "Clean, Modern User Interface", competitor: false, missing_reason: "Legacy platform structure" },
    { feature: "Unedited OEM Repair Data", competitor: true },
    { feature: "Technical Service Bulletins (TSBs)", competitor: true },
  ];

  return (
    <AlternativePageTemplate
      competitorName="ALLDATA"
      competitorWeakness="comprehensive European coverage, responsive colour wiring diagrams, and integrated real-world fixes"
      competitorPrice="£149+"
      seoTitle="Best ALLDATA Alternative for Modern Workshops | Auto Fix Data"
      seoDesc="Searching for a better ALLDATA alternative? Stop overpaying. Auto Fix Data delivers superior European coverage and wiring diagrams for a fraction of the price."
      tableData={tableData}
      pageSlug="alldata-alternative"
    />
  );
}
