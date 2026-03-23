import { AlternativePageTemplate } from "./AlternativePage";

export default function AlldataAlternative() {
  const tableData = [
    { feature: "Unedited OEM Repair Data", competitor: true },
    { feature: "Technical Service Bulletins (TSBs)", competitor: true },
    { feature: "Full European Vehicle Coverage", competitor: false },
    { feature: "Integrated Diagnostic Fix Data", competitor: false },
    { feature: "Multiple Database Aggregation", competitor: false },
  ];

  return (
    <AlternativePageTemplate
      competitorName="ALLDATA"
      competitorWeakness="better European coverage, interactive colour wiring, and Identifix real-world fixes"
      seoTitle="Best ALLDATA Alternative for Professional Workshops | AutoFixData"
      seoDesc="Searching for an ALLDATA alternative? AutoFixData delivers OEM-verified repair data, wiring diagrams, DTC codes and TSBs for 150M+ vehicles. Instant access. Start free."
      tableData={tableData}
      pageSlug="alldata-alternative"
    />
  );
}

