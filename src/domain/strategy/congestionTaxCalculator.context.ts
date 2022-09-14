import { Dictionary } from "lodash";
import { ICongestionTaxCalculator } from "../tax/interfaces/ICongestionTaxCalculator";
import { TollGothenburgCalculator } from "../tax/tollGothenburgCalculator.strategy";
import { TollStockholmCalculator } from "../tax/tollStockholmCalculator.strategy";
import { CityCongestionTaxCalculatorEnum } from "./cities.enum";
import IVehicle from "../vehicle/IVehicle";

export class CongestionTaxCalculatorContext {
  private strategy: Dictionary<ICongestionTaxCalculator>;

  constructor() {
    this.strategy = {};
  }

  public createCitiesCongestionTaxCalculatorStrategy(vehicle: IVehicle, dates: Date[]) {
    this.strategy[CityCongestionTaxCalculatorEnum[CityCongestionTaxCalculatorEnum.Gothenburg]] = new TollGothenburgCalculator(vehicle, dates);
    this.strategy[CityCongestionTaxCalculatorEnum[CityCongestionTaxCalculatorEnum.Stockholm]] = new TollStockholmCalculator(vehicle, dates);
  }

  public getCityCongestionTaxCalculatorStrategy(city: string): ICongestionTaxCalculator {
    return this.strategy[city];
  }

}