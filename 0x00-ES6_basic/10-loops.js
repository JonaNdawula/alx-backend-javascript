export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  let idx = 0;
  for (const val of array) {
    arr.push(`${appendString}${val}`);
    idx++;
  }

  return arr;
}
