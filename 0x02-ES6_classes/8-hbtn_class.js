export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](conversionType) {
    if (conversionType === 'number') {
      return this._size;
    }
    if (conversionType === 'string') {
      return this._location;
    }

    return null;
  }
}
