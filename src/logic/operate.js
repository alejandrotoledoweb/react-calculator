import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  let result;
  const one = Big(numberOne);
  const two = Big(numberTwo);

  if (operation === '+') {
    total = one.plus(two);
    result = { total: null, next: total, operation };
  }

  if (operation === '-') {
    total = one.minus(two);
    result = { total: null, next: total, operation };
  }

  if (operation === '÷') {
    if (two === '0') {
      result = { total: 'Math Error', next: null, operation };
    } else {
      total = one.div(two);
      result = { total: null, next: total, operation };
    }
  }

  if (operation === 'X') {
    total = one.times(two);
    result = { total: null, next: total, operation };
  }

  if (operation === '%') {
    total = one.mod(two);
    result = { total: null, next: total, operation };
  }

  return result;
};

export default operate;