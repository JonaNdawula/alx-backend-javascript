const groceriesList = () => {
  const groceries = new Map()
    .set('Apples', 10)
    .set('Tomatoes', 10)
    .set('pasta', 1)
    .set('Rice', 1)
    .set('Banana', 5);

  return groceries;
};

export default groceriesList;
