// basic math calculation

export const AddNumbers = (...numbers) => {
  
  return numbers.reduce((sum, number) => sum + number, 0);
}; 

export const SubstractNumber = (...number)=>{
  return number.reduce((sum, number) => sum - number, 0);
}


export const DivideNumber = (a, b) => {
  if (b > 0) {
    return a / b;
  } else {
    ("A can not divide by 0");
  }
};

export const SquareRoot = (a) =>
  a >= 0 ? Math.sqrt(a) : "Cannot calculate square root of a negative number";

export const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// circle all calculation

export const clog = () => console.log();

export const  fn =()=>  function(){}

export const ReverseString = (str) => {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  return revstr;
};

export const calculateEMI = (p, t, r) => {
  const monthlyInterestRate = r / 12 / 100;
  const numberOfPayments = t * 12;

  const emi = (p * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  return emi.toFixed(2); // Round to 2 decimal places
};

console.log(calculateEMI(p, t, r));

export function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Celsius to Fahrenheit
export function CelsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}


