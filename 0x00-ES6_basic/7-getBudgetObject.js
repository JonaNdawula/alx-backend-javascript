export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income, gdp, capita,
  };

  return budget;
}
