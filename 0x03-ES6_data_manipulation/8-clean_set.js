const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') {
    return '';
  }
  const sets = [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');

  return sets;
};

export default cleanSet;
