const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw Error('position outside range');
  }

  const arrBuffer = new ArrayBuffer(length);
  const i8view = new Int8Array(arrBuffer, 0, length);
  i8view.set([value], position);
  return new DataView(arrBuffer);
};

export default createInt8TypedArray;
