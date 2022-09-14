import { TollFreeVehicles } from "../tax/enum/tollFreeVehicle.enum";
import IVehicle from "./IVehicle";

export class Diplomat implements IVehicle {
  getVehicleType(): string {
    return TollFreeVehicles[TollFreeVehicles.Diplomat];
  }
}

export class Emergency implements IVehicle {
  getVehicleType(): string {
    return TollFreeVehicles[TollFreeVehicles.Emergency];
  }
}

export class Foreign implements IVehicle {
  getVehicleType(): string {
    return TollFreeVehicles[TollFreeVehicles.Foreign];
  }
}

export class Military implements IVehicle {
  getVehicleType(): string {
    return TollFreeVehicles[TollFreeVehicles.Military];
  }
}

export class Tractor implements IVehicle {
  getVehicleType(): string {
    return TollFreeVehicles[TollFreeVehicles.Tractor];
  }
}