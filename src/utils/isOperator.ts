const operators = ["+", "-", "*", "/"];

export const isOperator = (value: string) => {
  return operators.includes(value);
};
