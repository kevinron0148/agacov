import { Item } from "./item";

export class DatosQr {
    constructor(
      public type: String,
      public urlToken: String,
      public item: Item,
    ){}
}
  