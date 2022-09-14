import IVehicle from "./IVehicle";

export default class Car implements IVehicle {
  getVehicleType(): string {
    return "Car";
  }
}