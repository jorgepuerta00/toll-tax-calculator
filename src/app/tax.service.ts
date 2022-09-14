import { Injectable } from '@nestjs/common';
import { TaxRequestDTO } from '../libs/TaxRequestDTO';
import { CongestionTaxCalculatorContext } from '../domain/strategy/congestionTaxCalculator.context';
import { ITollTaxCalculatorResponse, TollTaxCalculatorResponse } from '../libs/response';
import { VehicleFactory } from '../domain/vehicle/vehicle.factory';

@Injectable()
export class TaxService {

  constructor(
    private context: CongestionTaxCalculatorContext,
    private vehicleFactory: VehicleFactory 
  ) {}

  getTax(taxRequest: TaxRequestDTO): ITollTaxCalculatorResponse {

    console.log("*****************+")
    console.log(taxRequest)
    console.log("*****************+")

    const vehicle = this.vehicleFactory.getVehicle(taxRequest.vehicleType);
    this.context.createCitiesCongestionTaxCalculatorStrategy(vehicle, taxRequest.dates);
    const strategy = this.context.getCityCongestionTaxCalculatorStrategy(taxRequest.city);
    return new TollTaxCalculatorResponse(taxRequest.vehicleType, taxRequest.city, strategy.getTax());
  }
}
