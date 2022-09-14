import { Module } from '@nestjs/common';
import { TollTaxCalculatorController } from './api/app.controller';
import { CongestionTaxCalculatorContext } from './domain/strategy/congestionTaxCalculator.context';
import { TaxService } from './app/tax.service';
import { VehicleFactory } from './domain/vehicle/vehicle.factory';

@Module({
  imports: [],
  controllers: [TollTaxCalculatorController],
  providers: [TaxService, CongestionTaxCalculatorContext, VehicleFactory],
})
export class AppModule {}
