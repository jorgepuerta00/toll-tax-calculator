import { TollFreeVehicles } from "../tax/enum/tollFreeVehicle.enum";
import IVehicle from "./IVehicle";

export default class Motorbike implements IVehicle {
  getVehicleType(): string {
    return TollFreeVehicles[TollFreeVehicles.Motorcycle];
  }
}