import { NextResponse } from 'next/server';
import { TOP_DTC_CODES } from '@/lib/dtcData';
import carDb from '@/lib/largeCarDatabase.json';
import { slugify } from '@/lib/carData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q')?.toLowerCase() || '';
  
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = [];

  // 1. Search DTCs
  const dtcHits = TOP_DTC_CODES
    .filter(dtc => dtc.code.toLowerCase().includes(q) || dtc.description.toLowerCase().includes(q))
    .slice(0, 4)
    .map(dtc => ({
      type: 'dtc',
      title: `${dtc.code} - ${dtc.description}`,
      // url will be computed on client with the correct language prefix
      url: `/dtc/${dtc.code}`
    }));

  results.push(...dtcHits);

  // 2. Search Cars
  const carHits: any[] = [];
  let carCount = 0;
  
  // We'll traverse the database for make/model matches
  for (const make of Object.keys(carDb)) {
    if (carCount >= 6) break;

    // Check make match
    if (make.toLowerCase().includes(q)) {
      carHits.push({ 
        type: 'manual', 
        title: `${make} Repair Manuals`, 
        url: `/manuals/${slugify(make)}` 
      });
      carCount++;
      continue;
    }

    // Check model match
    const models = Object.keys((carDb as any)[make]);
    for (const model of models) {
      const makeModelStr = `${make} ${model}`.toLowerCase();
      if (makeModelStr.includes(q)) {
        carHits.push({ 
          type: 'manual', 
          title: `${make} ${model}`, 
          url: `/manuals/${slugify(make)}/${slugify(model)}` 
        });
        carCount++;
        if (carCount >= 6) break;
      }
    }
  }

  results.push(...carHits);

  return NextResponse.json({ results });
}
