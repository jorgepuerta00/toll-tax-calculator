import { Dictionary } from "lodash";
import IVehicle from "./IVehicle";
import Car from "./car";
import Motorbike from "./motorbike";
import { Diplomat, Emergency, Foreign, Military, Tractor } from "./others";
import { TypeVehicle } from "./vehicle.type";
import { Injectable } from "@nestjs/common";

@Injectable()
export class VehicleFactory {
  private factory: Dictionary<IVehicle>;

  constructor() {
    this.factory = {};
    this.createFactory();
  }

  public createFactory() {
    this.factory[TypeVehicle[TypeVehicle.Diplomat]] = new Diplomat();
    this.factory[TypeVehicle[TypeVehicle.Emergency]] = new Emergency();
    this.factory[TypeVehicle[TypeVehicle.Foreign]] = new Foreign();
    this.factory[TypeVehicle[TypeVehicle.Military]] = new Military();
    this.factory[TypeVehicle[TypeVehicle.Motorcycle]] = new Motorbike();
    this.factory[TypeVehicle[TypeVehicle.Tractor]] = new Tractor();
    this.factory[TypeVehicle[TypeVehicle.Car]] = new Car();
  }

  public getVehicle(vehicleType: string): IVehicle {
    return this.factory[vehicleType];
  }

}