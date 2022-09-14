import { Test, TestingModule } from '@nestjs/testing';
import { VehicleFactory } from '../domain/vehicle/vehicle.factory';
import { CongestionTaxCalculatorContext } from '../domain/strategy/congestionTaxCalculator.context';
import { TaxService } from './tax.service';
import { TaxRequestDTO } from 'src/libs/TaxRequestDTO';

describe('Tax Service', () => {
  let service: TaxService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [TaxService, CongestionTaxCalculatorContext, VehicleFactory],
    }).compile();

    service = app.get<TaxService>(TaxService);
  });

  describe('getTax unit testing', () => {

    it('should return 29 total fee', () => {
      const result = service.getTax(request);
      expect(result.totalFee).toBe(29);
    });

  });

});

const request: TaxRequestDTO = {
  vehicleType: "Car",
  city: 'Gothenburg',
  dates: [
    new Date("2013-01-14 21:00:00"),
    new Date("2013-01-15 21:00:00"),
    new Date("2013-02-07 06:23:27"),
    new Date("2013-02-07 15:27:00"),
    new Date("2013-02-08 06:20:27"),
    new Date("2013-02-08 06:27:00"),
    new Date("2013-02-08 14:35:00"),
    new Date("2013-02-08 15:29:00"),
    new Date("2013-02-08 15:47:00"),
    new Date("2013-02-08 16:01:00"),
    new Date("2013-02-08 16:48:00"),
    new Date("2013-02-08 17:49:00"),
    new Date("2013-02-08 18:29:00"),
    new Date("2013-02-08 18:35:00"),
    new Date("2013-03-26 14:25:00"),
    new Date("2013-03-28 14:07:27")
  ]
}