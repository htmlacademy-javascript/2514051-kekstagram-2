const isStringLengthValid = (str, length) => str.length <= length;


function isStrPalyndrom(str) {
  const optiStr = str.replaceAll(' ', '').toLowerCase();

  let left = 0;
  let right = optiStr.length - 1;

  while (left < right) {
    if (optiStr[left] !== optiStr[right]) {
      return false;
    }
    else {
      left++;
      right--;
      return true;
    }
  }

}


function removeNum(str) {
  const numberStr = String(str).replaceAll(/\D/g, '');

  const num = parseInt(numberStr, 10);

  return Number.isNaN(num) ? NaN : num;

}

