export interface DTCData {
  code: string;
  title: string;
  description: string;
  symptoms: string[];
  causes: string[];
  severity: "Low" | "Medium" | "High" | "Critical";
}

export const TOP_DTC_CODES: DTCData[] = [
  {
    code: "P0420",
    title: "Catalyst System Efficiency Below Threshold (Bank 1)",
    description: "The engine control module (ECM) detects that the catalytic converter is not functioning efficiently, meaning emissions are exceeding permissible levels.",
    symptoms: ["Check Engine Light ON", "Decreased fuel economy", "Lack of engine power", "Rotten egg smell from exhaust"],
    causes: ["Failed catalytic converter", "Faulty oxygen (O2) sensor", "Exhaust leak", "Engine misfire", "Leaking fuel injector"],
    severity: "Medium"
  },
  {
    code: "P0300",
    title: "Random/Multiple Cylinder Misfire Detected",
    description: "The ECM has detected a misfire occurring randomly or across multiple cylinders.",
    symptoms: ["Check Engine Light flashing", "Rough idle", "Engine hesitation", "Poor fuel economy", "Hard starting"],
    causes: ["Worn spark plugs", "Faulty ignition coils", "Vacuum leak", "Low fuel pressure", "Clogged fuel injectors", "EGR system fault"],
    severity: "High"
  },
  {
    code: "P0171",
    title: "System Too Lean (Bank 1)",
    description: "The engine is running 'lean', meaning there is too much air and not enough fuel in the air/fuel mixture.",
    symptoms: ["Check Engine Light ON", "Rough idle", "Engine stalling", "Lack of power on acceleration"],
    causes: ["Vacuum leak", "Faulty Mass Air Flow (MAF) sensor", "Low fuel pressure", "Clogged fuel injectors", "Faulty PCV valve"],
    severity: "Medium"
  },
  {
    code: "P0455",
    title: "Evaporative Emission Control System Leak Detected (Gross Leak)",
    description: "The EVAP system has detected a large leak, allowing fuel vapors to escape into the atmosphere.",
    symptoms: ["Check Engine Light ON", "Noticeable fuel smell", "Slight drop in fuel economy"],
    causes: ["Missing or loose gas cap", "Cracked EVAP hose", "Faulty purge valve", "Faulty vent valve", "Damaged fuel tank filler neck"],
    severity: "Low"
  },
  {
    code: "P0113",
    title: "Intake Air Temperature Sensor 1 Circuit High",
    description: "The ECM detects a voltage signal from the Intake Air Temperature (IAT) sensor that indicates the air is excessively cold, usually indicating an open circuit or unplugged sensor.",
    symptoms: ["Check Engine Light ON", "Hard starting in cold weather", "Poor engine performance", "Decreased fuel efficiency"],
    causes: ["Unplugged IAT sensor", "Broken wiring to the IAT sensor", "Failed IAT sensor", "Failed MAF sensor (if integrated)"],
    severity: "Medium"
  },
  {
    code: "P0401",
    title: "Exhaust Gas Recirculation (EGR) Flow Insufficient",
    description: "The EGR system is not flowing enough exhaust gases back into the intake manifold to lower combustion temperatures.",
    symptoms: ["Check Engine Light ON", "Engine pinging or knocking on acceleration", "Failed emissions test"],
    causes: ["Clogged EGR valve or passages", "Faulty DPFE sensor", "Damaged vacuum lines", "Faulty EGR solenoid"],
    severity: "Medium"
  },
  {
    code: "P0135",
    title: "Oxygen Sensor Heater Circuit Malfunction (Bank 1, Sensor 1)",
    description: "The ECM has detected a malfunction in the heater circuit of the upstream oxygen sensor, causing it to take longer to reach operating temperature.",
    symptoms: ["Check Engine Light ON", "Poor fuel economy during engine warmup", "Rough idle on cold start"],
    causes: ["Blown O2 sensor heater fuse", "Broken heater wire in the sensor", "Corroded connector", "Failed O2 sensor"],
    severity: "Low"
  },
  {
    code: "P0340",
    title: "Camshaft Position Sensor 'A' Circuit",
    description: "The ECM is not receiving a signal from the camshaft position sensor, meaning it cannot properly sync fuel injection and spark timing.",
    symptoms: ["Check Engine Light ON", "Engine crank but no start", "Engine stalling", "Loss of power", "Misfires"],
    causes: ["Failed camshaft position sensor", "Wiring issue", "Broken timing belt/chain", "Faulty ECM"],
    severity: "Critical"
  }
];

export function getDtcByCode(code: string): DTCData | undefined {
  return TOP_DTC_CODES.find(d => d.code.toUpperCase() === code.toUpperCase());
}
