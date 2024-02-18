// basic math calculation

export const Add = (a, b) => {
  return a + b;
};

export const Multiply = (a, b) => {
  return a * b;
};

export const Substract = (a, b) => {
  return a - b;
};

export const Divide = (a, b) => {
  if (b > 0) {
    return a / b;
  } else {
    ("A can not divide by 0");
  }
};

export const squareRoot = (a) =>
  a >= 0 ? Math.sqrt(a) : "Cannot calculate square root of a negative number";

export const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// circle all calculation

export const ReverseString = (str) => {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  return revstr;
};
