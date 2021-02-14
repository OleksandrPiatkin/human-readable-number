module.exports = function toReadable(number) {
  const simpleNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const teenth = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const decades = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  const hundred = "hundred";
  const numberArray = number.toString().split("");

  const getUnderHundred = (numberArray, number) => {
    if (number < 10) {
      return simpleNumbers[number];
    }
    else if (number > 9 && number < 20) {
      return teenth[numberArray[1]];
    }
    else if (number > 19 && number < 100) {
      if (numberArray[1] === "0") {
        return decades[numberArray[0]];
      }
      return `${decades[numberArray[0]]} ${simpleNumbers[numberArray[1]]}`;
    }
  };
  
  const getUpperHundred = (numberArray) => {
    const underHundred = [...numberArray[1], ...numberArray[2]];
    const underHundredNumber = Number(underHundred.join(""));
    if (numberArray[1] == "0" && numberArray[2] == "0") {
      return `${simpleNumbers[numberArray[0]]} ${hundred}`;
    }
    else {
      return `${simpleNumbers[numberArray[0]]} ${hundred} ${getUnderHundred(underHundred, underHundredNumber)}`
    }
  };

  return number < 100 ? getUnderHundred(numberArray, number) : getUpperHundred(numberArray);
}