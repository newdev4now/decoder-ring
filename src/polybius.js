// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // Create the square
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const decodingAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '(i/j)', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
  const cipherArray = [11, 21, 31, 41, 51, 12, 22, 32, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55, 00];
  let square = {
    1: ['a', 'b', 'c', 'd', 'e'],
    2: ['f', 'g', 'h', '(i/j)', 'k'],
    3: ['l', 'm', 'n', 'o', 'p'],
    4: ['q', 'r', 's', 't', 'u'],
    5: ['v', 'w', 'x', 'y', 'z']
  };

  // Decode function
  function decoder(input) {
  // Giving a number pair to ' '
    let newInput = input.replace(/ /g, '00');
  // Number of characters should be even otherwise return false
    if (newInput.length % 2 != 0) return false;
  // Characters to decode
    let inputArray = newInput.match(/../g);

    console.log(inputArray);
  // Create a variable for end result
    let message = '';
  // Iterate through the input message
    for (let i = 0; i < inputArray.length; i++) {
      let index = inputArray[i];
      if (index == '00') {
  // Spaces should be maintained
        message += ' ';
      } else {
  // Get the letters for the corresponding number pairs

        let alphabetIndex = cipherArray.indexOf(Number(index));
        message += decodingAlphabet[alphabetIndex];
      }
    }
    return message;
  }

  // Encode function
  function encoder(input) {
    // Ignore Capital letters
    let newInput = input.toLowerCase();
    // Create variable for end result
    let message = '';
    // Iterate through the input message
    for (let i = 0; i < newInput.length; i++) {
      let newIndex = newInput[i];
    // Maintain spaces
      if (!alphabet.includes(newIndex)) {
        message += newIndex;
      }
    // the letters 'i' and 'j' share a space
      if (newIndex === 'i' || newIndex === 'j') {
        message += '42';
      }
    // Get the numbers to encrypt the message
      for (let row in square) {
        if (square[row].includes(newIndex)) {
          message += `${square[row].indexOf(newIndex) + 1}` + `${row}`
        }
      }
    }
    // Return encoded result
    return message;
  };


  function polybius(input, encode = true) {
  // If the message needs to be encoded
    if (encode) {
      return encoder(input)
    } else {
  // If the message needs to be decoded
      return decoder(input)
    }
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
