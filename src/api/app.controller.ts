import { Controller, Get, Query } from '@nestjs/common';
import { ITollTaxCalculatorResponse } from '../libs/response';
import { TaxRequestDTO } from '../libs/TaxRequestDTO';
import { TaxService } from '../app/tax.service';
import { ApiTags, } from '@nestjs/swagger';

@ApiTags('Toll')
@Controller('toll/tax/calculator')
export class TollTaxCalculatorController {
  constructor(private readonly service: TaxService) {}

  @Get()
  getTax(@Query() taxRequest: TaxRequestDTO): ITollTaxCalculatorResponse {
    return this.service.getTax(taxRequest);
  }
}
