// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.


  let name = '';
  let length = cardNumber.length;
  let firstTwoNum = Number.parseInt(cardNumber.slice(0, 2));
  let firstOneNum = Number.parseInt(cardNumber[0]);
  let firstFourNum = Number.parseInt(cardNumber.slice(0, 4));
  let firstThreeNum = Number.parseInt(cardNumber.slice(0, 3));
  let firstSixNum = Number.parseInt(cardNumber.slice(0, 6));

  if (length === 14 && (firstTwoNum === 38 || firstTwoNum === 39)) {
    name = `Diner's Club`;
  } else if (length === 15 && (firstTwoNum === 34 || firstTwoNum === 37)) {
    name = 'American Express';
  } else if ((length === 13 || length === 16 || length === 19) && (firstOneNum === 4)) {
    name = 'Visa';
  } else if ((length === 16) && (firstTwoNum === 51 || firstTwoNum === 52 || firstTwoNum === 53 || firstTwoNum === 54 || firstTwoNum === 55)) {
    name = 'MasterCard';
  } else if ((length === 16 || length === 19) && (firstFourNum === 6011 || (firstThreeNum >= 644 && firstThreeNum <= 649) || firstTwoNum === 65)) {
    name = 'Discover';
  } else if ((length >= 12 && length <= 19) && (firstFourNum === 5018 || firstFourNum === 5020 || firstFourNum === 5038 || firstFourNum === 6304)) {
    name = 'Maestro';
  } else if ((length >= 16 || length <= 19) && ((firstSixNum >= 622126 && firstSixNum <= 622295) || (firstThreeNum >= 624 && firstThreeNum <= 626) || (firstFourNum >= 6282 && firstFourNum <= 6288))) {
    name = 'China UnionPay';
  } else {
    name = "We don't know!";
  }
  return name;
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
