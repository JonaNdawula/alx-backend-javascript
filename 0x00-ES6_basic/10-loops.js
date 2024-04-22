export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const idx of array.keys()) {
    arr.push(`${appendString}${array[idx]}`);
  }

  return arr;
}
