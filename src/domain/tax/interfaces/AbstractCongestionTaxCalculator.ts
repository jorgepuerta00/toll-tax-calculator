import IVehicle from "../../vehicle/IVehicle";
import { TollFreeVehicles } from "../enum/tollFreeVehicle.enum";
import { ICongestionTaxCalculator } from "./ICongestionTaxCalculator";

export abstract class AbstractCongestionTaxCalculator implements ICongestionTaxCalculator {

  public vehicle: IVehicle;
  public dates: Date[];

  constructor(vehicle: IVehicle, dates: Date[]) {
    this.vehicle = vehicle;
    this.dates = dates;
  }

  public abstract getTax(): number;
  public abstract getTollFee(date: Date): number;

  public isTollFreeVehicle(): boolean {
    if (this.vehicle == null) return false;
    const vehicleType: string = this.vehicle.getVehicleType();

    return vehicleType == TollFreeVehicles[TollFreeVehicles.Motorcycle] ||
      vehicleType == TollFreeVehicles[TollFreeVehicles.Tractor] ||
      vehicleType == TollFreeVehicles[TollFreeVehicles.Emergency] ||
      vehicleType == TollFreeVehicles[TollFreeVehicles.Diplomat] ||
      vehicleType == TollFreeVehicles[TollFreeVehicles.Foreign] ||
      vehicleType == TollFreeVehicles[TollFreeVehicles.Military];
  }

  public isTollFreeDate(date: Date): boolean {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDay() + 1;
    const dayOfMonth: number = date.getDate();

    if (this.isWeekend(day)) {
      return true;
    }

    if (year == 2013) {
      if ((month == 1 && dayOfMonth == 1) ||
        (month == 3 && (dayOfMonth == 28 || dayOfMonth == 29)) ||
        (month == 4 && (dayOfMonth == 1 || dayOfMonth == 30)) ||
        (month == 5 && (dayOfMonth == 1 || dayOfMonth == 8 || dayOfMonth == 9)) ||
        (month == 6 && (dayOfMonth == 5 || dayOfMonth == 6 || dayOfMonth == 21)) ||
        (month == 7) ||
        (month == 11 && dayOfMonth == 1) ||
        (month == 12 && (dayOfMonth == 24 || dayOfMonth == 25 || dayOfMonth == 26 || dayOfMonth == 31))) {
        return true;
      }
    }
    return false;
  }

  private isWeekend(day: number) {
    return day == 6 || day == 0;
  }
}