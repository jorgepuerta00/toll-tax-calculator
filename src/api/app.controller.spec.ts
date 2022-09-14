import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { TollTaxCalculatorController } from './app.controller';
import { TaxService } from '../app/tax.service';
import { CongestionTaxCalculatorContext } from '../domain/strategy/congestionTaxCalculator.context';
import { VehicleFactory } from '../domain/vehicle/vehicle.factory';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';

describe('AppController', () => {
  let app: INestApplication;
  let controller: TollTaxCalculatorController;
  let service: TaxService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(TaxService)
      .useValue(service)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();

    service = app.get<TaxService>(TaxService);
    controller = new TollTaxCalculatorController(service);
  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

});
