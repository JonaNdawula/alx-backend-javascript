export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  let idx = 0;
  for (const value of array) {
    arr.push(`${appendString}${value}`);
    idx++;
  }
  
  return arr;
}
