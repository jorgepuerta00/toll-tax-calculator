export interface ICongestionTaxCalculator {
  getTax(): number;
  isTollFreeVehicle(): boolean;
  getTollFee(date: Date): number;
  isTollFreeDate(date: Date): boolean;
}