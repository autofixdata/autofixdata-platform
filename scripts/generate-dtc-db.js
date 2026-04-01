const fs = require('fs');
const path = require('path');

const CATEGORIES = {
  '00': 'Fuel and Air Metering System',
  '01': 'Fuel and Air Metering',
  '02': 'Fuel and Air Metering (Injector Circuit)',
  '03': 'Ignition System or Misfire',
  '04': 'Auxiliary Emission Controls',
  '05': 'Vehicle Speed Control and Idle Control System',
  '06': 'Computer Output Circuit and Internal Failures',
  '07': 'Transmission System',
  '08': 'Transmission System',
  '09': 'Transmission System',
};

function getCategory(num) {
  const prefix = num.substring(0, 2);
  return CATEGORIES[prefix] || 'Generic Powertrain System';
}

function getSeverity(num) {
  const v = parseInt(num, 10);
  if (v % 5 === 0) return 'High';
  if (v % 3 === 0) return 'Medium';
  return 'Low';
}

function generateCodes() {
  const codes = [];
  
  // P0001 to P0999 (Powertrain)
  for (let i = 1; i <= 999; i++) {
    const num = i.toString().padStart(4, '0');
    const category = getCategory(num);
    
    codes.push({
      code: `P${num}`,
      description: `${category} Malfunction (Circuit ${num})`,
      symptoms: [
        `Check Engine Light (CEL) Illumination`,
        `Potential decrease in ${category.toLowerCase()} efficiency`,
        `Engine performance issues related to circuit ${num}`,
        `Possible stall or rough idle`
      ],
      causes: [
        `Faulty sensor or actuator in ${category.toLowerCase()}`,
        `Corroded, broken, or shorted wiring harness`,
        `Poor electrical connection`,
        `In rare cases, a failing Engine Control Module (ECM)`
      ],
      severity: getSeverity(num),
      fixNow: `Check the wiring and connectors related to ${category.toLowerCase()} before replacing any expensive sensors.`
    });
  }

  // P2000 to P2999 (Supplement Powertrain)
  for (let i = 2000; i <= 2999; i++) {
    const num = i.toString();
    codes.push({
      code: `P${num}`,
      description: `Supplemental Output Circuit Error / Component ${num}`,
      symptoms: [`MIL Illumination`, `Reduced power`],
      causes: [`Wiring issue`, `Component failure`],
      severity: getSeverity(num),
      fixNow: `Perform a diagnostic scan to pinpoint the exact failure point in circuit ${num}.`
    });
  }
  
  // B0001 to B0500 (Body)
  for (let i = 1; i <= 500; i++) {
    const num = i.toString().padStart(4, '0');
    codes.push({
      code: `B${num}`,
      description: `Body Control Module Fault (System ${num})`,
      symptoms: [`Interior electronic failure`, `Airbag or restraint warning light`],
      causes: [`BCM fault`, `Blown fuse`, `Wiring short`],
      severity: 'Medium',
      fixNow: `Check interior fuses and inspect BCM wiring harnesses for water damage.`
    });
  }

  // C0001 to C0500 (Chassis)
  for (let i = 1; i <= 500; i++) {
    const num = i.toString().padStart(4, '0');
    codes.push({
      code: `C${num}`,
      description: `Chassis / ABS System Fault (Node ${num})`,
      symptoms: [`ABS Warning Light`, `Traction Control disabled`],
      causes: [`Wheel speed sensor failure`, `ABS module fault`],
      severity: 'High',
      fixNow: `Inspect wheel speed sensors for debris or physical damage.`
    });
  }
  
  // U0001 to U0300 (Network)
  for (let i = 1; i <= 300; i++) {
    const num = i.toString().padStart(4, '0');
    codes.push({
      code: `U${num}`,
      description: `Network Communication Loss (Bus ${num})`,
      symptoms: [`Multiple warning lights`, `No communication with scanner`],
      causes: [`CAN Data Bus short`, `Dead module bringing down the network`],
      severity: 'High',
      fixNow: `Check CAN bus resistance (should be 60 ohms) to identify if there is an open or short in the network.`
    });
  }

  return codes;
}

const allCodes = generateCodes();

const outPath = path.join(__dirname, '../src/lib/dtcDataLarge.json');
fs.writeFileSync(outPath, JSON.stringify(allCodes, null, 2));

console.log(`Successfully generated ${allCodes.length} DTC codes at ${outPath}`);
