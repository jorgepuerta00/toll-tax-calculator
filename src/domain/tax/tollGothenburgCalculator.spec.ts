import Car from '../vehicle/car';
import Motorbike from '../vehicle/motorbike';
import { TollGothenburgCalculator } from './tollGothenburgCalculator.strategy';

describe('Toll Gothenburg Calculator', () => {
  let calculator: TollGothenburgCalculator;

  describe('Free vehicle unit testing', () => {

    beforeEach(async () => {
      calculator = new TollGothenburgCalculator(new Motorbike(), dates);
    });

    it('should return 0 for total fee', () => {
      expect(calculator.getTax()).toBe(0);
    });

    it('should return 0 fee for free date', () => {
      expect(calculator.getTollFee(dates[dates.length - 1])).toBe(0);
    });

    it('should return 0 for current date', () => {
      expect(calculator.getTollFee(new Date("2022-09-13 7:00:00"))).toBe(0);
    });

  });

  describe('Taxable vehicle unit testing for assignment dates', () => {

    beforeEach(async () => {
      calculator = new TollGothenburgCalculator(new Car(), dates);
    });

    it('should return 29 for total fee', () => {
      expect(calculator.getTax()).toBe(29);
    });

    it('should return 0 fee for free hour', () => {
      expect(calculator.getTollFee(new Date("2013-02-08 18:35:00"))).toBe(0);
    });

    it('should return 8 fee for taxable hour', () => {
      expect(calculator.getTollFee(new Date("2013-02-07 06:23:27"))).toBe(8);
    });

    it('should return 8 fee for taxable hour', () => {
      expect(calculator.getTollFee(new Date("2013-03-26 14:25:00"))).toBe(8);
    });

    it('should return 13 fee for taxable hour', () => {
      expect(calculator.getTollFee(new Date("2013-02-07 15:27:00"))).toBe(13);
    });

    it('should return 0 fee for weekend', () => {
      expect(calculator.getTollFee(new Date("2013-02-08 06:20:27"))).toBe(0);
    });

    it('should return 0 fee for holiday', () => {
      expect(calculator.getTollFee(new Date("2013-03-28 14:07:27"))).toBe(0);
    });

    it('should return 18 for random date', () => {
      expect(calculator.getTollFee(new Date("2022-09-13 7:00:00"))).toBe(18);
    });

  });

  describe('Taxable vehicle unit testing for maximum tax per day', () => {

    beforeEach(async () => {
      calculator = new TollGothenburgCalculator(new Car(), maxFeePerDay);
    });

    it('should return 60 for total fee', () => {
      expect(calculator.getTax()).toBe(60);
    });

    it('should return 8 fee for time range 06:00–06:29', () => {
      expect(calculator.getTollFee(maxFeePerDay[0])).toBe(8);
    });

    it('should return 13 fee for time range 06:30–06:59', () => {
      expect(calculator.getTollFee(maxFeePerDay[1])).toBe(13);
    });

    it('should return 18 fee for time range 07:00–07:59', () => {
      expect(calculator.getTollFee(maxFeePerDay[2])).toBe(18);
    });

    it('should return 13 fee for time range 08:00–08:29', () => {
      expect(calculator.getTollFee(maxFeePerDay[3])).toBe(13);
    });

    it('should return 8 fee for time range 08:30–14:59', () => {
      expect(calculator.getTollFee(maxFeePerDay[4])).toBe(8);
    });

    it('should return 13 fee for time range 15:00–15:29', () => {
      expect(calculator.getTollFee(maxFeePerDay[5])).toBe(13);
    });

    it('should return 18 fee for time range 15:30–16:59', () => {
      expect(calculator.getTollFee(maxFeePerDay[6])).toBe(18);
    });

    it('should return 13 fee for time range 17:00–17:59', () => {
      expect(calculator.getTollFee(maxFeePerDay[7])).toBe(13);
    });

    it('should return 8 fee for time range 18:00–18:29', () => {
      expect(calculator.getTollFee(maxFeePerDay[8])).toBe(8);
    });

    it('should return 0 fee for time range 18:30–05:59', () => {
      expect(calculator.getTollFee(maxFeePerDay[9])).toBe(0);
    });

  });

  describe('Taxable vehicle unit testing for Sweden holidays', () => {

    beforeEach(async () => {
      calculator = new TollGothenburgCalculator(new Car(), holidaysSweden);
    });

    it('should return 0 for total fee', () => {
      expect(calculator.getTax()).toBe(0);
    });

  });

});

const dates: Date[] = [
  new Date("2013-01-14 21:00:00"), // 0 fee for free hour
  new Date("2013-01-15 21:00:00"), // 0 fee for free hour
  new Date("2013-02-07 06:23:27"), // 8 fee
  new Date("2013-02-07 15:27:00"), // 13 fee 
  new Date("2013-02-08 06:20:27"), // 0 fee for weekend
  new Date("2013-02-08 06:27:00"), // 0 fee for weekend
  new Date("2013-02-08 14:35:00"), // 0 fee for weekend
  new Date("2013-02-08 15:29:00"), // 0 fee for weekend
  new Date("2013-02-08 15:47:00"), // 0 fee for weekend
  new Date("2013-02-08 16:01:00"), // 0 fee for weekend
  new Date("2013-02-08 16:48:00"), // 0 fee for weekend
  new Date("2013-02-08 17:49:00"), // 0 fee for weekend
  new Date("2013-02-08 18:29:00"), // 0 fee for weekend
  new Date("2013-02-08 18:35:00"), // 0 fee for free hour
  new Date("2013-03-26 14:25:00"), // 8 fee
  new Date("2013-03-28 14:07:27")  // 0 fee for holiday
];

const maxFeePerDay: Date[] = [
  new Date("2022-09-13 06:20:00"), // 8 fee
  new Date("2022-09-13 06:35:00"), // 13 fee
  new Date("2022-09-13 07:30:00"), // 18 fee
  new Date("2022-09-13 08:00:00"), // 13 fee 
  new Date("2022-09-13 14:30:00"), // 8 fee 
  new Date("2022-09-13 15:27:00"), // 13 fee 
  new Date("2022-09-13 16:35:00"), // 18 fee
  new Date("2022-09-13 17:29:00"), // 13 fee 
  new Date("2022-09-13 18:29:00"), // 8 fee
  new Date("2022-09-13 18:59:00")  // 0 fee for free hour
];

const holidaysSweden: Date[] = [
  new Date("2013-01-01 06:20:00"), // 0 fee for holiday
  new Date("2013-03-28 06:35:00"), // 0 fee for holiday
  new Date("2013-03-29 06:35:00"), // 0 fee for holiday
  new Date("2013-04-01 07:30:00"), // 0 fee for holiday
  new Date("2013-04-30 07:30:00"), // 0 fee for holiday
  new Date("2013-05-01 08:00:00"), // 0 fee for holiday
  new Date("2013-05-08 08:00:00"), // 0 fee for holiday
  new Date("2013-05-09 08:00:00"), // 0 fee for holiday
  new Date("2013-06-05 14:30:00"), // 0 fee for holiday
  new Date("2013-06-06 14:30:00"), // 0 fee for holiday
  new Date("2013-06-21 14:30:00"), // 0 fee for holiday
  new Date("2013-07-01 15:27:00"), // 0 fee for holiday
  new Date("2013-07-20 15:27:00"), // 0 fee for holiday
  new Date("2013-11-01 16:35:00"), // 0 fee for holiday
  new Date("2013-12-24 16:35:00"), // 0 fee for holiday
  new Date("2013-12-25 16:35:00"), // 0 fee for holiday
  new Date("2013-12-26 16:35:00"), // 0 fee for holiday
  new Date("2013-12-31 16:35:00")  // 0 fee for holiday
];