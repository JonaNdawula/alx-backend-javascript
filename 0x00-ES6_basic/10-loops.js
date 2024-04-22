export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (const [idx, element] of array.entries()) {
    arr.push(`${appendString}${element}`);
  }

  return arr;
}
