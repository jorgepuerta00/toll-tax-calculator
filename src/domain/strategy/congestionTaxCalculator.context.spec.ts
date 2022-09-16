import { CongestionTaxCalculatorContext } from './congestionTaxCalculator.context';
import { CityCongestionTaxCalculatorEnum } from './cities.enum';
import Car from '../vehicle/car';
import { VehicleFactory } from '../vehicle/vehicle.factory';
import { TestingModule, Test } from '@nestjs/testing';

describe('CongestionTaxCalculatorContext', () => {
  let context: CongestionTaxCalculatorContext;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [CongestionTaxCalculatorContext, VehicleFactory],
    }).compile();
    
    context = app.get<CongestionTaxCalculatorContext>(CongestionTaxCalculatorContext);
  });

  describe('Gothenburg Congestion Tax Calculator', () => {
    it('should return 29 total fee', () => {
      context.createCitiesCongestionTaxCalculatorStrategy('Car', dates);
      const strategy = context.getCityCongestionTaxCalculatorStrategy(CityCongestionTaxCalculatorEnum[CityCongestionTaxCalculatorEnum.Gothenburg]);
      expect(strategy.getTax()).toBe(29);
    });
  });

  describe('Stockholm Congestion Tax Calculator', () => {
    it('should return 35 total fee', () => {
      context.createCitiesCongestionTaxCalculatorStrategy('Car', dates);
      const strategy = context.getCityCongestionTaxCalculatorStrategy(CityCongestionTaxCalculatorEnum[CityCongestionTaxCalculatorEnum.Stockholm]);
      expect(strategy.getTax()).toBe(35);
    });
  });

});

const dates: Date[] = [
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
];