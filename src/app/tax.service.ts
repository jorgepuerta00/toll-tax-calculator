import { Injectable } from '@nestjs/common';
import { TaxRequestDTO } from '../libs/TaxRequestDTO';
import { CongestionTaxCalculatorContext } from '../domain/strategy/congestionTaxCalculator.context';
import { ITollTaxCalculatorResponse, TollTaxCalculatorResponse } from '../libs/response';

@Injectable()
export class TaxService {

  constructor(
    private context: CongestionTaxCalculatorContext
  ) {}

  getTax(taxRequest: TaxRequestDTO): ITollTaxCalculatorResponse {
    this.context.createCitiesCongestionTaxCalculatorStrategy(taxRequest.vehicleType, taxRequest.dates);
    const strategy = this.context.getCityCongestionTaxCalculatorStrategy(taxRequest.city);
    return new TollTaxCalculatorResponse(taxRequest.vehicleType, taxRequest.city, strategy.getTax());
  }
}
