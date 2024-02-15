export function countDecimalPlaces(number: number) {
  if (!number) {
    return 0;
  }
  // Converta o número em uma string
  const numberString = number.toString();
  // Verifique se há um ponto decimal na string
  const decimalIndex = numberString.indexOf('.');
  if (decimalIndex === -1) {
    // Se não houver ponto decimal, o número é inteiro e não tem casas decimais
    return 0;
  } else {
    // Caso contrário, calcule o número de caracteres após o ponto decimal
    return numberString.length - decimalIndex - 1;
  }
}

export function formatToReais(number: number): Number {
  const numberDecimalPlace = countDecimalPlaces(number);
  if (numberDecimalPlace == 1) {
    const newValue = number.toString() + '0';
    return new Number(newValue);
  }
  return 0;
}

export function putDecimalPlace(value: number, numberCase: number) {
  let newNumber;
  if (!value) {
    return '0.0';
  } else {
    newNumber = value.toString();
  }
  let numberCurrent = countDecimalPlaces(value);

  if (numberCurrent == 0) {
    if (!newNumber.includes('.')) {
      newNumber += '.';
    }
  }

  while (numberCurrent < numberCase) {
    newNumber += '0';
    numberCurrent++;
  }
  return newNumber;
}
