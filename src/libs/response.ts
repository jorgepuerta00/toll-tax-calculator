export interface ITollTaxCalculatorResponse {
  vehicleType: string,
  city: string,
  totalFee: number
}

export class TollTaxCalculatorResponse implements ITollTaxCalculatorResponse {
  public vehicleType: string;
  public city: string;
  public totalFee: number;

  constructor(vehicleType: string, city: string, totalFee: number) {
    this.vehicleType = vehicleType;
    this.city = city;
    this.totalFee = totalFee;
  }
}