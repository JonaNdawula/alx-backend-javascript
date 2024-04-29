const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') {
    return '';
  }
  return [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
};

export default cleanSet;
