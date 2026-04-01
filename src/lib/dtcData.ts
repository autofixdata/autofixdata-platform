import dtcDataLarge from './dtcDataLarge.json';

export interface DtcCode {
  code: string;
  description: string;
  symptoms: string[];
  causes: string[];
  severity: 'High' | 'Medium' | 'Low' | string;
  fixNow: string;
}

export const TOP_DTC_CODES: DtcCode[] = dtcDataLarge as DtcCode[];

export function getDtcByCode(code: string): DtcCode | undefined {
  return TOP_DTC_CODES.find((d) => d.code.toUpperCase() === code.toUpperCase());
}
