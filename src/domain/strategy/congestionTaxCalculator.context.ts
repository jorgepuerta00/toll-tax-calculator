import { Dictionary } from "lodash";
import { ICongestionTaxCalculator } from "../tax/interfaces/ICongestionTaxCalculator";
import { TollGothenburgCalculator } from "../tax/tollGothenburgCalculator.strategy";
import { TollStockholmCalculator } from "../tax/tollStockholmCalculator.strategy";
import { CityCongestionTaxCalculatorEnum } from "./cities.enum";
import { VehicleFactory } from "../vehicle/vehicle.factory";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CongestionTaxCalculatorContext {
  private strategy: Dictionary<ICongestionTaxCalculator>;

  constructor(
    private vehicleFactory: VehicleFactory 
  ) {
    this.strategy = {};
  }

  public createCitiesCongestionTaxCalculatorStrategy(vehicleType: string, dates: Date[]) {
    const vehicle = this.vehicleFactory.getVehicle(vehicleType);
    this.strategy[CityCongestionTaxCalculatorEnum[CityCongestionTaxCalculatorEnum.Gothenburg]] = new TollGothenburgCalculator(vehicle, dates);
    this.strategy[CityCongestionTaxCalculatorEnum[CityCongestionTaxCalculatorEnum.Stockholm]] = new TollStockholmCalculator(vehicle, dates);
  }

  public getCityCongestionTaxCalculatorStrategy(city: string): ICongestionTaxCalculator {
    return this.strategy[city];
  }

}