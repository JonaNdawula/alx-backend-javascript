export default class Car {
  constructor(brand = null, motor = null, color = null) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    const propertySymbols = Object.getOwnPropertySymbols(this);
    propertySymbols.forEach((propertySymbol) => {
      clonedCar[propertySymbol] = this[propertySymbol];
    });
    return clonedCar;
  }
}
