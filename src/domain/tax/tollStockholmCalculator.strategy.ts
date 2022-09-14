import IVehicle from "../vehicle/IVehicle";
import { AbstractCongestionTaxCalculator } from "./interfaces/AbstractCongestionTaxCalculator";

export class TollStockholmCalculator extends AbstractCongestionTaxCalculator {

  constructor(vehicle: IVehicle, dates: Date[]) {
    super(vehicle, dates);
  }

  public getTax(): number {
    let intervalStart: Date = this.dates[0];
    let totalFee: number = 0;
  
    for (let i = 0; i < this.dates.length; i++) {
      const date: Date = this.dates[i];

      let nextFee: number = this.getTollFee(date);
      let tempFee = this.getTollFee(intervalStart);
  
      let diffInMillies = date.getTime() - intervalStart.getTime();
      let minutes = diffInMillies / 1000 / 60;
  
      if (minutes <= 60) {
        if (totalFee > 0) totalFee -= tempFee;
        if (nextFee >= tempFee) tempFee = nextFee;
        totalFee += tempFee;
      } else {
        totalFee += nextFee;
      }
  
      if (totalFee > 70) totalFee = 70;
    }
  
    return totalFee;
  }

  public getTollFee(date: Date): number {
    if (this.isTollFreeDate(date) || this.isTollFreeVehicle()) return 0;
  
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();
  
    if (hour == 6 && minute >= 0 && minute <= 29) return 10;
    else if (hour == 6 && minute >= 30 && minute <= 59) return 15;
    else if (hour == 7 && minute >= 0 && minute <= 59) return 20;
    else if (hour == 8 && minute >= 0 && minute <= 29) return 15;
    else if (hour >= 8 && minute >= 0 && hour <= 14 && minute <= 59) return 10;
    else if (hour == 15 && minute >= 0 && minute <= 29) return 15;
    else if (hour == 15 && minute >= 0 || hour == 16 && minute <= 59) return 20;
    else if (hour == 17 && minute >= 0 && minute <= 59) return 15;
    else if (hour == 18 && minute >= 0 && minute <= 29) return 10;
    else return 0;
  }
}