const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw Error('cannot process');
  }

  items.forEach((value, key) => {
    if (value === 1) {
      items.set(key, 100);
    }
  });

  return items;
};

export default updateUniqueItems;
